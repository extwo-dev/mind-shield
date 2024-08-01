"use server";

import { cookies } from "next/headers";
import { JWTPayload } from "./types";
import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

const cookie = {
  name: "session",
  options: {
    path: "/",
    secure: true,
    httpOnly: true,
  },
  duration: 24 * 60 * 60 * 1000,
};

export async function encrypt(payload: JWTPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(secret);
}

export async function decrypt(session: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(session, secret, {
      algorithms: ["HS256"],
    });

    return payload as JWTPayload;
  } catch (error) {
    return null;
  }
}

export async function createSession(
  userId: number,
  redirectHref: string
): Promise<void> {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({
    userId,
    expiresIn: expires,
  });

  cookies().set(cookie.name, session, {
    ...cookie.options,
    expires,
  });
  redirect(redirectHref);
}

export async function verifySession() {
  const session = cookies().get(cookie.name)?.value;
  const payload = await decrypt(session!);

  if (!payload?.userId) {
    redirect("/auth/sign-in");
  }

  return {
    userId: payload.userId,
  };
}

export async function deleteSession() {
  cookies().delete(cookie.name);
}
