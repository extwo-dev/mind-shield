import { Control } from "react-hook-form";
import { SignUpFormData } from "../../_schema/sign-up-form-schema";
import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

type FormStepProps = {
  control: Control<SignUpFormData>;
};

export const AccountInformation: React.FC<FormStepProps> = (props) => {
  const { control } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="grid gap-4">
      <FormField
        name="phone_number"
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
                    placeholder="• • • • • •"
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
    </div>
  );
};
