import React from 'react';
import { useGoogleSheetData } from '../hooks/useGoogleSheetData';
import type { Client } from '../types';
import Loader from './Loader';

const Clients: React.FC = () => {
  const { data, loading, error } = useGoogleSheetData<Client>('Clientes');

  return (
    <section id="clients" className="py-16 bg-surface">
      <div className="container mx-auto px-6">
        <h3 className="text-sm font-semibold text-center text-gray-500 uppercase tracking-widest mb-8">
            Empresas peruanas que ya gestionan su SST con nosotros
        </h3>
        {loading && <Loader />}
        {error && <p className="text-center text-red-500">{error}</p>}
        {data && (
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16">
            {data.map((client) => (
              <img 
                key={client.name} 
                src={client.logoUrl} 
                alt={client.name} 
                className="h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;