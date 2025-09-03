import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ServicesSlider } from '../ServicesSlider/ServicesSlider';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      // Adicionar foco visual temporário
      formElement.style.transform = 'scale(1.02)';
      formElement.style.transition = 'transform 0.3s ease';
      setTimeout(() => {
        formElement.style.transform = 'scale(1)';
      }, 300);
    }
  };
  return (
    <section className={`relative min-h-screen bg-gradient-to-br from-bg-900 via-bg-800 to-bg-900 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Padrão de fundo SVG luxuoso */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="luxury-grain" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1.5" fill="#B37B4E" opacity="0.3"/>
              <circle cx="2" cy="2" r="0.8" fill="#8C5C3A" opacity="0.2"/>
              <circle cx="6" cy="6" r="0.5" fill="#F6F1E8" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#luxury-grain)"/>
        </svg>
      </div>

      <div className="relative z-10 container-max section-padding">
        {/* Header Mobile - Aparece apenas no mobile acima do formulário */}
        <div className="lg:hidden text-center mb-8">
          <div className="mb-4">
            <span className="badge">
              ✨ Especialista em Estética Avançada
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-offwhite mb-4 leading-tight">
            Dra. <span className="text-bronze-gradient drop-shadow-sm">Roberttà Simone</span>
          </h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form - Primeira coisa visível */}
          <div className="relative order-1 lg:order-1" id="contact-form">
            <ContactForm className="max-w-lg mx-auto" />
          </div>
          
          {/* Content - Oculto no mobile */}
          <div className="hidden lg:block text-center lg:text-left order-2 lg:order-2">
            <div className="mb-6">
              <span className="badge">
                ✨ Especialista em Estética Avançada
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-6 leading-tight">
              Dra. <span className="text-bronze-gradient drop-shadow-sm">Roberttà Simone</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted mb-8 leading-relaxed font-medium">
              Transforme sua beleza com tratamentos estéticos de última geração. 
              <span className="text-bronze font-semibold"> Resultados naturais</span> e 
              <span className="text-bronze font-semibold"> duradouros</span> que realçam sua autoestima.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={scrollToForm}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Agendar Consulta
              </button>
              
              <button 
                onClick={scrollToForm}
                className="btn-outline text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Conhecer Tratamentos
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-bronze-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-champagne mb-1">500+</div>
                <div className="text-sm text-muted">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-champagne mb-1">18+</div>
                <div className="text-sm text-muted">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-champagne mb-1">15+</div>
                <div className="text-sm text-muted">Tratamentos Disponíveis</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Services Slider - Oculto no mobile */}
        <div className="hidden lg:block mt-8 pt-8 border-t border-bronze-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-luxury mb-2">✨ Conheça os procedimentos da nossa clínica ✨</h3>
            <p className="text-muted">Tratamentos especializados para sua beleza</p>
          </div>
          
          <ServicesSlider />
        </div>
      </div>
    </section>
  );
};