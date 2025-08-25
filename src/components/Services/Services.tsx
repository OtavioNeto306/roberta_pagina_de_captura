import React from 'react';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
}

interface ServicesProps {
  className?: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ 
  icon, 
  title, 
  description, 
  benefits, 
  duration, 
  price 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2">
      {/* Icon */}
      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
        <span className="text-3xl">{icon}</span>
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      {/* Benefits */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Details */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-sm text-gray-500">Duração:</span>
            <div className="font-semibold text-gray-900">{duration}</div>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">A partir de:</span>
            <div className="text-2xl font-bold text-primary-600">{price}</div>
          </div>
        </div>
        
        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
          Agendar Consulta
        </button>
      </div>
    </div>
  );
};

export const Services: React.FC<ServicesProps> = ({ className = '' }) => {
  const services: ServiceProps[] = [
    {
      icon: '💉',
      title: 'Harmonização Facial',
      description: 'Técnicas avançadas para realçar a beleza natural do rosto, proporcionando equilíbrio e harmonia às suas características.',
      benefits: [
        'Preenchimento de rugas e sulcos',
        'Aumento de volume labial',
        'Contorno facial definido',
        'Resultados naturais e duradouros'
      ],
      duration: '45-60 min',
      price: 'R$ 800'
    },
    {
      icon: '✨',
      title: 'Toxina Botulínica',
      description: 'Tratamento para suavizar rugas de expressão e prevenir o envelhecimento, mantendo a naturalidade dos movimentos faciais.',
      benefits: [
        'Redução de rugas dinâmicas',
        'Prevenção do envelhecimento',
        'Resultado natural',
        'Procedimento rápido e seguro'
      ],
      duration: '20-30 min',
      price: 'R$ 600'
    },
    {
      icon: '🌟',
      title: 'Preenchimento Labial',
      description: 'Aumento e definição dos lábios com ácido hialurônico, criando um contorno natural e volume adequado ao seu rosto.',
      benefits: [
        'Volume natural dos lábios',
        'Definição do contorno',
        'Hidratação profunda',
        'Resultado imediato'
      ],
      duration: '30-45 min',
      price: 'R$ 700'
    },
    {
      icon: '💎',
      title: 'Skinbooster',
      description: 'Hidratação profunda da pele com ácido hialurônico, melhorando a textura, elasticidade e luminosidade natural.',
      benefits: [
        'Hidratação intensa',
        'Melhora da textura da pele',
        'Aumento da elasticidade',
        'Glow natural duradouro'
      ],
      duration: '40-50 min',
      price: 'R$ 900'
    },
    {
      icon: '🎯',
      title: 'Fios de PDO',
      description: 'Lifting não cirúrgico com fios absorvíveis que promovem sustentação e estimulam a produção de colágeno.',
      benefits: [
        'Lifting facial sem cirurgia',
        'Estímulo ao colágeno',
        'Sustentação natural',
        'Recuperação rápida'
      ],
      duration: '60-90 min',
      price: 'R$ 1.200'
    },
    {
      icon: '🌸',
      title: 'Bioestimuladores',
      description: 'Tratamento que estimula a produção natural de colágeno, promovendo rejuvenescimento gradual e duradouro.',
      benefits: [
        'Estímulo natural do colágeno',
        'Rejuvenescimento gradual',
        'Resultados duradouros',
        'Melhora da qualidade da pele'
      ],
      duration: '45-60 min',
      price: 'R$ 1.000'
    }
  ];

  return (
    <section id="servicos" className={`section-padding bg-white ${className}`}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Nossos Tratamentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Procedimentos Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de tratamentos estéticos com as mais 
            avançadas técnicas e produtos de alta qualidade para realçar sua beleza natural.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Pronta para Transformar sua Beleza?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Agende sua consulta e descubra qual tratamento é ideal para você
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-colors">
              Agendar Consulta
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-colors">
              Falar no WhatsApp
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-500">
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm opacity-80">Procedimentos Realizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm opacity-80">Satisfação dos Pacientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">8+</div>
              <div className="text-sm opacity-80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};