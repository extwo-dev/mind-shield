import { z } from "zod";

export const signInFormSchema = z.object({
  phoneNumber: z
    .string({
      required_error: "Обязательное поле",
    })
    .min(9, {
      message: "Номер телефона не может быть короче 9 символов",
    }),
  password: z
    .string({
      required_error: "Обязательное поле",
    })
    .min(6, {
      message: "Пароль не может быть короче 6 символов",
    }),
});

export type SignInFormData = z.infer<typeof signInFormSchema>;
