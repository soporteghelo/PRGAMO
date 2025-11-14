import React from 'react';
import { useBackground } from '../context/BackgroundContext';

interface BenefitProps {
  icon: React.ReactNode;
  value: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, value, description }) => (
  <div className="text-center p-6">
    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 text-white">
      {icon}
    </div>
    <p className="text-4xl md:text-5xl font-extrabold text-white">{value}</p>
    <p className="text-gray-300 mt-2">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  const backgroundUrl = useBackground();

  return (
    <section 
        id="benefits" 
        className="text-white py-20 md:py-28 bg-cover bg-center bg-primary-dark"
        style={backgroundUrl ? { backgroundImage: `url('${backgroundUrl}')` } : {}}
    >
        <div className="absolute inset-0 bg-primary-dark/90"></div>
        <div className="relative container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider">Resultados Tangibles</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
                El Impacto de la Digitalización
            </h2>
            <p className="text-lg text-gray-200">
                Nuestros clientes experimentan mejoras significativas en sus operaciones desde el primer día.
            </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>}
                value="-70%"
                description="Reducción en tiempos de generación de reportes"
            />
            <BenefitCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>}
                value="100%"
                description="Eliminación de papel y archivos físicos"
            />
            <BenefitCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" /></svg>}
                value="+95%"
                description="Mejora en la trazabilidad de la información"
            />
            </div>
        </div>
    </section>
  );
};

export default Benefits;