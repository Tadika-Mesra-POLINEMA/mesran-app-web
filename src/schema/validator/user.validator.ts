import { z, ZodSchema } from "zod";

export class UserValidator {
  static readonly REGISTER_USER: ZodSchema = z
    .object({
      name: z
        .string()
        .min(3, {
          message: "Username must be at least 3 characters long",
        })
        .max(100, {
          message: "Username must be at most 50 characters long",
        }),
      email: z.string().email({
        message: "Invalid email address",
      }),
      phone: z
        .string()
        .min(10, {
          message: "Phone number must be at least 10 characters long",
        })
        .max(15, {
          message: "Phone number must be at most 15 characters long",
        }),
      password: z
        .string()
        .min(8, {
          message: "Password must be at least 8 characters long",
        })
        .max(20, {
          message: "Password must be at most 20 characters long",
        }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });
}
