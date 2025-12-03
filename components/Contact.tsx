import React, { useState } from 'react';
// Fondo lo aplicará el contenedor externo que alterna imágenes

/*
  ================================================================================
  == CÓDIGO PARA GOOGLE APPS SCRIPT =============================================
  ================================================================================
  
  Este es el código que debe estar en tu proyecto de Google Apps Script.
  Asegúrate de que la implementación de la aplicación web esté configurada para
  permitir el acceso a "Cualquier persona".

  - ID de la Hoja (sheetId): ID único de tu Google Sheet.
  - Nombre de la Hoja (sheetName): Nombre de la pestaña donde se guardarán los datos.
  
  ================================================================================
*/

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzqW_8qb5k_AIZQKcf-_YX8cofbXaUgQl21RGYsjE5hN4E5wHZCEi7qQWLNFFdZqeKH/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    if (!scriptURL || scriptURL.includes('PEGAR_AQUI')) {
        setErrorMessage('Error de configuración: Falta la URL de Google Apps Script en Contact.tsx.');
        setFormStatus('error');
        return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.result === 'success') {
          setFormStatus('success');
          form.reset(); 
        } else {
          throw new Error(result.error || 'El script de Google devolvió un error.');
        }
      } else {
        throw new Error(`Error de red: ${response.status}. Revisa que la URL de la implementación sea correcta y pública.`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      const detailedMessage = 'Ocurrió un error. No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.';
      setErrorMessage(detailedMessage);
      setFormStatus('error');
    }
  };

  const statusMessage = formStatus === 'success' 
    ? '¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.'
    : formStatus === 'error'
    ? `Error: ${errorMessage}`
    : null;

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 bg-white relative bg-cover bg-center"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">¿Listo para empezar?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-4">
            Transforma tu Operación Hoy Mismo
          </h2>
          <p className="text-lg text-subtle">
            ¿Tu empresa enfrenta desafíos operacionales? PRAGMO los resuelve mediante <span className="font-semibold text-primary-dark">plataformas, automatización, análisis avanzado, integración de datos, IA y consultoría especializada</span>. Descubre por qué somos el proveedor de soluciones digitales de más rápido crecimiento. Agenda una consultoría de 15 minutos, sin compromiso, y descubre el impacto de nuestras soluciones.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-subtle mb-2">Nombres y Apellidos *</label>
              <input type="text" name="name" id="name" className="w-full bg-gray-50 text-primary-dark rounded-lg border-gray-300 focus:ring-secondary focus:border-secondary transition" placeholder="Ej: Juan Pérez" required />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-subtle mb-2">Empresa *</label>
              <input type="text" name="company" id="company" className="w-full bg-gray-50 text-primary-dark rounded-lg border-gray-300 focus:ring-secondary focus:border-secondary transition" placeholder="Nombre de tu empresa" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-subtle mb-2">Correo Electrónico (corporativo)</label>
              <input type="email" name="email" id="email" className="w-full bg-gray-50 text-primary-dark rounded-lg border-gray-300 focus:ring-secondary focus:border-secondary transition" placeholder="tu@empresa.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-subtle mb-2">Mensaje *</label>
              <textarea name="message" id="message" rows={4} className="w-full bg-gray-50 text-primary-dark rounded-lg border-gray-300 focus:ring-secondary focus:border-secondary transition" placeholder="Cuéntanos sobre tu proyecto o necesidad..." required></textarea>
            </div>
            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-subtle mb-2">LinkedIn (Opcional)</label>
              <input type="url" name="linkedin" id="linkedin" className="w-full bg-gray-50 text-primary-dark rounded-lg border-gray-300 focus:ring-secondary focus:border-secondary transition" placeholder="https://linkedin.com/in/tu-perfil" />
            </div>
            <div className="text-center">
              <button type="submit" className="w-full bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Enviando...' : '¡Quiero mi Demo Gratuita!'}
              </button>
              {statusMessage && (
                <p className={`mt-4 text-sm ${formStatus === 'error' ? 'text-red-400' : 'text-green-300'}`}>
                  {statusMessage}
                </p>
              )}
               <p className="text-xs text-gray-400 mt-4">Respetamos tu privacidad. No spam.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/*
// --- CÓDIGO PARA GOOGLE APPS SCRIPT (doPost) ---
// Pega este código completo en el editor de Apps Script. Reemplaza todo lo que tenías antes.

// -----------------------------------------------------------------------------
// FUNCIÓN PRINCIPAL: Se ejecuta cuando el formulario envía datos con el método POST.
// -----------------------------------------------------------------------------
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    // CAMBIA ESTOS VALORES SI ES NECESARIO
    var sheetId = "1BNyy9KdrpvMDnrAab8U9W3k4oHj0WUe0AEI203BCtec"; 
    var sheetName = "Respuestas";

    var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);

    if (!sheet) {
      throw new Error("La hoja de cálculo con el nombre '" + sheetName + "' no fue encontrada.");
    }

    // Asegúrate de que los nombres en `headers` coincidan con los `name` de tus inputs del formulario.
    var headers = ["Timestamp", "Nombres y Apellidos", "Empresa", "Correo Electronico", "Mensaje", "Linkedin"];
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }

    var newRow = [
      new Date(),
      e.parameter.name || "",
      e.parameter.company || "",
      e.parameter.email || "",
      e.parameter.message || "",
      e.parameter.linkedin || ""
    ];

    sheet.appendRow(newRow);

    var response = { "result": "success" };

  } catch (error) {
    Logger.log("Error en doPost: " + error.toString());
    var response = { "result": "error", "error": error.toString() };

  } finally {
    lock.releaseLock();
  }
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

*/