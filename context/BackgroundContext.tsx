import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useGoogleSheetData } from '../hooks/useGoogleSheetData';
import { Background } from '../types';

// Provee un arreglo de URLs de fondo en el orden que aparecen.
const BackgroundContext = createContext<string[]>([]);

interface BackgroundProviderProps {
  children: ReactNode;
}

export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({ children }) => {
  const { data: backgroundData } = useGoogleSheetData<Background>('Fondo');
  const [backgrounds, setBackgrounds] = useState<string[]>([]);

  useEffect(() => {
    if (backgroundData && backgroundData.length > 0) {
      // Filtra por Web === 'Main' y toma máximo 2
      const mains = backgroundData.filter(item => item.Web === 'Main' && item.Link).slice(0, 2);
      setBackgrounds(mains.map(m => m.Link));
    }
  }, [backgroundData]);

  return (
    <BackgroundContext.Provider value={backgrounds}>
      {children}
    </BackgroundContext.Provider>
  );
};

// Obtiene el fondo alternado según índice (secciones impares usan backgrounds[0], pares backgrounds[1])
export const useAlternatingBackground = (index: number): string | undefined => {
  const bgs = useContext(BackgroundContext);
  if (bgs.length === 0) return undefined;
  if (bgs.length === 1) return bgs[0];
  // index 0,2,4,6,8... => fondo[0] | index 1,3,5,7,9... => fondo[1]
  return index % 2 === 0 ? bgs[0] : bgs[1];
};

// Compatibilidad: retorna el primer fondo.
export const useBackground = (): string | undefined => {
  const bgs = useContext(BackgroundContext);
  return bgs[0];
};
