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
import { SignUpFormData, signUpFormSchema } from "../_schema/sign-up-schema";

type FormProps = {
  error: string;
  pending: boolean;
  handler: (v: SignUpFormData) => void;
};

export const SignUpForm: React.FC<FormProps> = (props) => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.handler)}
        className="grid gap-4 grid-cols-2 grid-rows-4"
      >
        <FormField
          name="lastName"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Фамилия" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          name="name"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          name="surname"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Отчество</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Отчество" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          name="dateOfBirth"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Дата рождения</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="ДД.ММ.ГГГГ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          name="phoneNumber"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="col-span-2">
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
              <FormItem className="col-span-2">
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
          <div className="p-2 rounded-md text-destructive col-span-2">
            {props.error}
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={props.pending}
          className="col-span-2"
        >
          {props.pending ? "Загрузка..." : "Отправить"}
        </Button>
      </form>
    </Form>
  );
};
