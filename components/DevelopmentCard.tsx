import React from 'react';
import { isGoogleDriveLink, getGoogleDriveEmbedUrl, getGoogleDriveDirectImageLink } from '../utils/googleDrive';

interface DevelopmentCardProps {
  Titulo: string;
  Link: string;
  Descripcion?: string;
  Categoria?: string;
  Contacto?: string;
}

const DevelopmentCard: React.FC<DevelopmentCardProps> = ({ Titulo, Link, Descripcion, Categoria, Contacto }) => {
  const isVideo = (url: string): boolean => {
    if (!url) return false;
    return url.toLowerCase().endsWith('.mp4') || 
           url.toLowerCase().endsWith('.webm') ||
           (url.includes('drive.google.com') && !url.toLowerCase().endsWith('.gif'));
  };

  return (
    <div className="group relative h-full">
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-2xl h-full flex flex-col">
        
        {/* Categoría */}
        {Categoria && (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-2 self-start">
            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
            </svg>
            {Categoria}
          </div>
        )}
        
        {/* Título */}
        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight mb-2">
          {Titulo}
        </h3>
        
        {/* Descripción */}
        {Descripcion && (
          <p className="text-slate-300 text-xs leading-relaxed group-hover:text-slate-200 transition-colors duration-300 mb-3 line-clamp-2">
            {Descripcion}
          </p>
        )}
        
        {/* Smartphone Mockup - Centrado */}
        <div className="flex justify-center flex-grow items-center py-2">
          <div className="relative group-hover:scale-105 transition-transform duration-500">
            {/* Marco del smartphone - Más compacto */}
            <div className="relative w-32 h-56 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[1.2rem] p-1.5 shadow-2xl border-2 border-slate-700">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-b-lg z-10"></div>
              
              {/* Pantalla */}
              <div className="w-full h-full bg-black rounded-[1rem] overflow-hidden relative">
                {/* Contenido de la app */}
                <div className="absolute inset-0">
                  {Link ? (
                    isVideo(Link) ? (
                      isGoogleDriveLink(Link) ? (
                        <iframe
                          src={getGoogleDriveEmbedUrl(Link)}
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          className="w-full h-full border-0 object-cover"
                          title={Titulo}
                        ></iframe>
                      ) : (
                        <video
                          src={Link}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          title={Titulo}
                        ></video>
                      )
                    ) : (
                      <img
                        src={isGoogleDriveLink(Link) ? getGoogleDriveDirectImageLink(Link) : Link}
                        alt={Titulo}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <div className="text-center text-slate-400 p-2">
                        <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <p className="text-xs">No disponible</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Botón home */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-white/30 rounded-full"></div>
              </div>
              
              {/* Botón de encendido */}
              <div className="absolute right-0 top-10 w-0.5 h-6 bg-slate-600 rounded-l-sm"></div>
              
              {/* Botones de volumen */}
              <div className="absolute left-0 top-8 w-0.5 h-4 bg-slate-600 rounded-r-sm"></div>
              <div className="absolute left-0 top-14 w-0.5 h-4 bg-slate-600 rounded-r-sm"></div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-[1.2rem] bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
        
        {/* Botón de WhatsApp */}
        <div className="mt-auto pt-2">
          <a
            href={Contacto || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 group"
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            <span className="font-medium text-sm">Quiero más información</span>
          </a>
        </div>
        
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default DevelopmentCard;