import React from 'react';
// Fondo controlado por wrapper

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => (
  <div className="relative text-center">
    <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/20 text-white">
      {icon}
      <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-white font-bold text-sm">
        {number}
      </span>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-white">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-cover bg-center bg-primary-dark py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Overlay eliminado para mostrar fondo */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-white font-semibold uppercase tracking-wider">Nuestro Proceso</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Empezar es así de fácil
          </h2>
          <p className="text-lg text-white">
            Te acompañamos en cada paso para asegurar una transición exitosa a la gestión digital de SST.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 hidden md:block" style={{top: '5rem', transform: 'translateY(-50%)'}}></div>
            <div className="absolute top-10 w-full h-full border-l-2 border-gray-200 border-dashed left-1/2 -translate-x-1/2 md:hidden"></div>

           <Step
            number="1"
            title="Agenda una Reunión"
            description="Coordinamos una breve llamada para entender tus necesidades y mostrarte cómo PRAGMO puede ayudarte."
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M12 12.75h.008v.008H12v-.008Z" /></svg>}
          />
           <Step
            number="2"
            title="Implementación Guiada"
            description="Implementamos la solución digital perfecta para tu negocio, configuramos sistemas, migramos datos y capacitamos tu equipo."
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691V7.5a3 3 0 0 1 3-3h.008a3 3 0 0 1 3 3v.375" /></svg>}
          />
           <Step
            number="3"
            title="Soporte Continuo"
            description="Nuestro equipo te acompaña con soporte técnico especializado y consultoría continua para maximizar el valor de tu inversión digital."
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;