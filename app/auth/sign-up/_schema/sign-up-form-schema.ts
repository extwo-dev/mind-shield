import { z } from "zod";

export const signUpFormSchema = z.object({
  name: z.string().min(2),
  surname: z.string().min(2),
  last_name: z.string().min(2),
  phone_number: z.string().min(9),
  date_of_birth: z.string().min(9),

  city: z.string().min(2),
  region: z.string().min(2),
  building: z.number().min(2),
  appartment: z.number().min(2),
  home_address: z.string().min(2),

  rank: z.string().min(2),
  division: z.string().min(2),

  password: z.string().min(6),
});

export type SignUpFormData = z.infer<typeof signUpFormSchema>;
