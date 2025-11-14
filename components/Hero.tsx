import React, { useState, useEffect, useRef } from 'react';
import { useGoogleSheetData } from '../hooks/useGoogleSheetData';
import { Feature } from '../types';
import Loader from './Loader';
import { useBackground } from '../context/BackgroundContext';
import { isGoogleDriveLink, getGoogleDriveEmbedUrl, getGoogleDriveDirectImageLink } from '../utils/googleDrive';

const Hero: React.FC = () => {
  const { data: features, loading } = useGoogleSheetData<Feature>('Features');
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const backgroundUrl = useBackground();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (features && features.length > 0) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentFeatureIndex((prevIndex) =>
            prevIndex === features.length - 1 ? 0 : prevIndex + 1
          ),
        20000 // Change slide every 20 seconds
      );
    }
    return () => {
      resetTimeout();
    };
  }, [currentFeatureIndex, features]);

  const handlePrev = () => {
    resetTimeout();
    setCurrentFeatureIndex((prevIndex) =>
      prevIndex === 0 ? (features?.length ?? 1) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    resetTimeout();
    setCurrentFeatureIndex((prevIndex) =>
      prevIndex === (features?.length ?? 1) - 1 ? 0 : prevIndex + 1
    );
  };

  const isVideo = (url: string) => {
    if (!url) return false;
    // Un GIF es un formato de imagen. Se tratará como imagen para una carga más rápida.
    // La comprobación ahora es solo para formatos de video reales.
    return url.toLowerCase().endsWith('.mp4') || 
           url.toLowerCase().endsWith('.webm') ||
           (url.includes('drive.google.com') && !url.toLowerCase().endsWith('.gif'));
  };

  const currentTitle = features?.[currentFeatureIndex]?.Titulo || 'Cargando...';

  return (
    <section 
        id="hero" 
        className="relative text-white pt-4 pb-4 md:pt-6 md:pb-6 overflow-hidden bg-cover bg-center bg-primary-dark"
        style={backgroundUrl ? { backgroundImage: `url('${backgroundUrl}')` } : {}}
    >
        <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-xl md:text-2xl font-extrabold mb-2 leading-tight text-shadow-sm">
                    Digitaliza tus Operaciones y Automatiza tus Flujos de Trabajo
                </h1>
                <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto">
                    PRAGMO es la solución todo-en-uno que transforma tus formularios en papel en checklists digitales inteligentes. Gestiona tareas, reporta avances y optimiza cualquier proceso desde cualquier lugar, con o sin internet.
                </p>
            </div>
        </div>

        <div className="relative container mx-auto px-6 mt-3 md:mt-4 flex items-center justify-center">
            <button 
                onClick={handlePrev} 
                aria-label="Anterior" 
                className="absolute left-0 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-transform hover:scale-110 disabled:opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <div className="phone-mockup">
                <div className="phone-screen">
                    <div className="phone-camera"></div>
                    {loading && (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-secondary"></div>
                        </div>
                    )}
                    {features && features.length > 0 && (
                        <div 
                            className="flex transition-transform duration-500 ease-in-out h-full" 
                            style={{ transform: `translateX(-${currentFeatureIndex * 100}%)` }}
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="w-full h-full flex-shrink-0 relative">
                                    {isVideo(feature.Link) ? (
                                        isGoogleDriveLink(feature.Link) ? (
                                            <iframe
                                                key={feature.Link}
                                                src={getGoogleDriveEmbedUrl(feature.Link)}
                                                allow="autoplay; encrypted-media"
                                                allowFullScreen
                                                className="absolute inset-0 w-full h-full border-0"
                                                title={feature.Titulo}
                                            ></iframe>
                                        ) : (
                                            <video
                                                key={feature.Link}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                src={feature.Link}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                title={feature.Titulo}
                                            />
                                        )
                                    ) : (
                                        <img
                                            src={isGoogleDriveLink(feature.Link) ? getGoogleDriveDirectImageLink(feature.Link) : feature.Link}
                                            alt={feature.Titulo}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <button 
                onClick={handleNext} 
                aria-label="Siguiente" 
                className="absolute right-0 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-transform hover:scale-110 disabled:opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
        <div className="relative text-center mt-2">
             <h3 key={currentTitle} className="text-base md:text-lg font-extrabold text-white animate-fade-in text-shadow-sm h-7">
                {currentTitle}
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
                <a href="#contact" className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark font-bold py-2 px-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-base">
                    Contactanos
                </a>
                <a href="#use-cases" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 font-bold py-2 px-5 rounded-lg border border-white/20 shadow-sm transition-all duration-300 text-base">
                    Ver Soluciones
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;