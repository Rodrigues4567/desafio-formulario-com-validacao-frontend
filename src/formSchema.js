import { z } from "zod";

const urlRegex = /^https?:\/\/([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;

export const formSchema = z.object({
    nome: z.string().min(1, "Nome completo é obrigatório"),
    email: z.string().email("E-mail inválido"),
    cargo: z.string().min(1, "Cargo é obrigatório"),
    linkedin: z.string()
        .optional()
        .or(z.literal(""))
        .refine((val) => !val || urlRegex.test(val), {
            message: "URL do LinkedIn inválida. Use http(s)://...",
        }),
    github: z.string()
        .optional()
        .or(z.literal(""))
        .refine((val) => !val || urlRegex.test(val), {
            message: "URL do GitHub inválida. Use http(s)://...",
        }),
})
