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
  // Fondo ahora se aplicará desde el contenedor padre (Section) usando alternancia.

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
    >
        {/* Overlay eliminado para mostrar fondo */}

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-extrabold mb-3 leading-tight text-shadow-sm px-2">
                    Digitaliza tus Operaciones y Automatiza tus Flujos de Trabajo
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-3xl mx-auto px-2">
                    PRAGMO es la solución todo-en-uno que transforma tus formularios en papel en checklists digitales inteligentes. Gestiona tareas, reporta avances y optimiza cualquier proceso desde cualquier lugar, con o sin internet.
                </p>
            </div>
        </div>

        <div className="relative container mx-auto px-4 md:px-6 mt-4 md:mt-6 flex items-center justify-center overflow-hidden">
            {/* Efectos visuales alrededor del celular - Responsivo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                {/* Círculos animados - Tamaños ajustados para móvil */}
                <div className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 border-2 border-white/20 rounded-full animate-spin-slow"></div>
                <div className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 border-2 border-secondary/30 rounded-full animate-spin-reverse"></div>
                <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 border border-primary-light/40 rounded-full animate-pulse"></div>
                
                {/* Puntos flotantes - Ocultos en móviles muy pequeños */}
                <div className="hidden sm:block absolute top-16 left-16 w-3 h-3 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="hidden sm:block absolute top-32 right-12 w-2 h-2 bg-primary-light rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="hidden sm:block absolute bottom-20 left-20 w-4 h-4 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="hidden sm:block absolute bottom-32 right-16 w-2 h-2 bg-secondary/80 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
                
                {/* Iconos flotantes - Ajustados para móvil */}
                <div className="hidden md:block absolute top-10 left-1/4 text-white/40 animate-float" style={{animationDelay: '0s'}}>
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div className="hidden md:block absolute top-20 right-1/4 text-secondary/60 animate-float" style={{animationDelay: '1s'}}>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                </div>
                <div className="hidden md:block absolute bottom-16 left-1/3 text-primary-light/50 animate-float" style={{animationDelay: '2s'}}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
            </div>

            <button 
                onClick={handlePrev} 
                aria-label="Anterior" 
                className="absolute left-2 sm:left-4 md:left-0 z-30 bg-white/90 hover:bg-white text-primary hover:text-primary-dark rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 disabled:opacity-50 border-2 border-white shadow-xl backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <div className="phone-mockup relative z-20 transform hover:scale-105 transition-transform duration-300">
                {/* Brillo alrededor del teléfono */}
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-primary-light/20 to-secondary/20 rounded-3xl blur-xl animate-pulse"></div>
                <div className="phone-screen relative">
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
                className="absolute right-2 sm:right-4 md:right-0 z-30 bg-white/90 hover:bg-white text-primary hover:text-primary-dark rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 disabled:opacity-50 border-2 border-white shadow-xl backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
        <div className="relative text-center mt-3 px-4">
          <h3 key={currentTitle} className="text-sm sm:text-base md:text-lg font-extrabold text-white animate-fade-in text-shadow-sm">
            {currentTitle}
          </h3>
        </div>
    </section>
  );
};

export default Hero;