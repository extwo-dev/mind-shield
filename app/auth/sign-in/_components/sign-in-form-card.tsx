import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type FormCardProps = {
  children: React.ReactNode
}

export const SignInFormCard: React.FC<FormCardProps> = (props) => {
  const { children } = props;

  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Вход в аккаунт
        </CardTitle>
        <CardDescription>
          Войдите в систему тестированния военнослужащих Вооруженных Сил Республики Беларусь
        </CardDescription>
      </CardHeader>
      <CardContent>
        { children }
      </CardContent>
    </Card>
  )
}