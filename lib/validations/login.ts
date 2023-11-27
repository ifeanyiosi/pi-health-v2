import * as z from "zod";

export const LoginValidation = z.object({
  email: z
    .string()
    .min(2, { message: "Minimum of two characters" })
    .max(30, { message: "Maximum of thirty characters" }),
  password: z.string().min(2).max(30),
});
