"use client";

import { useState } from "react";
import { Control } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { SignInFormData } from "../_schema/sign-in-schema";

import {
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormFieldsProps = {
  control: Control<SignInFormData>;
};

export const SignInFormFields: React.FC<FormFieldsProps> = (props) => {
  const { control } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <FormField
        name="phoneNumber"
        control={control}
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
        control={control}
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
    </>
  );
};
