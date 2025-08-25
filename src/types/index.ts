interface ContactFormData {
  fullName: string;
  whatsapp: string;
  email: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  benefits?: string[];
}

interface Doctor {
  name: string;
  specialty: string;
  description: string;
  credentials: string[];
  image?: string;
}

interface WebhookResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export type { ContactFormData, Service, Doctor, WebhookResponse };