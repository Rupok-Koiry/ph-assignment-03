import { z } from 'zod';

export const createCarValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    color: z.string(),
    isElectric: z.boolean(),
    status: z
      .enum(['available', 'unavailable'])
      .optional()
      .default('available'),
    features: z.array(z.string()).optional().default([]),
    pricePerHour: z.number(),
    isDeleted: z.boolean().optional().default(false),
  }),
});

export const updateCarValidationSchema = z.object({
  body: z
    .object({
      name: z.string(),
      description: z.string(),
      color: z.string(),
      isElectric: z.boolean(),
      status: z.enum(['available', 'unavailable']),
      features: z.array(z.string()),
      pricePerHour: z.number(),
      isDeleted: z.boolean(),
    })
    .partial(),
});
