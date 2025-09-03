import type { ContactFormData, WebhookResponse } from '../types';

// Formatar número de WhatsApp
export const formatWhatsApp = (phone: string): string => {
  // Remove todos os caracteres não numéricos
  const cleaned = phone.replace(/\D/g, '');
  
  // Adiciona código do país se não tiver
  if (cleaned.length === 11 && cleaned.startsWith('11')) {
    return `55${cleaned}`;
  } else if (cleaned.length === 10) {
    return `5511${cleaned}`;
  } else if (cleaned.length === 13 && cleaned.startsWith('55')) {
    return cleaned;
  }
  
  return cleaned;
};

// Gerar URL do WhatsApp
export const generateWhatsAppURL = (phone: string, message: string): string => {
  const formattedPhone = formatWhatsApp(phone);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
};

// Enviar dados para webhook
export const sendToWebhook = async (data: ContactFormData): Promise<WebhookResponse> => {
  try {
    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
    
    if (!webhookUrl) {
      throw new Error('URL do webhook não configurada');
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: data.fullName,
        whatsapp: formatWhatsApp(data.whatsapp),
        timestamp: new Date().toISOString(),
        source: 'landing-page',
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    await response.json();
    return { success: true, message: 'Dados enviados com sucesso!' };
  } catch (error) {
    console.error('Erro ao enviar dados para webhook:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    };
  }
};

// Validar se é um email válido
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Mascarar telefone para exibição
export const maskPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return phone;
};