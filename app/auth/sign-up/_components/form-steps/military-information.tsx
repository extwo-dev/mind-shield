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

export const MilitaryInformation: React.FC<FormStepProps> = (props) => {
  const { control } = props;

  return (
    <div className="grid gap-4">
      <FormField
        name="rank"
        control={control}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Звание</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Звание" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        name="division"
        control={control}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Подразделение</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Подразделение" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </div>
  );
};
