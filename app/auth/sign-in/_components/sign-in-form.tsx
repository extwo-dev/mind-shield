"use client";

import React from "react";

import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormFields } from "./sign-in-form-fields";
import { SignInFormData, signInFormSchema } from "../_schema/sign-in-schema";

type FormProps = {
  pending: boolean;
  handler: (v: SignInFormData) => void;
};

export const SignInForm: React.FC<FormProps> = (props) => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.handler)}
        className="flex flex-col gap-4"
      >
        <SignInFormFields control={form.control} />
        <Button type="submit" size="lg" disabled={props.pending}>
          {props.pending ? "Загрузка..." : "Отправить"}
        </Button>
      </form>
    </Form>
  );
};
