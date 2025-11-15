import React from 'react';
// Fondo aplicado por el contenedor padre

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
  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-lg hover:border-primary transition-all duration-300">
    <div className="text-2xl mb-2">{icon}</div>
    <h3 className="text-base font-semibold text-primary-dark mb-1 leading-tight">{name}</h3>
    <p className="text-xs text-subtle leading-snug">{description}</p>
  </div>
);

const Industries: React.FC = () => {
  return (
    <section
      id="industries"
      className="relative min-h-screen flex flex-col justify-center bg-cover bg-center bg-primary-dark py-8"
    >
      {/* Overlay eliminado para mostrar fondo */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Soluciones por Industria</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-3 leading-tight">
            Adaptable a tu Sector
          </h2>
          <p className="text-sm text-gray-200 leading-snug">
            PRAGMO se ajusta a procesos y regulaciones específicas, sin importar la complejidad.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {industriesData.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
