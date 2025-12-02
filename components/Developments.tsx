import React, { useState, useEffect } from 'react';
import DevelopmentCard from './DevelopmentCard';
import Loader from './Loader';
import { useGoogleSheetData } from '../hooks/useGoogleSheetData';
// Fondo se maneja externamente para alternar

// ====================================
// 🎯 CONFIGURACIÓN DE TARJETAS Y CELULARES
// ====================================
const CARD_CONFIG = {
  // 📱 Configuración del cajón azul (en Tailwind classes o px)
  cardWidth: '400px',          // 'auto' o '300px' para ancho fijo
  cardHeight: 'h-full',       // 'h-full', 'h-96', o '400px'
  cardPadding: 'p-3 sm:p-4', // Padding interno del cajón
  
  // 📱 Configuración del celular mockup
  phoneWidth: 'w-28 sm:w-32',    // Ancho: 'w-24 sm:w-28' (pequeño) | 'w-32 sm:w-36' (grande)
  phoneHeight: 'h-60 sm:h-72',   // Alto: aumentado 10% - 'h-52→h-60' (móvil) | 'h-64→h-72' (desktop)
  phonePosition: 'justify-center items-center', // Posición: 'justify-start' | 'justify-center' | 'justify-end'
  
  // 🎯 Configuración del carrusel y navegación
  itemsPerPage: {
    mobile: 1,                // 1 tarjeta en móvil
    desktop: 4                // 4 tarjetas en desktop
  },
  forceNavigation: true,      // true = siempre usar navegación | false = mostrar todas si caben
  
  // 📏 Configuración del contenedor y espaciado
  containerWidth: '95%',      // Ancho total disponible: '90%', '95%', '100%', '1400px'
  cardSpacing: '20px',        // Espacio entre tarjetas: '10px', '20px', '30px'
  
  // 📏 Configuración del grid responsivo (usado solo si forceNavigation = false)
  gridCols: {
    mobile: 'grid-cols-1',        // 1 columna en móvil
    tablet: 'sm:grid-cols-2',     // 2 columnas en tablet
    laptop: 'lg:grid-cols-3',     // 3 columnas en laptop
    desktop: 'xl:grid-cols-4'     // 4 columnas en desktop
  },
  
  // 🎨 Configuración de espaciado (legacy - ahora usa cardSpacing)
  gap: 'gap-3 sm:gap-4',        // Solo usado si forceNavigation = false
};

// Esta interfaz refleja la estructura de datos que devuelve `useGoogleSheetData`
// que ahora usa los nombres de columna tal cual están en la hoja.
interface SheetDevelopmentData {
  Id: string;
  Web: string;
  Titulo: string;
  Descripcion: string;
  Link: string;
  Contacto: string;
}

