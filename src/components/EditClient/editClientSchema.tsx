import { z } from "zod";

export const clientEditSchema = z.object({
    name: z
    .string()
    .min(2, 'O nome deve contar no minimo 2 caracteres')
    .optional(),

    email: z
    .string()
    .email("Email inválido")
    .optional(),

    picture: z
    .string().optional(),

    phone: z
    .string()
    .optional(),  
})

export type TClientEdit = z.infer<typeof clientEditSchema>;