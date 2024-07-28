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

export const HomeInformation: React.FC<FormStepProps> = (props) => {
  const { control } = props;

  return (
    <div className="grid gap-4 grid-cols-6 grid-rows-2">
      <FormField
        name="region"
        control={control}
        render={({ field }) => {
          return (
            <FormItem className="col-span-3">
              <FormLabel>Область</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Область" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        name="city"
        control={control}
        render={({ field }) => {
          return (
            <FormItem className="col-span-3">
              <FormLabel>Город</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Город" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        name="home_address"
        control={control}
        render={({ field }) => {
          return (
            <FormItem className="col-span-2">
              <FormLabel>Улица</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Улица" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        name="building"
        control={control}
        render={({ field }) => {
          return (
            <FormItem className="col-span-2">
              <FormLabel>Номер дома</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Дом" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />

      <FormField
        name="appartment"
        control={control}
        render={({ field }) => {
          return (
            <FormItem className="col-span-2">
              <FormLabel>Номер квартиры</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Квартира" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </div>
  );
};
