import { z } from "zod";

export const signUpFormSchema = z.object({
  name: z
    .string({
      required_error: "Обязательное поле",
    })
    .min(2),

  surname: z
    .string({
      required_error: "Обязательное поле",
    })
    .min(2),

  lastName: z
    .string({
      required_error: "Обязательное поле",
    })
    .min(2),

  dateOfBirth: z
    .string({
      required_error: "Обязательное поле",
    })
    .min(10),

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

export type SignUpFormData = z.infer<typeof signUpFormSchema>;
