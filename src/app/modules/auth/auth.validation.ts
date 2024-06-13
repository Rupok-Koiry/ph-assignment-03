import { z } from 'zod';

export const signInValidationSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});

export const signUpValidationSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
    name: z.string(),
    role: z.enum(['user', 'admin']),
    phone: z.string(),
    address: z.string(),
  }),
});
