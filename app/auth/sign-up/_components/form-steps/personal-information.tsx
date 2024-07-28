import { Control } from "react-hook-form";
import { SignUpFormData } from "../../_schema/sign-up-form-schema";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormStepProps = {
  control: Control<SignUpFormData>;
};

export const PersonalInformation: React.FC<FormStepProps> = (props) => {
  const { control } = props;

  return (
    <div className="grid gap-4 grid-cols-2 grid-rows-2">
      <FormField
        name="last_name"
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
        name="date_of_birth"
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
    </div>
  );
};
