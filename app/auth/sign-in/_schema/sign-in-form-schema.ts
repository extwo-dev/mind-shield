import { z } from "zod"

export const signInFormSchema = z.object({
  phone_number: z.string().min(9),
  password: z.string().min(6),
})

export type SignInFormData = z.infer<typeof signInFormSchema>