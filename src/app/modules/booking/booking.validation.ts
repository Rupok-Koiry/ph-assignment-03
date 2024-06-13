import { z } from 'zod';

export const createBookingValidationSchema = z.object({
  body: z.object({
    date: z.string(),
    carId: z.string(),
    startTime: z.string().regex(/^\d{2}:\d{2}$/),
  }),
});

export const updateBookingValidationSchema = z.object({
  body: z
    .object({
      date: z.string(),
      user: z.string(),
      car: z.string(),
      startTime: z.string().regex(/^\d{2}:\d{2}$/),
      endTime: z
        .string()
        .regex(/^\d{2}:\d{2}$/)
        .nullable(),
      totalCost: z.number(),
    })
    .partial(),
});
