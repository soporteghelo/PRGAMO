import React from 'react';
import { isGoogleDriveLink, getGoogleDriveEmbedUrl, getGoogleDriveDirectImageLink } from '../utils/googleDrive';

interface DevelopmentCardProps {
  Titulo: string;
  Link: string;
}

const DevelopmentCard: React.FC<DevelopmentCardProps> = ({ Titulo, Link }) => {
  const isVideo = (url: string): boolean => {
    if (!url) return false;
    // Un GIF es un formato de imagen. Se tratará como imagen para una carga más rápida.
    // La comprobación ahora es solo para formatos de video reales.
    return url.toLowerCase().endsWith('.mp4') || 
           url.toLowerCase().endsWith('.webm') ||
           (url.includes('drive.google.com') && !url.toLowerCase().endsWith('.gif'));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
      <div className="relative w-full aspect-video bg-gray-900">
        {Link ? (
          isVideo(Link) ? (
            isGoogleDriveLink(Link) ? (
                <iframe
                    src={getGoogleDriveEmbedUrl(Link)}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                    title={Titulo}
                ></iframe>
            ) : (
                <video
                    src={Link}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    title={Titulo}
                ></video>
            )
          ) : (
            <img
              src={isGoogleDriveLink(Link) ? getGoogleDriveDirectImageLink(Link) : Link}
              alt={Titulo}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )
        ) : (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <p className="text-gray-400 p-4 text-center">Contenido no disponible.</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary transition-colors duration-300">{Titulo}</h3>
      </div>
    </div>
  );
};

export default DevelopmentCard;