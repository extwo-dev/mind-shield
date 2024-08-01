"use client";

import { useState } from "react";
import { Control } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { SignUpFormData } from "../_schema/sign-up-schema";

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
  control: Control<SignUpFormData>;
};

export const SignUpFormFields: React.FC<FormFieldsProps> = (props) => {
  const { control } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <FormField
        name="lastName"
        control={control}
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
        control={control}
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
        control={control}
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
        control={control}
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
        control={control}
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
        control={control}
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
    </>
  );
};
