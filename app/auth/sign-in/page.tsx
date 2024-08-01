"use client";

import Link from "next/link";
import { NextPage } from "next";
import { SignInForm } from "./_components/sign-in-form";
import { SignInFormData } from "./_schema/sign-in-schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { trpc } from "@/utils/trpc";
import { useState } from "react";
import { createSession } from "@/utils/auth/session";

const SignInPage: NextPage = () => {
  const mutation = trpc.auth.signIn.useMutation();
  const [authError, setAuthError] = useState<string>("");

  const formHandler = (values: SignInFormData) => {
    mutation.mutate(values, {
      onError(error) {
        setAuthError(error.message);
      },

      onSuccess(data) {
        const userId = String(data.user.id);
        const userData = JSON.stringify(data.user);

        localStorage.setItem(userId, userData);

        createSession(data.user.id, "/onboarding/dashboard");
      },
    });
  };

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Вход
        </CardTitle>
        <CardDescription>
          Войдите в систему тестированния военнослужащих Вооруженных Сил
          Республики Беларусь
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm
          error={authError}
          handler={formHandler}
          pending={mutation.isPending}
        />
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <span className="flex flex-row items-center gap-3 self-center">
          <p>Отсутствует аккаунт?</p>
          <Link href="/auth/sign-up" className="underline">
            Зарегистрируйтесь
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default SignInPage;
