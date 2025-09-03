import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '../../utils/validation';
import type { ContactFormData } from '../../types';
import { sendToWebhook, generateWhatsAppURL, maskPhone } from '../../utils/helpers';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const watchedPhone = watch('whatsapp', '');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Enviar dados para o webhook
      const webhookResult = await sendToWebhook(data);

      if (webhookResult.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Dados enviados com sucesso! Redirecionando para o WhatsApp...',
        });

        // Aguardar um momento antes de redirecionar
        setTimeout(() => {
          const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '557135995423';
          const whatsappMessage = import.meta.env.VITE_WHATSAPP_MESSAGE || 
            `Olá Dra. Roberta! Meu nome é ${data.fullName} e gostaria de agendar uma avaliação. Meu WhatsApp: ${data.whatsapp} | Email: ${data.email}`;
          
          const whatsappURL = generateWhatsAppURL(whatsappNumber, whatsappMessage);
          window.open(whatsappURL, '_blank');
          
          // Resetar formulário após sucesso
          reset();
          setSubmitStatus({ type: null, message: '' });
        }, 2000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: webhookResult.error || 'Erro ao enviar dados. Tente novamente.',
        });
      }
    } catch (err) {
      console.error('Erro ao processar formulário:', err);
      setSubmitStatus({
        type: 'error',
        message: 'Erro inesperado. Tente novamente mais tarde.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`form-card p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-luxury mb-4 drop-shadow-sm">
          Fale com a Dra. Roberta
        </h2>
        <p className="text-muted text-lg font-medium">
          Preencha o formulário abaixo e entre em contato conosco pelo WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nome Completo */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-luxury mb-2">
            Nome*
          </label>
          <input
            {...register('fullName')}
            type="text"
            id="fullName"
            className={`input ${
              errors.fullName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
            }`}
            placeholder="Digite seu nome completo"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-luxury mb-2">
            WhatsApp *
          </label>
          <input
            {...register('whatsapp')}
            type="tel"
            id="whatsapp"
            className={`input ${
              errors.whatsapp ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
            }`}
            placeholder="(11) 99999-9999"
            value={maskPhone(watchedPhone)}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              register('whatsapp').onChange({
                target: { value, name: 'whatsapp' },
              });
            }}
          />
          {errors.whatsapp && (
            <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-luxury mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`input ${
              errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
            }`}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-bronze-700 bg-opacity-20 text-bronze border border-bronze-300'
                : 'bg-red-900 bg-opacity-20 text-red-400 border border-red-600'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary text-lg py-4 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Enviando...
            </div>
          ) : (
            'Falar com a Dra. Roberta'
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted">
          Ao enviar este formulário, você será redirecionado para o WhatsApp
        </p>
      </div>
    </div>
  );
};