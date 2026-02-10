import React from 'react';

const industriesData = [
  { name: 'Minería y Petróleo', description: 'Gestión de EPP, IPERC, OPT, PETS, y cumplimiento de normativas de seguridad en operaciones de alto riesgo.', icon: '⛏️' },
  { name: 'Construcción', description: 'Checklists de andamios, excavaciones, trabajos en altura. Control de calidad y seguridad en cada fase del proyecto.', icon: '🏗️' },
  { name: 'Manufactura e Industria', description: 'Control de calidad en línea, mantenimiento de maquinaria (TPM), y auditorías de procesos para optimizar la producción.', icon: '🏭' },
  { name: 'Retail y Servicios', description: 'Checklists de apertura/cierre, auditorías de tienda, control de mermas, y gestión de la experiencia del cliente.', icon: '🛒' },
  { name: 'Energía y Utilities', description: 'Inspecciones de redes, mantenimiento de activos críticos, y reportes de incidentes en campo para garantizar la continuidad.', icon: '⚡' },
  { name: 'Agroindustria', description: 'Trazabilidad de cultivos, control de plagas, y gestión de buenas prácticas agrícolas desde el campo hasta la planta.', icon: '🌱' },
];

const IndustryCard: React.FC<{ name: string; description: string; icon: string; index: number }> = ({ name, description, icon, index }) => (
  <div
    className="glass-card rounded-xl p-5 transition-all duration-500 hover:border-primary/30 hover:shadow-glow group"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-base font-semibold text-white mb-2 leading-tight">{name}</h3>
    <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Industries: React.FC = () => {
  return (
    <section
      id="industries"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-surface to-[#0a0f1a]"></div>
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-glow-blue/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
            Soluciones por Industria
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
            Adaptable a{' '}
            <span className="gradient-text">tu Sector</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            PRAGMO desarrolla <span className="font-semibold text-gray-200">soluciones digitales integrales</span> mediante automatización, análisis avanzado, integración de datos, IA y consultoría especializada.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {industriesData.map((industry, index) => (
            <IndustryCard key={index} {...industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
