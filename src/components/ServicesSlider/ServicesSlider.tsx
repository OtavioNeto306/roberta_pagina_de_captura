import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description?: string;
}

const services: Service[] = [
  { id: 1, name: '✨ Harmonização facial e corporal' },
  { id: 2, name: '✨ Bio estimulador de colágeno' },
  { id: 3, name: '✨ Botox' },
  { id: 4, name: '✨ Preenchimento' },
  { id: 5, name: '✨ Estética íntima' },
  { id: 6, name: '✨ Microagulhamento' },
  { id: 7, name: '✨ Black PEEL' },
  { id: 8, name: '✨ Limpeza de pele' },
  { id: 9, name: '✨ Proenzyme' },
  { id: 10, name: '✨ Jato de plasma' },
  { id: 11, name: '✨ Ultrassom microfocado' }
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
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-luxury-cream/90 hover:bg-luxury-cream shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 border border-gold-copper"
          aria-label="Serviço anterior"
        >
          <ChevronLeft className="w-5 h-5 text-gold-copper" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-luxury-cream/90 hover:bg-luxury-cream shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 border border-gold-copper"
          aria-label="Próximo serviço"
        >
          <ChevronRight className="w-5 h-5 text-gold-copper" />
        </button>

        {/* Services Container */}
        <div className="mx-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleServices.map((service, index) => (
              <div
                key={`${service.id}-${currentIndex}-${index}`}
                className="bg-gradient-to-br from-luxury-dark-gray to-gold-copper rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gold-copper"
              >

                <h3 className="text-sm font-semibold text-luxury-cream leading-tight">
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