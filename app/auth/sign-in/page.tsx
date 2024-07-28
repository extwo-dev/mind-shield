"use client";

import { NextPage } from "next";
import { SignInForm } from "./_components/sign-in-form";
import { SignInFormData } from "./_schema/sign-in-form-schema";
import { SignInFormCard } from "./_components/sign-in-form-card";

const SignInPage: NextPage = () => {
  const formHandler = (v: SignInFormData) => {
    console.log(v)
  }

  return (
    <SignInFormCard>
      <SignInForm handler={formHandler} />
    </SignInFormCard>
  )
}

export default SignInPage;