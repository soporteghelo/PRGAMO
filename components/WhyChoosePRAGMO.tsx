import React, { useState } from 'react';

const WhyChoosePRAGMO: React.FC = () => {
  const [activeView, setActiveView] = useState<'comparison' | 'about'>('comparison');

  const comparisons = [
    {
      feature: "Tiempo de Inspección",
      traditional: "45-60 minutos",
      pragmo: "15-20 minutos", 
      improvement: "70% más rápido",
      icon: "⏱️"
    },
    {
      feature: "Generación de Reportes",
      traditional: "2-3 días",
      pragmo: "Instantáneo",
      improvement: "100% automático",
      icon: "📊"
    },
    {
      feature: "Acceso a Datos",
      traditional: "Solo en oficina",
      pragmo: "Desde cualquier lugar",
      improvement: "24/7 disponible",
      icon: "🌐"
    },
    {
      feature: "Seguimiento de Acciones",
      traditional: "Manual y lento",
      pragmo: "Automático con alertas",
      improvement: "85% más eficiente",
      icon: "🔔"
    },
    {
      feature: "Cumplimiento Normativo",
      traditional: "Verificación manual",
      pragmo: "Compliance automático",
      improvement: "0% errores",
      icon: "✅"
    },
    {
      feature: "Costo de Papel",
      traditional: "$2,400 anuales",
      pragmo: "$0",
      improvement: "100% ahorro",
      icon: "💰"
    }
  ];

  const aboutStats = [
    { number: "24/7", label: "Soporte Técnico", icon: "🛟" },
    { number: "Cloud", label: "Tecnología Segura", icon: "☁️" },
    { number: "Mobile", label: "App Nativa", icon: "📱" },
    { number: "Offline", label: "Sin Internet", icon: "📶" }
  ];

  return (
    <section className="py-16 md:py-24" data-section="why-choose-pragmo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            ¿POR QUÉ ELEGIR PRAGMO?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mt-4 mb-6">
            La Diferencia es <span className="text-primary">Abrumadora</span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto mb-6 md:mb-8 px-2">
            <span className="hidden md:inline">
              Descubre por qué empresas líderes han elegido PRAGMO como su aliado 
              estratégico en transformación digital de seguridad industrial.
            </span>
            <span className="md:hidden">
              Descubre por qué empresas líderes eligen PRAGMO para su transformación digital.
            </span>
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-2 md:gap-4 mb-12 px-4">
            <button
              onClick={() => setActiveView('comparison')}
              className={`flex-1 px-2 md:px-8 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 text-xs md:text-base leading-tight ${
                activeView === 'comparison'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="block md:inline text-center">📊</span>
              <span className="block md:inline text-center">Comparativa</span>
            </button>
            <button
              onClick={() => setActiveView('about')}
              className={`flex-1 px-2 md:px-8 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 text-xs md:text-base leading-tight ${
                activeView === 'about'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="block md:inline text-center">🏆</span>
              <span className="block md:inline text-center">Nuestra Historia</span>
            </button>
          </div>
        </div>

        {/* Comparison View */}
        {activeView === 'comparison' && (
          <div className="space-y-6">
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* Header */}
                  <div className="grid grid-cols-4 gap-4 text-center font-bold text-base mb-6">
                    <div className="text-primary-dark">Proceso</div>
                    <div className="text-red-600">Método Tradicional</div>
                    <div className="text-primary">Con PRAGMO</div>
                    <div className="text-green-600">Mejora</div>
                  </div>

                  {/* Comparison rows */}
                  {comparisons.map((item, index) => (
                    <div 
                      key={index}
                      className="grid grid-cols-4 gap-4 items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary mb-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold text-primary-dark text-base">
                          {item.feature}
                        </span>
                      </div>
                      
                      <div className="text-center">
                        <span className="text-red-600 font-medium bg-red-50 px-3 py-2 rounded-full text-sm">
                          {item.traditional}
                        </span>
                      </div>
                      
                      <div className="text-center">
                        <span className="text-primary font-medium bg-primary/10 px-3 py-2 rounded-full text-sm">
                          {item.pragmo}
                        </span>
                      </div>
                      
                      <div className="text-center">
                        <span className="text-green-600 font-bold bg-green-50 px-3 py-2 rounded-full text-sm">
                          {item.improvement}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="block md:hidden space-y-3">
              {comparisons.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-3 border-l-4 border-primary"
                >
                  {/* Feature Header */}
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                    <span className="text-xl">{item.icon}</span>
                    <h4 className="font-bold text-primary-dark text-sm leading-tight">
                      {item.feature}
                    </h4>
                  </div>

                  {/* Comparison Grid */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm font-medium">Tradicional:</span>
                      <span className="text-red-600 font-medium bg-red-50 px-2 py-1 rounded text-xs">
                        {item.traditional}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm font-medium">PRAGMO:</span>
                      <span className="text-primary font-medium bg-primary/10 px-2 py-1 rounded text-xs">
                        {item.pragmo}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <span className="text-gray-600 text-sm font-medium">Mejora:</span>
                      <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded text-xs">
                        {item.improvement}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About View */}
        {activeView === 'about' && (
          <div className="space-y-16">
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {aboutStats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-2xl font-bold text-primary-dark">Nuestra Misión</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Empoderar a las empresas latinoamericanas con soluciones digitales integrales 
                  que transforman procesos operativos en ventajas competitivas. A través de nuestra 
                  plataforma inteligente y servicios especializados, democratizamos la innovación 
                  tecnológica para organizaciones de cualquier sector y tamaño, haciendo que la 
                  excelencia operativa sea accesible para todos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🚀</span>
                  <h3 className="text-2xl font-bold text-primary-dark">Nuestra Visión</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ser el ecosistema de soluciones digitales más confiable de Latinoamérica, 
                  reconocido por revolucionar la gestión empresarial mediante tecnología 
                  inteligente, adaptable y humanizada. Aspiramos a crear un futuro donde cada 
                  organización, sin importar su complejidad, pueda operar con máxima eficiencia 
                  y transparencia a través de nuestras innovaciones.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light p-4 sm:p-6 md:p-8 rounded-2xl text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight">
              ¿Listo para Ser Parte del Cambio?
            </h3>
            <p className="text-base sm:text-lg mb-6 opacity-90">
              Únete a las empresas líderes que ya digitalizaron sus procesos operativos
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Ver Demo Gratuito
              </button>
              <button 
                onClick={() => {
                  window.open('https://wa.me/51983113140?text=Hola,%20me%20gustaría%20hablar%20con%20un%20experto%20sobre%20PRAGMO%20para%20mi%20empresa', '_blank');
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Hablar con Experto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePRAGMO;