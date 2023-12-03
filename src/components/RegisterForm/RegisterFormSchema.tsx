import { z } from 'zod';

export const clientRegisterSchema = z.object({
    name: z
    .string({
        required_error: 'The name field is required',
      })
    .min(2, 'Name must have at least 2 characters'),

    email: z
    .string()
    .min(1,'The email field is required')
    .email('Invalid email'),

    picture: z
    .string().nullable(),

    phone: z
    .string()
    .max(16, 'The phone field must have at most 16 characters'),

    password: z
    .string()
    .min(6,'The password must have at least 6 characters' ),

    confirmPassword: z
    .string()
    .min(1,'Confirm the password'),
    

}).partial().refine(({password, confirmPassword}) => password === confirmPassword,{
    message:'Passwords do not match',
    path:['confirmPassword']
})

export type TClientRegister = z.infer<typeof clientRegisterSchema>;