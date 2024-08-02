"use client";

import React from "react";

import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormFields } from "./sign-up-form-fields";
import { SignUpFormData, signUpFormSchema } from "../_schema/sign-up-schema";

type FormProps = {
  pending: boolean;
  handler: (v: SignUpFormData) => void;
};

export const SignUpForm: React.FC<FormProps> = (props) => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.handler)}
        className="grid gap-4 grid-cols-2 grid-rows-4"
      >
        <SignUpFormFields control={form.control} />
        <Button
          size="lg"
          type="submit"
          className="col-span-2"
          disabled={props.pending}
        >
          {props.pending ? "Загрузка..." : "Отправить"}
        </Button>
      </form>
    </Form>
  );
};
