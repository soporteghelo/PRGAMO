import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useGoogleSheetData } from '../hooks/useGoogleSheetData';
import { Background } from '../types';

const BackgroundContext = createContext<string | null>(null);

interface BackgroundProviderProps {
  children: ReactNode;
}

export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({ children }) => {
  const { data: backgroundData } = useGoogleSheetData<Background>('Fondo');
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);

  useEffect(() => {
    if (backgroundData && backgroundData.length > 0) {
      const mainBackground = backgroundData.find(item => item.Web === 'Main');
      if (mainBackground && mainBackground.Link) {
        setBackgroundUrl(mainBackground.Link);
      }
    }
  }, [backgroundData]);

  return (
    <BackgroundContext.Provider value={backgroundUrl}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  return useContext(BackgroundContext);
};
