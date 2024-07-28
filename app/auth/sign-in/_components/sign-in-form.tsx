"use client";

import React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import {
  SignInFormData,
  signInFormSchema,
} from "../_schema/sign-in-form-schema";

type FormProps = {
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
          name="phone_number"
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
                      placeholder="• • • • • •"
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

        <Button type="submit" size="lg">
          Войти
        </Button>
      </form>
    </Form>
  );
};