const Developments: React.FC = () => {
  // Le indicamos al hook que esperamos datos con la estructura de SheetDevelopmentData.
  const { data, loading, error } = useGoogleSheetData<SheetDevelopmentData>('Desarrollos');
  
  // Estado para el carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isMobile, setIsMobile] = useState(false);
  
  // Estado para modal de imagen expandida
  const [selectedApp, setSelectedApp] = useState<SheetDevelopmentData | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  
  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const itemsPerPage = isMobile ? CARD_CONFIG.itemsPerPage.mobile : CARD_CONFIG.itemsPerPage.desktop;
  
  // Calcular total de páginas
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  
  // Resetear índice cuando cambien los datos
  useEffect(() => {
    setCurrentIndex(0);
  }, [data]);
  
  // Funciones de navegación
  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('left');
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };
  
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('right');
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };
  
  const goToPage = (pageIndex: number) => {
    if (isTransitioning || pageIndex === currentIndex) return;
    setIsTransitioning(true);
    setSlideDirection(pageIndex > currentIndex ? 'right' : 'left');
    
    setTimeout(() => {
      setCurrentIndex(pageIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };
  
  // Obtener elementos para la página actual
  const getCurrentItems = () => {
    if (!data) return [];
    const currentItemsPerPage = isMobile ? CARD_CONFIG.itemsPerPage.mobile : CARD_CONFIG.itemsPerPage.desktop;
    const startIndex = currentIndex * currentItemsPerPage;
    const endIndex = startIndex + currentItemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Funciones para el modal de imagen
  const openImageModal = (app: SheetDevelopmentData) => {
    setSelectedApp(app);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setSelectedApp(null);
  };

  return (
    <section 
      id="developments" 
      className="py-8 md:py-12 relative overflow-hidden bg-white min-h-screen flex flex-col bg-cover bg-center"
    >
      {/* Overlay eliminado para mostrar fondo */}
      
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">
        <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-primary font-semibold uppercase tracking-wider block">APPS EN ACCIÓN</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-4 block">
              Nuestros Desarrollos
            </h2>
            <p className="text-lg text-subtle">
              Así es como nuestros módulos de Inspecciones, IPERC y Reportes se ven en las manos de tus colaboradores.
            </p>
        </div>

        {loading && <Loader />}
        {error && <p className="text-center text-red-400 bg-red-900/50 p-4 rounded-md">{error}</p>}
        
        {data && data.length > 0 && (
          <div className="relative flex-1 flex flex-col justify-center">
            {/* Contenedor principal con ancho configurable */}
            <div className={`mx-auto mb-6 ${isMobile ? 'w-full px-4' : ''}`} 
                 style={{ width: isMobile ? '100%' : CARD_CONFIG.containerWidth }}>
              {/* Carrusel de tarjetas */}
              <div 
                className={`flex ${isMobile ? 'justify-center items-center' : 'justify-center'} transition-all duration-300 ${
                  isTransitioning 
                    ? slideDirection === 'right' 
                      ? 'transform translate-x-8 opacity-0' 
                      : 'transform -translate-x-8 opacity-0'
                    : 'transform translate-x-0 opacity-100'
                }`}
                style={{ gap: isMobile ? '0px' : CARD_CONFIG.cardSpacing }}
              >
                {getCurrentItems().map((dev, index) => (
                  <div 
                    key={`${currentIndex}-${index}`} 
                    className={`flex-shrink-0 transform transition-all duration-500 ${
                      isTransitioning 
                        ? 'scale-95 opacity-0' 
                        : 'scale-100 opacity-100 hover:scale-105'
                    } ${isMobile ? 'w-full' : ''}`}
                    style={{ 
                      transitionDelay: `${index * 50}ms`,
                      width: isMobile 
                        ? '100%' 
                        : CARD_CONFIG.cardWidth === 'auto' 
                          ? `calc((100% - ${CARD_CONFIG.cardSpacing} * ${CARD_CONFIG.itemsPerPage.desktop - 1}) / ${CARD_CONFIG.itemsPerPage.desktop})` 
                          : CARD_CONFIG.cardWidth,
                      maxWidth: isMobile ? '400px' : 'none',
                      margin: isMobile ? '0 auto' : 'initial'
                    }}
                  >
                    <DevelopmentCard 
                      Titulo={dev.Titulo} 
                      Link={dev.Link}
                      Descripcion={dev.Descripcion}
                      Categoria={dev.Web}
                      Contacto={dev.Contacto}
                      cardConfig={CARD_CONFIG}
                      onExpandImage={() => openImageModal(dev)}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controles de navegación - Solo mostrar si hay más de una página */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-8">
                {/* Botón Anterior */}
                <button
                  onClick={goToPrevious}
                  disabled={isTransitioning}
                  className={`group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <svg className={`w-5 h-5 mr-2 transition-transform duration-300 ${
                    isTransitioning ? '' : 'group-hover:-translate-x-1'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Anterior
                </button>
                
                {/* Botón Siguiente */}
                <button
                  onClick={goToNext}
                  disabled={isTransitioning}
                  className={`group flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Siguiente
                  <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    isTransitioning ? '' : 'group-hover:translate-x-1'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
            
            {/* Contador de páginas */}
            {totalPages > 1 && (
              <div className="text-center mt-6">
                <span className="text-sm text-gray-400">
                  Página {currentIndex + 1} de {totalPages} • {data.length} aplicaciones total
                </span>
              </div>
            )}
          </div>
        )}
        
        {/* Mensaje si no hay datos */}
        {data && data.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No hay desarrollos disponibles</h3>
              <p className="text-gray-500">Agrega contenido a tu Google Sheet para ver las aplicaciones aquí.</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Modal de imagen expandida */}
      {showImageModal && selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-[100] p-2 overflow-hidden" onClick={closeImageModal}>
          <div className="relative w-full h-full max-w-sm max-h-screen flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Botón cerrar */}
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            
            {/* Información de la app */}
            <div className="text-center text-white mb-2 px-2">
              <h3 className="text-base font-bold mb-1 leading-tight">{selectedApp.Titulo}</h3>
              <p className="text-xs text-gray-300 line-clamp-1">{selectedApp.Descripcion}</p>
            </div>
            
            {/* Imagen del teléfono expandida - mismo diseño que las tarjetas */}
            <div className="flex justify-center items-center flex-1">
              <div className="relative flex-shrink-0">
                {/* Marco del smartphone - Versión expandida con mismo diseño que las tarjetas */}
                <div className="relative w-76 h-[80vh] max-w-[304px] max-h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[1.2rem] p-1.5 shadow-2xl border-2 border-slate-700 group">
                  {/* Notch - Mismo diseño que las tarjetas */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-b-lg z-10"></div>
                  
                  {/* Pantalla - Mismo diseño que las tarjetas */}
                  <div className="w-full h-full bg-black rounded-[1rem] overflow-hidden relative">
                    {/* Contenido de la app */}
                    <div className="absolute inset-0">
                      {selectedApp.Link ? (
                        selectedApp.Link.includes('drive.google.com') ? (
                          <iframe
                            src={selectedApp.Link}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-full border-0 object-cover"
                            title={selectedApp.Titulo}
                            loading="lazy"
                            style={{ imageRendering: 'crisp-edges' }}
                          ></iframe>
                        ) : (
                          <img
                            src={selectedApp.Link}
                            alt={selectedApp.Titulo}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            style={{ 
                              imageRendering: 'crisp-edges',
                              filter: 'contrast(1.1) brightness(1.05)',
                              backfaceVisibility: 'hidden',
                              transform: 'translateZ(0)'
                            }}
                            onLoad={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.style.filter = 'contrast(1.1) brightness(1.05)';
                            }}
                            onError={(e) => {
                              e.currentTarget.src = "https://via.placeholder.com/320x640/1E293B/94A3B8?text=" + encodeURIComponent(selectedApp.Titulo);
                            }}
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-800">
                          <div className="text-center text-slate-400 p-4">
                            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <p className="text-lg font-bold">{selectedApp.Titulo}</p>
                            <p className="text-sm mt-2">{selectedApp.Descripcion}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Botón home - Mismo diseño que las tarjetas */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Botón de encendido - Mismo diseño que las tarjetas */}
                  <div className="absolute right-0 top-10 w-0.5 h-6 bg-slate-600 rounded-l-sm"></div>
                  
                  {/* Botones de volumen - Mismo diseño que las tarjetas */}
                  <div className="absolute left-0 top-8 w-0.5 h-4 bg-slate-600 rounded-r-sm"></div>
                  <div className="absolute left-0 top-14 w-0.5 h-4 bg-slate-600 rounded-r-sm"></div>
                  
                  {/* Glow effect - Mismo que las tarjetas */}
                  <div className="absolute inset-0 rounded-[1.2rem] bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>
            
            {/* Botones de navegación en la parte inferior */}
            <div className="flex justify-center items-center mt-1 space-x-2">
              <button
                onClick={() => {
                  const currentAppIndex = data?.findIndex(app => app.Id === selectedApp.Id) || 0;
                  const prevIndex = currentAppIndex > 0 ? currentAppIndex - 1 : (data?.length || 1) - 1;
                  const prevApp = data?.[prevIndex];
                  if (prevApp) {
                    setSelectedApp(prevApp);
                  }
                }}
                className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-1.5 px-3 rounded-full transition-all duration-300 hover:scale-105 text-xs"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
                <span>Anterior</span>
              </button>
              
              <button
                onClick={() => {
                  const currentAppIndex = data?.findIndex(app => app.Id === selectedApp.Id) || 0;
                  const nextIndex = currentAppIndex < (data?.length || 1) - 1 ? currentAppIndex + 1 : 0;
                  const nextApp = data?.[nextIndex];
                  if (nextApp) {
                    setSelectedApp(nextApp);
                  }
                }}
                className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-1.5 px-3 rounded-full transition-all duration-300 hover:scale-105 text-xs"
              >
                <span>Siguiente</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            

          </div>
        </div>
      )}
    </section>
  );
};

export default Developments;