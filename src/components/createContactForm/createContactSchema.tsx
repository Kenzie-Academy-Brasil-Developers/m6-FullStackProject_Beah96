import { z } from 'zod';

export const contactCreateSchema = z.object({
    name: z
    .string({
        required_error: 'Name is required',
      })
    .min(2, 'The name must have at least 2 characters'),

    email: z
    .string()
    .email('Invalid email'),

    picture: z
    .string().nullable(),

    phone: z
    .string()
    .max(16, 'The phone must have at most 16 characters'),  
})

export type TContactCreate = z.infer<typeof contactCreateSchema>;