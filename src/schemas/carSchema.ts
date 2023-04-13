import z from 'zod';

export const carSchema = z.object({
  model: z.string(),
  licensePlate: z.string().length(7),
  year: z.number(),
  color: z.string()
});

export type Car = z.infer<typeof carSchema>