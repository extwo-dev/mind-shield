"use client";

import React from "react";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignUpFormData,
  signUpFormSchema,
} from "../_schema/sign-up-form-schema";
import { PersonalInformation } from "./form-steps/personal-information";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { HomeInformation } from "./form-steps/home-information";
import { MilitaryInformation } from "./form-steps/military-information";
import { AccountInformation } from "./form-steps/account-information";

type FormProps = {
  handler: (v: SignUpFormData) => void;
};

export const SignUpForm: React.FC<FormProps> = (props) => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  const formStepComponents: React.ReactElement[] = [
    <PersonalInformation control={form.control} />,
    <HomeInformation control={form.control} />,
    <MilitaryInformation control={form.control} />,
    <AccountInformation control={form.control} />,
  ];

  const { step, component, next, prev, goto } =
    useMultistepForm(formStepComponents);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.handler)}
        className="flex flex-col gap-4"
      >
        {component}

        {step == formStepComponents.length - 1 ? (
          <Button type="submit" size="lg">
            Завершить
          </Button>
        ) : (
          <Button type="button" size="lg" onClick={next}>
            Далее
          </Button>
        )}
      </form>
    </Form>
  );
};
