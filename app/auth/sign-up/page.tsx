"use client";

import { NextPage } from "next";
import { SignUpForm } from "./_components/sign-up-form";
import { SignUpFormData } from "./_schema/sign-up-form-schema";
import { SignUpFormCard } from "./_components/sign-up-form-card";

const SignUpPage: NextPage = () => {
  const formHandler = (v: SignUpFormData) => {
    console.log(v);
  };

  return (
    <SignUpFormCard>
      <SignUpForm handler={formHandler} />
    </SignUpFormCard>
  );
};

export default SignUpPage;
