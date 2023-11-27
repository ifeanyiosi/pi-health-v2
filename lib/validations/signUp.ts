import * as z from "zod";

export const SignUpValidation = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z
    .string()
    .min(2, { message: "Minimum of two characters" })
    .max(30, { message: "Maximum of thirty characters" }),
  password: z.string().min(2).max(30),
  confirmPassword: z.string().min(2).max(30),
});
