import React from 'react';

interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className = '' }) => {
  const credentials = [
    {
      icon: '🎓',
      title: 'Formação Médica',
      description: 'Graduação em Medicina pela Universidade de São Paulo (USP)'
    },
    {
      icon: '💉',
      title: 'Especialização',
      description: 'Pós-graduação em Medicina Estética e Dermatologia'
    },
    {
      icon: '🏆',
      title: 'Certificações',
      description: 'Certificada em técnicas avançadas de harmonização facial'
    },
    {
      icon: '📚',
      title: 'Atualização Constante',
      description: 'Participação regular em congressos e cursos internacionais'
    }
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Pacientes Atendidos',
      description: 'Resultados comprovados e satisfação garantida'
    },
    {
      number: '8+',
      label: 'Anos de Experiência',
      description: 'Expertise consolidada em medicina estética'
    },
    {
      number: '15+',
      label: 'Procedimentos Diferentes',
      description: 'Amplo portfólio de tratamentos disponíveis'
    },
    {
      number: '98%',
      label: 'Taxa de Satisfação',
      description: 'Excelência reconhecida pelos pacientes'
    }
  ];

  return (
    <section id="sobre" className={`section-padding bg-luxury-dark-gray ${className}`}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-luxury-deep-black border border-luxury-sophisticated-brown text-luxury-bronze rounded-full text-sm font-medium mb-4">
            Conheça a Especialista
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-cream mb-6">
            Dra.Roberttà Simone
          </h2>
          <p className="text-xl text-luxury-medium-gray max-w-3xl mx-auto leading-relaxed">
            Médica especialista em estética com mais de 18 anos de experiência, 
            dedicada a realçar a beleza natural de cada paciente com técnicas 
            avançadas e resultados excepcionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/fotos/IMG-20250814-WA0111.jpg"
                alt="Dra.Roberttà Simone em seu consultório"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20female%20doctor%20in%20modern%20aesthetic%20clinic%2C%20white%20coat%2C%20medical%20equipment%20background%2C%20confident%20professional%20pose%2C%20high%20quality%20medical%20photography&image_size=landscape_4_3';
                }}
              />
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-luxury-sophisticated-brown rounded-2xl -z-10"></div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-luxury-cream rounded-xl shadow-xl p-6 max-w-xs border border-luxury-sophisticated-brown">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-luxury-bronze rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-luxury-cream" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-luxury-dark-gray">Certificada</div>
                  <div className="text-sm text-luxury-medium-gray">CRM Ativo</div>
                </div>
              </div>
              <p className="text-sm text-luxury-medium-gray">
                Médica registrada no Conselho Regional de Medicina
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-luxury-cream mb-6">
              Experiência e Dedicação em Medicina Estética
            </h3>
            
            <div className="space-y-6 mb-8">
              <p className="text-luxury-medium-gray leading-relaxed">
                Com uma sólida formação médica e especialização em estética, 
                a Dra.Roberttà Simone combina conhecimento científico com 
                sensibilidade artística para proporcionar resultados naturais 
                e harmoniosos.
              </p>
              
              <p className="text-luxury-medium-gray leading-relaxed">
                Sua abordagem personalizada considera as características únicas 
                de cada paciente, garantindo tratamentos seguros e eficazes que 
                respeitam a individualidade e realçam a beleza natural.
              </p>
              
              <p className="text-luxury-medium-gray leading-relaxed">
                Constantemente atualizada com as mais recentes técnicas e 
                tecnologias do mercado, oferece um atendimento de excelência 
                em um ambiente acolhedor e profissional.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="bg-luxury-cream rounded-lg p-4 shadow-sm border border-luxury-sophisticated-brown">
                  <div className="text-2xl mb-2">{credential.icon}</div>
                  <h4 className="font-semibold text-luxury-dark-gray mb-1">{credential.title}</h4>
                  <p className="text-sm text-luxury-medium-gray">{credential.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-luxury-deep-black rounded-2xl shadow-xl p-8 md:p-12 border border-luxury-sophisticated-brown backdrop-blur-sm">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-luxury-cream mb-4 drop-shadow-sm">
              Resultados que Falam por Si
            </h3>
            <p className="text-luxury-medium-gray text-lg font-medium">
              Números que demonstram nossa excelência e compromisso com a satisfação dos pacientes
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-luxury-bronze mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-luxury-cream mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-luxury-medium-gray">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};