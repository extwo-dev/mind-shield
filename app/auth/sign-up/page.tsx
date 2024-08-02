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
import { useToast } from "@/components/ui/use-toast";

const SignUpPage: NextPage = () => {
  const { toast } = useToast();
  const mutation = trpc.auth.signUp.useMutation();

  const formHandler = (values: SignUpFormData) => {
    mutation.mutate(values, {
      onError: (error) => {
        toast({
          title: "Ошибка",
          variant: "destructive",
          description: error.message,
        });
      },

      onSuccess: (data) => {
        const userId = String(data.user.id);
        const userData = JSON.stringify(data.user);
        localStorage.setItem(userId, userData);

        createSession(data.user.id, "/onboarding/starter");

        toast({
          title: "Поздравляем!",
          description: "Вы успешно создали аккаунт",
        });
      },
    });
  };

  return (
    <Card className="max-w-xl border border-zinc-400">
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
        <SignUpForm handler={formHandler} pending={mutation.isPending} />
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
