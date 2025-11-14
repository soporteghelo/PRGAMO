import React from 'react';
import { useGoogleSheetData } from '../hooks/useGoogleSheetData';
import type { Testimonial } from '../types';
import Loader from './Loader';

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, company }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full">
        <svg className="w-10 h-10 text-primary-light/50 mb-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.45 2.13A1 1 0 009.55.13L4.227 7.29a1 1 0 00-.002 1.414l.002.002 5.323 7.16a1 1 0 001.7-.121L19.877 3.63a1 1 0 00-.928-1.5zM3.45 2.13A1 1 0 002.55.13L.13 3.63a1 1 0 00-.928 1.5L4.227 15.7a1 1 0 001.7-.121l5.323-7.16a1 1 0 00-.002-1.414l-.002-.002L3.45 2.13z"></path></svg>
        <blockquote className="text-subtle italic text-lg flex-grow">"{quote}"</blockquote>
        <div className="mt-6 border-t pt-4">
            <p className="font-bold text-primary-dark">{author}</p>
            <p className="text-sm text-gray-500">{company}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  const { data, loading, error } = useGoogleSheetData<Testimonial>('Testimonios');

  return (
    <section id="testimonials" className="bg-surface py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">Lo que dicen nuestros clientes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-4">
            Confianza que se construye con resultados
          </h2>
          <p className="text-lg text-subtle">
            Empresas líderes en el Perú ya están transformando su gestión de SST con PRAGMO.
          </p>
        </div>

        {loading && <Loader />}
        {error && <p className="text-center text-red-500 bg-red-100 p-4 rounded-md">{error}</p>}
        {data && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
