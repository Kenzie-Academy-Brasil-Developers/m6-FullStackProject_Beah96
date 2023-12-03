import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().min(1, { message: 'Please enter your email'}).email({ message: 'Invalid email'}),
    password: z.string().min(1, { message: 'Please enter your password'}),
})

export type TLoginData =  z.infer<typeof loginSchema>