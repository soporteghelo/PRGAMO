import { useState, useEffect } from 'react';
import { fetchGoogleSheetData } from '../services/googleSheetService';

export const useGoogleSheetData = <T,>(sheetName: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchGoogleSheetData(sheetName);
        
        if (!result || result.length < 2) {
            setData([]); // Handle empty or header-only sheets
            return;
        }
        
        // Usa los encabezados tal cual vienen de la hoja, solo quitando acentos y espacios extra.
        const headers = result[0].map(header => 
            (header || '').toString()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") // Quita acentos
                .trim()
        );
        const rows = result.slice(1);

        const formattedData = rows.map(row => {
          const obj: any = {};
          headers.forEach((header, index) => {
            if(header){ // Only assign if header exists
               obj[header] = row[index] || '';
            }
          });
          return obj as T;
        }).filter(obj => Object.values(obj).some(val => val !== '')); // Filter out completely empty rows

        setData(formattedData);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Error al cargar datos de "${sheetName}": ${err.message}`);
        } else {
          setError('Ocurrió un error desconocido.');
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [sheetName]);

  return { data, loading, error };
};