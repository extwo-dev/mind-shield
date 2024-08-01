"use client";

import Link from "next/link";
import { NextPage } from "next";
import { useState } from "react";
import { SignUpForm } from "./_components/sign-up-form";
import { SignUpFormData } from "./_schema/sign-up-schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { trpc } from "@/utils/trpc";
import { createSession } from "@/utils/auth/session";

const SignUpPage: NextPage = () => {
  const mutation = trpc.auth.signUp.useMutation();
  const [signUpError, setSignUpError] = useState<string>("");

  const formHandler = (values: SignUpFormData) => {
    mutation.mutate(values, {
      onError: (error) => {
        setSignUpError(error.message);
      },

      onSuccess: (data) => {
        const userId = String(data.user.id);
        const userData = JSON.stringify(data.user);
        localStorage.setItem(userId, userData);

        createSession(data.user.id, "/onboarding/starter");
      },
    });
  };

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Регистрация
        </CardTitle>
        <CardDescription>
          Зарегистрируйтесь в системе тестированния военнослужащих Вооруженных
          Сил Республики Беларусь
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm
          error={signUpError}
          handler={formHandler}
          pending={mutation.isPending}
        />
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <span className="flex flex-row items-center gap-3 self-center">
          <p>Уже есть аккаунт?</p>
          <Link href="/auth/sign-in" className="underline">
            Войдите
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default SignUpPage;
