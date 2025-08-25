import { z } from 'zod';

// Schema de validação para o formulário de contato
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços'),
  
  whatsapp: z
    .string()
    .min(10, 'WhatsApp deve ter pelo menos 10 dígitos')
    .max(15, 'WhatsApp deve ter no máximo 15 dígitos')
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Formato inválido. Use: (11) 99999-9999'),
  
  email: z
    .string()
    .email('Email deve ter um formato válido')
    .min(5, 'Email deve ter pelo menos 5 caracteres')
    .max(100, 'Email deve ter no máximo 100 caracteres'),
});

// Tipo inferido do schema - importar de types/index.ts
// export type ContactFormData = z.infer<typeof contactFormSchema>;