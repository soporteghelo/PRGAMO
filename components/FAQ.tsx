import React, { useState } from 'react';
// Fondo dado por wrapper

const faqData = [
  {
    question: '¿Mis datos están seguros en la plataforma?',
    answer: 'La seguridad de tu información es nuestra máxima prioridad y se basa en un principio clave: tus datos se almacenan directamente en tu propia cuenta corporativa (Microsoft 365 o Google Workspace), no en nuestros servidores. PRAGMO se integra con tu entorno existente, por lo que hereda y respeta todas las políticas de seguridad y protección de datos que tu área de TI ya ha establecido. Tú mantienes la soberanía y el control total de tu información en todo momento.'
  },
  {
    question: '¿La aplicación funciona sin conexión a internet?',
    answer: 'Sí. Nuestra aplicación móvil está diseñada para funcionar offline. Los usuarios pueden completar formularios, realizar inspecciones y capturar datos en zonas sin cobertura. La información se sincroniza automáticamente en cuanto se restablece la conexión.'
  },
  {
    question: '¿Cuánto tiempo toma la implementación?',
    answer: 'Nuestro proceso es rápido y ágil. El tiempo promedio para un módulo estándar es de dos semanas, dependiendo de la cantidad de formatos a digitalizar y la velocidad para recibir la información por parte del cliente. Nos encargamos de todo: configuración, carga de datos y capacitación.'
  },
  {
    question: '¿Puedo personalizar los formularios y reportes?',
    answer: 'Totalmente. La flexibilidad es uno de nuestros pilares. Puedes replicar cualquier formato que uses en papel; solo tienes que compartirlo con nosotros para coordinar el flujo de trabajo y nuestro equipo lo digitaliza por ti. Los reportes y dashboards son 100% personalizables a tus KPIs.'
  },
  {
    question: '¿Cuál es el modelo de precios?',
    answer: 'Ofrecemos planes de suscripción flexibles basados en el número de módulos que necesites. Nuestro modelo es transparente y sin costos ocultos. Contáctanos para una cotización personalizada que se ajuste a tu presupuesto.'
  },
  {
    question: '¿Qué tipo de soporte ofrecen?',
    answer: 'Ofrecemos soporte mundial y personalizado. Sin importar tu ubicación o zona horaria, tienes acceso directo a nuestro equipo de expertos a través de WhatsApp, email y teléfono para resolver cualquier duda y asegurar que aproveches al máximo la plataforma.'
  }
];

const FaqItem: React.FC<{ faq: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/20 py-6">
      <dt>
        <button onClick={onClick} className="w-full text-left flex justify-between items-start text-white">
          <span className="text-lg font-medium">{faq.question}</span>
          <span className="ml-6 h-7 flex items-center">
            {/* FIX: The SVG element was truncated. It has been completed. */}
            <svg className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-4 pr-12 animate-fade-in">
          <p className="text-base text-gray-300">{faq.answer}</p>
        </dd>
      )}
    </div>
  );
};

// FIX: The component was truncated. I have completed the implementation.
const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section 
          id="faq" 
          className="py-12 sm:py-16 md:py-20 lg:py-28 bg-cover bg-center bg-primary-dark relative overflow-hidden"
        >
            {/* Overlay eliminado para mostrar fondo */}
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
                    <span className="text-secondary font-semibold uppercase tracking-wider text-sm">PREGUNTAS FRECUENTES</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight">
                        Resolvemos tus Dudas
                    </h2>
                    <p className="text-base sm:text-lg text-gray-200">
                        Aquí encontrarás respuestas a las preguntas más comunes sobre PRAGMO. Si no encuentras lo que buscas, no dudes en contactarnos.
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    <dl>
                        {faqData.map((faq, index) => (
                            <FaqItem
                                key={index}
                                faq={faq}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

// FIX: Added the missing default export to resolve the import error in App.tsx.
export default FAQ;
