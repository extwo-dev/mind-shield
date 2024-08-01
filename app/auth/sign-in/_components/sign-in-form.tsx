"use client";

import React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormData, signInFormSchema } from "../_schema/sign-in-schema";

type FormProps = {
  error: string;
  pending: boolean;
  handler: (v: SignInFormData) => void;
};

export const SignInForm: React.FC<FormProps> = (props) => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.handler)}
        className="flex flex-col gap-4"
      >
        <FormField
          name="phoneNumber"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Номер телефона</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="+375 (XX) XXX-XX-XX"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <div className="flex flex-row items-center justify-between gap-1">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="• • • • • • • • • • • •"
                      {...field}
                    />
                    <Button
                      size="icon"
                      type="button"
                      variant="outline"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        {props.error.length > 0 && (
          <div className="p-2 rounded-md text-destructive">{props.error}</div>
        )}

        <Button type="submit" size="lg" disabled={props.pending}>
          {props.pending ? "Загрузка..." : "Отправить"}
        </Button>
      </form>
    </Form>
  );
};
