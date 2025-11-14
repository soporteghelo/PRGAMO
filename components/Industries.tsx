import React from 'react';

const industriesData = [
  {
    name: 'Minería y Petróleo',
    description: 'Gestión de EPP, IPERC, OPT, PETS, y cumplimiento de normativas de seguridad en operaciones de alto riesgo.',
    icon: '⛏️',
  },
  {
    name: 'Construcción',
    description: 'Checklists de andamios, excavaciones, trabajos en altura. Control de calidad y seguridad en cada fase del proyecto.',
    icon: '🏗️',
  },
  {
    name: 'Manufactura e Industria',
    description: 'Control de calidad en línea, mantenimiento de maquinaria (TPM), y auditorías de procesos para optimizar la producción.',
    icon: '🏭',
  },
  {
    name: 'Retail y Servicios',
    description: 'Checklists de apertura/cierre, auditorías de tienda, control de mermas, y gestión de la experiencia del cliente.',
    icon: '🛒',
  },
  {
    name: 'Energía y Utilities',
    description: 'Inspecciones de redes, mantenimiento de activos críticos, y reportes de incidentes en campo para garantizar la continuidad.',
    icon: '⚡',
  },
  {
    name: 'Agroindustria',
    description: 'Trazabilidad de cultivos, control de plagas, y gestión de buenas prácticas agrícolas desde el campo hasta la planta.',
    icon: '🌱',
  },
];

const IndustryCard: React.FC<{ name: string; description: string; icon: string }> = ({ name, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-primary-dark mb-2">{name}</h3>
    <p className="text-subtle">{description}</p>
  </div>
);

const Industries: React.FC = () => {
  return (
    <section id="industries" className="bg-surface py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">Soluciones por Industria</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-4">
            Adaptable a las Exigencias de tu Sector
          </h2>
          <p className="text-lg text-subtle">
            PRAGMO es una plataforma flexible que se ajusta a los procesos y regulaciones específicas de tu industria, sin importar la complejidad.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
