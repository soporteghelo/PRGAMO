import React from 'react';
import DevelopmentCard from './DevelopmentCard';
import Loader from './Loader';
import { useGoogleSheetData } from '../hooks/useGoogleSheetData';
import { useBackground } from '../context/BackgroundContext';

// Esta interfaz refleja la estructura de datos que devuelve `useGoogleSheetData`
// que ahora usa los nombres de columna tal cual están en la hoja.
interface SheetDevelopmentData {
  Titulo: string;
  Link: string;
}

const Developments: React.FC = () => {
  // Le indicamos al hook que esperamos datos con la estructura de SheetDevelopmentData.
  const { data, loading, error } = useGoogleSheetData<SheetDevelopmentData>('Desarrollos');
  const backgroundUrl = useBackground();

  return (
    <section 
        id="developments" 
        className="py-20 md:py-28 relative overflow-hidden bg-cover bg-center bg-primary-dark"
        style={backgroundUrl ? { backgroundImage: `url('${backgroundUrl}')` } : {}}
    >
      <div className="absolute inset-0 bg-primary-dark/90 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider">Apps en Acción</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
              Nuestros Desarrollos
            </h2>
            <p className="text-lg text-gray-300">
              Así es como nuestros módulos de Inspecciones, IPERC y Reportes se ven en las manos de tus colaboradores.
            </p>
        </div>

        {loading && <Loader />}
        {error && <p className="text-center text-red-400 bg-red-900/50 p-4 rounded-md">{error}</p>}
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 
              Pasamos las propiedades con los nombres exactos de la hoja de cálculo
              directamente al componente DevelopmentCard.
            */}
            {data.map((dev, index) => (
              <DevelopmentCard key={index} Titulo={dev.Titulo} Link={dev.Link} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Developments;