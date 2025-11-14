// --- CONFIGURACIÓN CRÍTICA Y REQUERIDA ---
// Para que la aplicación pueda leer los datos, tu Google Sheet DEBE ESTAR PUBLICADO EN LA WEB.
// Sigue estos 2 pasos exactos:
//
// PASO 1: PUBLICA TU DOCUMENTO
//   1. En tu Google Sheet, ve al menú: `Archivo` > `Compartir` > `Publicar en la web`.
//   2. En la ventana que aparece, en la pestaña `Enlace`, asegúrate de que esté seleccionada la opción `Toda la web`.
//   3. Haz clic en el botón verde `Publicar`. Confirma si te lo pide. ¡Ya puedes cerrar esta ventana!
//   (No necesitas copiar ningún enlace de esta ventana, solo publicar el documento).
//
// PASO 2: VERIFICA EL ID
//   - Asegúrate de que el ID de abajo (`SPREADSHEET_ID`) sea el correcto para tu documento.
//   - Puedes encontrarlo en la URL de tu navegador (ej: .../d/AQUI_VA_EL_ID/edit).
//
const SPREADSHEET_ID = '1BNyy9KdrpvMDnrAab8U9W3k4oHj0WUe0AEI203BCtec';

/**
 * Parsea una fila de un CSV, manejando comillas.
 * @param text - La fila de texto a parsear.
 * @returns Un array de strings con los valores de la celda.
 */
const parseCsvRow = (text: string | null): string[] => {
    if (text === null) {
        return [];
    }
    const result: string[] = [];
    let current = '';
    let inQuote = false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '"') {
            // Maneja comillas dobles escapadas dentro de un campo entre comillas
            if (inQuote && text[i+1] === '"') {
                current += '"';
                i++; // Salta la siguiente comilla
            } else {
                inQuote = !inQuote;
            }
        } else if (char === ',' && !inQuote) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current);
    // Elimina las comillas iniciales y finales si existen y recorta espacios
    return result.map(val => (val.startsWith('"') && val.endsWith('"') ? val.slice(1, -1) : val).trim());
};


export const fetchGoogleSheetData = async (sheetName: string): Promise<string[][]> => {
  if (!SPREADSHEET_ID || SPREADSHEET_ID.includes('AQUI')) {
      const errorMessage = `El ID de Google Sheets no está configurado. Por favor, edita el archivo 'services/googleSheetService.ts' y establece el SPREADSHEET_ID.`;
      console.error(errorMessage);
      throw new Error(errorMessage);
  }

  // Construye la URL de exportación a CSV usando el ID único y el nombre de la pestaña
  const csvUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  
  try {
    const response = await fetch(csvUrl);
    if (!response.ok) {
        const errorDetails = `Error al cargar los datos (${response.status}). Por favor, revisa lo siguiente:
1. ¿El ID de la hoja de cálculo en 'services/googleSheetService.ts' es correcto?
2. ¿Has seguido los pasos para "Publicar en la web" en el menú Archivo > Compartir? (Compartir como "Cualquier persona con el enlace" NO es suficiente).
3. ¿El nombre de la pestaña en tu Google Sheet es exactamente "${sheetName}"? (Respeta mayúsculas, minúsculas y espacios).`;
      throw new Error(errorDetails);
    }
    
    const csvText = await response.text();
    
    if (!csvText) {
      return [];
    }
    
    // Divide el texto en filas, manejando saltos de línea y eliminando filas vacías al final.
    const rows = csvText.replace(/\r/g, '').split('\n').filter(row => row.trim() !== '');
    return rows.map(parseCsvRow);

  } catch (error) {
    console.error(`Error al procesar la hoja "${sheetName}":`, error);
    throw error;
  }
};