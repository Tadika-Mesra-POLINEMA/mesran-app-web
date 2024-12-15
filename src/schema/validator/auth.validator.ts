import { z, ZodSchema } from "zod";

export class AuthValidator {
  static readonly LOGIN_SCHEMA: ZodSchema = z.object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  });
}
