import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Carlos Mendoza",
      position: "Gerente de Seguridad",
      company: "Minería",
      companyLogo: "⛏️",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "PRAGMO transformó completamente nuestros procesos de inspección. Hemos reducido los accidentes en un 45% y el tiempo de inspección se redujo de 60 a 18 minutos. El ROI fue evidente desde el primer mes.",
      metrics: {
        reduction: "45%",
        timesSaved: "70%",
        satisfaction: "98%"
      }
    },
    {
      name: "María González",
      position: "Directora de Operaciones",
      company: "Construccción",
      companyLogo: "🏗️",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      quote: "La trazabilidad que nos da PRAGMO es increíble. Cada inspección queda documentada con fotos, GPS y firmas digitales. Los auditores externos quedaron impresionados con nuestro nivel de documentación.",
      metrics: {
        reduction: "60%",
        timesSaved: "80%",
        satisfaction: "95%"
      }
    },
    {
      name: "Roberto Silva",
      position: "Jefe de Mantenimiento",
      company: "Industrial",
      companyLogo: "🏭",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Antes perdíamos 3 días generando reportes manualmente. Ahora con PRAGMO, los reportes se generan automáticamente y los dashboards nos dan insights en tiempo real. Recuperamos 120 horas mensuales.",
      metrics: {
        reduction: "85%",
        timesSaved: "90%",
        satisfaction: "99%"
      }
    }
  ];

  const companyLogos = [
    { name: "Minera Los Andes", logo: "⛏️" },
    { name: "Constructora Horizonte", logo: "🏗️" },
    { name: "Industrias Pacífico", logo: "🏭" },
    { name: "Energía Verde", logo: "⚡" },
    { name: "Petroquímica Sur", logo: "🛢️" },
    { name: "Acero del Norte", logo: "🔩" }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            CASOS DE ÉXITO
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mt-2 mb-4">
            Lo que Dicen Nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-base text-text-secondary max-w-2xl mx-auto">
            Empresas líderes han transformado su gestión de seguridad con PRAGMO.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Image & Company Info */}
              <div className="md:w-1/3 bg-gradient-to-br from-primary to-primary-dark p-4 text-white">
                <div className="text-center">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-white shadow-md object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(testimonials[activeTestimonial].name) + "&background=0ea5e9&color=fff&size=150";
                    }}
                  />
                  <h4 className="text-lg font-bold">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-xs opacity-90 mb-2">
                    {testimonials[activeTestimonial].position}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">
                      {testimonials[activeTestimonial].companyLogo}
                    </span>
                    <span className="text-sm font-semibold">
                      {testimonials[activeTestimonial].company}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-sm font-bold">
                        -{testimonials[activeTestimonial].metrics.reduction}
                      </div>
                      <div className="opacity-80">Accidentes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">
                        {testimonials[activeTestimonial].metrics.timesSaved}
                      </div>
                      <div className="opacity-80">Tiempo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">
                        {testimonials[activeTestimonial].metrics.satisfaction}
                      </div>
                      <div className="opacity-80">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote & Content */}
              <div className="md:w-2/3 p-4">
                <div className="mb-3">
                  <span className="text-2xl text-primary/20 font-serif">"</span>
                </div>
                
                <blockquote className="text-sm text-gray-700 leading-relaxed">
                  {testimonials[activeTestimonial].quote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeTestimonial === index
                  ? 'bg-primary'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
