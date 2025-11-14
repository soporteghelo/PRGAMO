/**
 * Extracts the file ID from various Google Drive URL formats.
 * @param url - The URL of the Google Drive file.
 * @returns The extracted file ID or null if not found.
 */
const getFileIdFromDriveUrl = (url: string): string | null => {
  if (!url || typeof url !== 'string') {
    return null;
  }
  let fileId: string | null = null;
  const regexes = [
    /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/, // Formato: drive.google.com/file/d/ID/view
    /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/, // Formato: drive.google.com/open?id=ID
    /drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/,   // Formato: drive.google.com/uc?id=ID
    /drive\.google\.com\/thumbnail\?id=([a-zA-Z0-9_-]+)/, // Formato para imágenes/thumbnails
  ];
  for (const regex of regexes) {
    const match = url.match(regex);
    if (match && match[1]) {
      fileId = match[1];
      break;
    }
  }
  return fileId;
};


/**
 * Checks if a given URL is from Google Drive.
 * @param url - The URL to check.
 * @returns `true` if the URL is a Google Drive link, otherwise `false`.
 */
export const isGoogleDriveLink = (url: string): boolean => {
    if (!url || typeof url !== 'string') return false;
    return url.includes('drive.google.com');
}

/**
 * Generates the correct embeddable preview URL for a Google Drive video to be used in an iframe.
 * @param url - The original Google Drive URL.
 * @returns The embeddable URL in the format 'https://drive.google.com/file/d/FILE_ID/preview'.
 */
export const getGoogleDriveEmbedUrl = (url: string): string => {
  const fileId = getFileIdFromDriveUrl(url);
  if (fileId) {
    // The 'rm=minimal' parameter requests a simplified UI for the player,
    // which is ideal for embedding as it removes the header and extra controls.
    return `https://drive.google.com/file/d/${fileId}/preview?rm=minimal`;
  }
  return url;
};

/**
 * Generates a direct link to an image file (JPG, PNG, GIF) stored on Google Drive.
 * This link can be used directly in an `<img>` src attribute for fast loading.
 * @param url - The original Google Drive URL.
 * @returns The direct image link.
 */
export const getGoogleDriveDirectImageLink = (url: string): string => {
  const fileId = getFileIdFromDriveUrl(url);
  if (fileId) {
    // This endpoint provides the raw file content.
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return url;
};

/**
 * Convierte un enlace de visualización de Google Drive a un enlace directo para streaming de video.
 * **NOTA:** Este método puede ser inestable. Es preferible usar `getGoogleDriveEmbedUrl` con un iframe.
 * @param url - La URL de Google Drive a convertir.
 * @returns La URL de streaming directo o la URL original si no es un enlace de Drive reconocible.
 */
export const convertGoogleDriveLink = (url: string): string => {
  if (!url || typeof url !== 'string') {
    return '';
  }

  const fileId = getFileIdFromDriveUrl(url);

  if (fileId) {
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }
  
  return url;
};