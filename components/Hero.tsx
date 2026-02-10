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

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    if (features && features.length > 0) {
      timeoutRef.current = setTimeout(
        () => setCurrentFeatureIndex((prev) => prev === features.length - 1 ? 0 : prev + 1),
        20000
      );
    }
    return () => resetTimeout();
  }, [currentFeatureIndex, features]);

  const handlePrev = () => {
    resetTimeout();
    setCurrentFeatureIndex((prev) => prev === 0 ? (features?.length ?? 1) - 1 : prev - 1);
  };

  const handleNext = () => {
    resetTimeout();
    setCurrentFeatureIndex((prev) => prev === (features?.length ?? 1) - 1 ? 0 : prev + 1);
  };

  const isVideo = (url: string) => {
    if (!url) return false;
    return url.toLowerCase().endsWith('.mp4') ||
      url.toLowerCase().endsWith('.webm') ||
      (url.includes('drive.google.com') && !url.toLowerCase().endsWith('.gif'));
  };

  const currentTitle = features?.[currentFeatureIndex]?.Titulo || 'Cargando...';

  return (
    <section
      id="hero"
      className="relative text-white pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden min-h-[70vh] flex flex-col justify-center"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1525] to-[#0a1628]"></div>
      <div className="absolute inset-0 grid-bg opacity-50"></div>

      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-glow-blue/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-10 md:mb-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm sm:text-base font-medium mb-4 md:mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Plataforma de Digitalización Operativa
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            Transforma tus Operaciones con{' '}
            <span className="gradient-text">Tecnología Inteligente</span>
          </h1>
          <p className="hidden sm:block text-sm sm:text-lg md:text-xl text-gray-400 max-w-[85%] sm:max-w-2xl mx-auto leading-relaxed">
            Inspecciones digitales, reportes automáticos e inteligencia artificial para optimizar la seguridad y productividad de tu empresa.
          </p>
        </div>
      </div>

      {/* Phone carousel */}
      <div className="relative container mx-auto px-4 md:px-6 flex items-start justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[200px] overflow-visible z-10">
        {/* Animated circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 border border-primary/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 border border-secondary/20 rounded-full animate-spin-reverse"></div>
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 border border-primary/10 rounded-full animate-pulse"></div>

          {/* Floating dots */}
          <div className="hidden sm:block absolute top-16 left-16 w-2 h-2 bg-primary rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
          <div className="hidden sm:block absolute top-32 right-12 w-1.5 h-1.5 bg-secondary rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
          <div className="hidden sm:block absolute bottom-20 left-20 w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="hidden sm:block absolute bottom-32 right-16 w-1.5 h-1.5 bg-secondary/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Prev button */}
        <button
          onClick={handlePrev}
          aria-label="Anterior"
          className="absolute left-4 sm:left-6 md:left-0 z-50 glass-card hover:bg-white/10 text-primary rounded-full p-2.5 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 hover:shadow-glow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Phone */}
        <div className="phone-mockup relative z-20 transform hover:scale-105 transition-transform duration-500">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 rounded-3xl blur-xl animate-pulse"></div>
          <div className="phone-screen relative">
            <div className="phone-camera"></div>
            {loading && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              </div>
            )}
            {features && features.length > 0 && (
              <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentFeatureIndex * 100}%)` }}>
                {features.map((feature, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 relative">
                    {isVideo(feature.Link) ? (
                      isGoogleDriveLink(feature.Link) ? (
                        <iframe key={feature.Link} src={getGoogleDriveEmbedUrl(feature.Link)} allow="autoplay; encrypted-media" allowFullScreen className="absolute inset-0 w-full h-full border-0" title={feature.Titulo}></iframe>
                      ) : (
                        <video key={feature.Link} className="absolute inset-0 w-full h-full object-cover" src={feature.Link} autoPlay loop muted playsInline title={feature.Titulo} />
                      )
                    ) : (
                      <img src={isGoogleDriveLink(feature.Link) ? getGoogleDriveDirectImageLink(feature.Link) : feature.Link} alt={feature.Titulo} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          aria-label="Siguiente"
          className="absolute right-4 sm:right-6 md:right-0 z-50 glass-card hover:bg-white/10 text-primary rounded-full p-2.5 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 hover:shadow-glow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Current feature title */}
      <div className="relative text-center mt-4 px-4 z-10">
        <h3 key={currentTitle} className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 animate-fade-in">
          {currentTitle}
        </h3>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0f1a] to-transparent"></div>
    </section>
  );
};

export default Hero;