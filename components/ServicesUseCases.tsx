import React, { useState } from 'react';

const ServicesUseCases: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: "📋",
      title: "Inspecciones Digitales",
      description: "Transforma tus formularios en papel a checklists digitales inteligentes",
      features: ["Formularios personalizables", "Modo offline", "Fotos con GPS", "Firma digital"],
      benefits: "85% reducción en tiempo de inspección"
    },
    {
      icon: "📊",
      title: "Reportes Automáticos",
      description: "Genera reportes profesionales al instante con análisis de tendencias",
      features: ["Dashboard en tiempo real", "Gráficos interactivos", "Exportación múltiple", "Alertas automáticas"],
      benefits: "0 días para generar reportes ejecutivos"
    },
    {
      icon: "🔔",
      title: "Gestión de Acciones",
      description: "Seguimiento automático de hallazgos y acciones correctivas",
      features: ["Workflow de aprobaciones", "Notificaciones push", "Asignación inteligente", "Historial completo"],
      benefits: "90% mejora en seguimiento de acciones"
    },
    {
      icon: "📈",
      title: "Analytics Avanzado",
      description: "Insights predictivos para prevenir accidentes antes que ocurran",
      features: ["Análisis de datos", "KPIs personalizados", "Benchmarking", "Tendencias de riesgo"],
      benefits: "40% reducción en accidentes"
    }
  ];

  const industries = [
    {
      name: "Minería y Petróleo",
      icon: "⛏️",
      color: "from-orange-500 to-red-600",
      description: "Soluciones específicas para la industria extractiva más exigente",
      cases: [
        {
          title: "Inspección de Equipos Pesados",
          challenge: "Excavadoras y camiones mineros requieren inspecciones exhaustivas diarias",
          solution: "Checklists digitales con códigos QR por equipo, fotos obligatorias y GPS",
          result: "65% menos tiempo de inactividad por fallas preventivas",
          metrics: { time: "De 60 a 18 min", accidents: "-45%", efficiency: "+70%" }
        },
        {
          title: "Auditorías de Seguridad IPERC",
          challenge: "Identificación manual de peligros consume 4-6 horas por área",
          solution: "IPERC integrada con IA para la identificación de peligros y aplicación de controles",
          result: "Tiempo de realización reducido 40%, cero errores de cálculo",
          metrics: { time: "De 4h a 45 min", accuracy: "100%", coverage: "+40%" }
        }
      ]
    },
    {
      name: "Construcción",
      icon: "🏗️", 
      color: "from-blue-500 to-cyan-600",
      description: "Control total en obras desde cimentación hasta entrega",
      cases: [
        {
          title: "Control de Calidad de Obra",
          challenge: "Verificación manual de estructuras genera retrabajos costosos",
          solution: "Inspecciones con planos digitales integrados y trazabilidad completa",
          result: "50% menos retrabajo, documentación perfecta para entrega",
          metrics: { time: "De 45 a 12 min", rework: "-50%", satisfaction: "95%" }
        },
        {
          title: "Seguridad en Altura",
          challenge: "Verificación diaria de equipos de protección personal",
          solution: "Check obligatorio con fotos de arneses, verificación de certificación",
          result: "80% mejor cumplimiento, cero accidentes por EPP defectuoso",
          metrics: { compliance: "98%", accidents: "-80%", time: "De 30 a 5 min" }
        }
      ]
    },
    {
      name: "Manufactura e Industria",
      icon: "🏭",
      color: "from-purple-500 to-pink-600", 
      description: "Control de procesos y mantenimiento en plantas industriales",
      cases: [
        {
          title: "Inspección de Líneas de Producción",
          challenge: "Revisiones manuales de maquinaria toman horas y son inconsistentes",
          solution: "Checklists digitales por máquina con fotos, temperaturas y niveles",
          result: "Inspecciones 3 veces más rápidas con registro completo automático",
          metrics: { time: "-70%", errors: "-80%", documentation: "100%" }
        },
        {
          title: "Control de Calidad de Productos",
          challenge: "Verificación manual de productos genera errores y demoras",
          solution: "Formularios de calidad con criterios claros y fotografías obligatorias",
          result: "Productos defectuosos detectados antes de empaque y envío",
          metrics: { defects: "-85%", speed: "+40%", satisfaction: "95%" }
        }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            SERVICIOS Y CASOS DE USO
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mt-3 mb-4">
            Soluciones Completas para tu <span className="text-primary">Industria</span>
          </h2>
          <p className="text-base text-text-secondary max-w-3xl mx-auto">
            Desde servicios básicos hasta casos específicos de implementación real. 
            Descubre cómo PRAGMO se adapta perfectamente a tu sector.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                activeService === index ? 'border-primary' : 'border-transparent hover:border-primary/30'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              
              <div className="space-y-1 mb-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1 text-xs text-gray-500">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <span className="text-xs font-semibold text-green-800 block">RESULTADO:</span>
                <span className="text-green-700 font-bold text-xs">{service.benefits}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Cases */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary-light p-4 text-white">
            <h3 className="text-xl font-bold mb-2">
              Casos de Éxito por Industria
            </h3>
            <p className="text-sm opacity-90">
              Implementaciones reales con resultados medibles en empresas líderes
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap border-b">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-2 px-4 py-2 font-semibold transition-all duration-300 text-sm ${
                  activeIndustry === index
                    ? 'bg-primary text-white border-b-2 border-primary-dark'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
              <span className="text-base">{industry.icon}</span>
              <span className="hidden sm:inline text-xs">{industry.name}</span>
              </button>
            ))}
          </div>

          {/* Active Industry Content */}
          <div className="p-4">
            {/* Industry Header - Compacto */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">{industries[activeIndustry].icon}</span>
                <h4 className="text-lg font-bold text-primary-dark">{industries[activeIndustry].name}</h4>
              </div>
              <p className="text-gray-600 mb-3 text-xs">{industries[activeIndustry].description}</p>

            </div>

            {/* Case Studies */}
            <div className="grid lg:grid-cols-2 gap-3">
              {industries[activeIndustry].cases.map((useCase, index) => (
                <div key={index} className="border-l-3 border-primary pl-3 bg-gray-50 rounded-r-lg p-3">
                  <h5 className="text-base font-bold text-primary-dark mb-2">
                    {useCase.title}
                  </h5>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-semibold text-red-700 block mb-0.5">🚨 DESAFÍO:</span>
                      <p className="text-gray-600 text-xs">{useCase.challenge}</p>
                    </div>
                    
                    <div>
                      <span className="text-xs font-semibold text-blue-700 block mb-0.5">⚡ SOLUCIÓN:</span>
                      <p className="text-gray-600 text-xs">{useCase.solution}</p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                      <span className="text-xs font-semibold text-green-800 block mb-1">✅ RESULTADO:</span>
                      <p className="text-green-700 font-bold text-xs mb-2">{useCase.result}</p>
                      
                      <div className="grid grid-cols-3 gap-1">
                        {Object.entries(useCase.metrics).map(([key, value]) => (
                          <div key={key} className="text-center bg-white rounded px-1 py-0.5">
                            <div className="text-xs font-bold text-green-700">{value}</div>
                            <div className="text-xs text-green-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tu Industria Necesita una Solución Personalizada?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Tenemos experiencia en múltiples sectores empresariales. Conversemos sobre tu caso específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  window.open('https://wa.me/51983113140?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20casos%20de%20uso%20de%20PRAGMO%20para%20mi%20industria', '_blank');
                }}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Ver Caso de Mi Industria
              </button>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Solicitar Análisis Personalizado
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesUseCases;