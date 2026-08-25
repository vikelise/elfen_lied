import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email("Неверный формат E-mail"),
  password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
});

export const registerSchema = z
  .object({
    email: z.string().trim().email("Неверный формат E-mail"),
    password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
    confirmPassword: z.string().min(1, "Повторите пароль"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
