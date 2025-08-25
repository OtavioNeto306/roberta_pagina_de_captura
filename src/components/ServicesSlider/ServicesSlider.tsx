import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description?: string;
}

const services: Service[] = [
  { id: 1, name: 'BLACK PEEL' },
  { id: 2, name: 'BOTOX FULL FACE' },
  { id: 3, name: 'BOTOX SIMPLES' },
  { id: 4, name: 'CRIO FREQUÊNCIA CORPORAL E FACIAL' },
  { id: 5, name: 'DEPILAÇÃO A LASER CORPORAL E FACIAL' },
  { id: 6, name: 'DRENAGEM LINFÁTICA' },
  { id: 7, name: 'ELLANSÉ' },
  { id: 8, name: 'ESTÉTICA ÍNTIMA' },
  { id: 9, name: 'EZBODY' },
  { id: 10, name: 'HYPER SLIN' },
  { id: 11, name: 'JATO DE PLASMA' },
  { id: 12, name: 'LIMPEZA DE PELE' },
  { id: 13, name: 'PROENZAYME' },
  { id: 14, name: 'MICROAGULHAMENTO FACIAL E CORPORAL' }
];

export const ServicesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? services.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === services.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };



  // Calculate visible services for responsive design
  const getVisibleServices = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const startIndex = currentIndex;
    const visibleServices = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % services.length;
      visibleServices.push(services[index]);
    }
    
    return visibleServices;
  };

  const [visibleServices, setVisibleServices] = useState(getVisibleServices());

  useEffect(() => {
    const handleResize = () => {
      setVisibleServices(getVisibleServices());
    };

    window.addEventListener('resize', handleResize);
    setVisibleServices(getVisibleServices());
    
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <div className="w-full py-8">
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
          aria-label="Serviço anterior"
        >
          <ChevronLeft className="w-5 h-5 text-primary-600" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
          aria-label="Próximo serviço"
        >
          <ChevronRight className="w-5 h-5 text-primary-600" />
        </button>

        {/* Services Container */}
        <div className="mx-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleServices.map((service, index) => (
              <div
                key={`${service.id}-${currentIndex}-${index}`}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-primary-200"
              >

                <h3 className="text-sm font-semibold text-primary-800 leading-tight">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};