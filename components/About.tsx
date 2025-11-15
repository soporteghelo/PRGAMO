import React from 'react';

const WhyPragmo: React.FC = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Adaptabilidad Regulatoria',
      description: 'Configura la plataforma para cumplir con normativas locales e internacionales (ISO, OSHA, etc.). Genera reportes listos para auditorías.',
    },
    {
      icon: (
        <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Soporte Global, Trato Personalizado',
      description: 'Te acompañamos en la implementación y resolvemos tus dudas vía Whatsapp, teléfono o email, sin importar tu zona horaria.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'App Móvil Intuitiva (Online/Offline)',
      description: 'Diseñada para el trabajador en campo. Fácil de usar, incluso para personal con poca experiencia digital. Funciona sin internet.',
    },
  ];

  return (
    <section id="why-pragmo" className="bg-cover bg-center bg-primary-dark py-12 md:py-16">
      {/* Overlay eliminado para mostrar fondo */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">
          {/* Columna de la imagen */}
          <div className="lg:w-5/12 w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                <img 
                    src="https://lh3.googleusercontent.com/d/1H2EPNJT-0SfF_XfDvDHdrsNw07-ZmSGN" 
                    alt="Equipo de Soporte de PRAGMO" 
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
          {/* Columna del texto */}
          <div className="lg:w-7/12 w-full flex flex-col justify-center">
            <span className="text-white font-semibold uppercase tracking-wider text-sm">TECNOLOGÍA DE CONFIANZA GLOBAL</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-3">
              No somos un software genérico. Somos tu aliado estratégico.
            </h2>
            <p className="text-base text-white mb-6">
              Entendemos los desafíos globales de tu industria. Nuestra plataforma flexible se adapta a tus procesos y normativas, sin importar dónde operes.
            </p>
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/20 text-yellow-600 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                    <p className="text-white text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPragmo;