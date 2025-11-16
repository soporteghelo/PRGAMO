import React, { useState } from 'react';

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const useCasesData: UseCase[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
    title: 'Inspecciones de Seguridad (SST)',
    description: 'Digitaliza tus formatos IPERC, OPT, PETS y más. Levanta observaciones, asigna responsables y genera reportes al instante.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" /></svg>,
    title: 'Checklists Operacionales',
    description: 'Asegura la calidad y estandarización de tus procesos diarios. Desde la apertura de tienda hasta la verificación de equipos.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l2.472-2.472a.75.75 0 0 0 0-1.061L12.121 9.97a.75.75 0 0 0-1.06 0l-2.472 2.472" /><path strokeLinecap="round" strokeLinejoin="round" d="m9.97 9.97 2.472-2.472a.75.75 0 0 0 0-1.061L10.67 4.76a.75.75 0 0 0-1.06 0L7.138 7.232a.75.75 0 0 0 0 1.06l2.472 2.472" /></svg>,
    title: 'Gestión de Mantenimiento',
    description: 'Controla el mantenimiento preventivo y correctivo de tus activos. Programa tareas, registra ejecuciones y analiza el historial.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5v15a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25V8.25m-18 0V6.75A2.25 2.25 0 0 1 6 4.5h12A2.25 2.25 0 0 1 20.25 6.75v1.5m-15 0h15M12 16.5h.008v.008H12v-.008Z" /></svg>,
    title: 'Auditorías Internas y Proveedores',
    description: 'Ejecuta auditorías completas desde la app. Define criterios, adjunta evidencias y genera planes de acción automáticos.'
  },
   {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>,
    title: 'Control de Calidad',
    description: 'Realiza controles de calidad en cualquier etapa de tu producción. Registra no conformidades y asegura el cumplimiento de estándares.'
  },
   {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-1.025H9.75a2.056 2.056 0 0 0-1.58 1.025 17.903 17.903 0 0 0-3.213 9.193c-.04.62.469 1.124 1.09 1.124h1.125" /></svg>,
    title: 'Gestión de Flotas y Vehículos',
    description: 'Realiza checklists pre-uso, reporta incidencias y controla el mantenimiento de tu flota para garantizar la operatividad.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>,
    title: 'Reporte de Incidentes',
    description: 'Reporta y gestiona incidentes de seguridad o medio ambiente. Centraliza la investigación y seguimiento de acciones correctivas.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>,
    title: 'Gestión de Tareas',
    description: 'Asigna tareas, establece plazos y monitorea el progreso. Ideal para planes de acción derivados de auditorías e inspecciones.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H3.75Zm9 3.75a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Zm-3 3.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75Z" /></svg>,
    title: 'Control Documental (QR)',
    description: 'Accede a manuales, permisos y certificaciones al instante escaneando un código QR en el activo, equipo o área de trabajo.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>,
    title: 'Medio Ambiente (SOMA)',
    description: 'Monitorea aspectos ambientales, gestiona residuos y asegura el cumplimiento de la normativa ambiental vigente.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479.75.75 0 0 0 .441-1.342l-1.286-1.287a.75.75 0 0 0-1.06 0l-.586.587a.75.75 0 0 1-1.06 0l-1.955-1.956a.75.75 0 0 0-1.06 0l-.586.586a.75.75 0 0 1-1.06 0l-1.956-1.956a.75.75 0 0 0-1.06 0l-1.287 1.286a.75.75 0 0 0 .441 1.342A9.094 9.094 0 0 0 6 18.72V21a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 .75-.75v-2.28Z" /></svg>,
    title: 'Gestión de Contratistas',
    description: 'Valida la documentación y el cumplimiento SCTR de tus empresas contratistas antes de que inicien sus labores.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 11.904a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H10.563a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H10.563a.75.75 0 0 1-.75-.75Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M18.75 3.75H5.25A2.25 2.25 0 0 0 3 6v12A2.25 2.25 0 0 0 5.25 20.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25Z" /></svg>,
    title: 'Partes Diarios de Trabajo',
    description: 'Registra el avance de obra, personal, maquinaria y eventos relevantes de la jornada de forma 100% digital.'
  }
];

const UseCaseCard: React.FC<UseCase> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex-shrink-0 w-12 h-12 bg-primary-light/10 text-primary-dark rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary-dark mb-2">{title}</h3>
    <p className="text-subtle">{description}</p>
  </div>
);

const UseCases: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const CARDS_PER_PAGE = 6;
  const totalPages = Math.ceil(useCasesData.length / CARDS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const displayedUseCases = useCasesData.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  return (
    <section className="bg-white py-20 md:py-28 bg-cover bg-center">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">Casos de Uso</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-4">
            Digitaliza Cada Rincón de tu Operación
          </h2>
          <p className="text-lg text-subtle">
            Desde el checklist más simple hasta el flujo de trabajo más complejo. Descubre cómo PRAGMO se adapta a tus necesidades específicas.
          </p>
        </div>
        
        <div className="relative">
          <button 
            onClick={handlePrev} 
            disabled={currentPage === 0}
            aria-label="Anterior" 
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 transition-all hover:bg-gray-100 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div key={currentPage} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {displayedUseCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>

          <button 
            onClick={handleNext} 
            disabled={currentPage >= totalPages - 1}
            aria-label="Siguiente" 
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 transition-all hover:bg-gray-100 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
