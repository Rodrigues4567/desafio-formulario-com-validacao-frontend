
import { z } from "zod";

export const formSchema = z.object({
    nome: z.string().min(1, "Nome completo é obrigatório"),
    email: z.string().email("E-mail inválido"),
    telefone: z.string().min(1, "Telefone é obrigatório"),
    cargo: z.string().min(1, "Cargo é obrigatório"),
    linkedin: z.string().url("URL inválida").optional(),
    github: z.string().url("URL inválida").optional(),
})
