import React, { useState } from 'react';

const DirectComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState('features');

  const featureComparison = [
    {
      category: "Inspecciones Digitales",
      features: [
        { name: "Formularios Personalizables", pragmo: true, competitor1: true, competitor2: false },
        { name: "Modo Offline", pragmo: true, competitor1: false, competitor2: true },
        { name: "Fotos con GPS", pragmo: true, competitor1: true, competitor2: false },
        { name: "Firma Digital", pragmo: true, competitor1: false, competitor2: true },
        { name: "Código de Barras/QR", pragmo: true, competitor1: false, competitor2: false }
      ]
    },
    {
      category: "Reportes y Analytics",
      features: [
        { name: "Reportes Automáticos", pragmo: true, competitor1: true, competitor2: true },
        { name: "Dashboard en Tiempo Real", pragmo: true, competitor1: false, competitor2: true },
        { name: "Alertas Inteligentes", pragmo: true, competitor1: false, competitor2: false },
        { name: "IA para analisis", pragmo: true, competitor1: false, competitor2: false },
        { name: "Exportación Múltiple (PDF, Excel)", pragmo: true, competitor1: true, competitor2: false }
      ]
    },
    {
      category: "Seguridad y Soporte",
      features: [
        { name: "Actualizaciones frecuentes", pragmo: true, competitor1: true, competitor2: false },
        { name: "Seguridad IT", pragmo: true, competitor1: false, competitor2: false },
        { name: "Soporte 24/7 en Español", pragmo: true, competitor1: false, competitor2: false },
        { name: "Capacitación Personalizada", pragmo: true, competitor1: false, competitor2: false },
        { name: "Control de Acceso por Roles", pragmo: true, competitor1: false, competitor2: true }
      ]
    }
  ];

  const pricingComparison = {
    pragmo: {
      name: "PRAGMO",
      price: "$25/módulo/mes",
      setup: "Por módulo - sujeto a evaluación",
      features: ["Soporte 24/7", "Capacitación incluida", "Actualizaciones gratis"],
      highlight: true
    },
    competitor1: {
      name: "Competidor A",
      price: "$15 por usuario",
      setup: "Por usuario/mes",
      features: ["Máx. 10 formularios", "Soporte horario", "Capacitación extra", "Actualizaciones pagadas"],
      highlight: false
    },
    competitor2: {
      name: "Competidor B",
      price: "$20 por usuario",
      setup: "Por usuario/mes",
      features: ["Formularios limitados", "Chat support", "Sin capacitación", "Updates anuales"],
      highlight: false
    }
  };

  const supportComparison = [
    { aspect: "Tiempo de Implementación", pragmo: "2-3 semanas", competitor1: "6-8 semanas", competitor2: "4-6 semanas" },
    { aspect: "Capacitación", pragmo: "Incluida + Personalizada", competitor1: "Solo online", competitor2: "Básica" },
    { aspect: "Soporte Técnico", pragmo: "24/7 en Español", competitor1: "Horario comercial", competitor2: "Solo inglés" },
    { aspect: "Actualizaciones", pragmo: "Gratuitas + Automáticas", competitor1: "Costo adicional", competitor2: "1 vez al año" }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 px-4">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase">
            COMPARACIÓN DIRECTA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mt-3 mb-4 leading-tight">
            ¿Por qué PRAGMO es la <span className="text-primary">Mejor Opción</span>?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-3xl mx-auto">
            Comparamos PRAGMO punto por punto contra las principales alternativas del mercado. 
            Los resultados hablan por sí solos.
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 px-4">
          {[
            { id: 'features', label: '⚡ Características', icon: '⚡' },
            { id: 'pricing', label: '💰 Precios', icon: '💰' },
            { id: 'support', label: '🔠️ Soporte', icon: '🔠️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-sm sm:text-base">{tab.icon}</span>
              <span className="hidden xs:inline sm:inline text-xs sm:text-sm">{tab.label.split(' ')[1]}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Features Comparison */}
        {activeTab === 'features' && (
          <div className="space-y-8">
            {featureComparison.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-light p-6">
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="p-3 sm:p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 text-xs sm:text-sm">Característica</th>
                          <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-primary text-xs sm:text-sm">PRAGMO</th>
                          <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-600 text-xs sm:text-sm">Comp. A</th>
                          <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-600 text-xs sm:text-sm">Comp. B</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.features.map((feature, featureIndex) => (
                          <tr key={featureIndex} className="border-b hover:bg-gray-50">
                            <td className="py-3 sm:py-4 px-2 sm:px-4 font-medium text-xs sm:text-sm">{feature.name}</td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                              {feature.pragmo ? (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-green-500 text-white rounded-full text-xs">
                                  ✓
                                </span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white rounded-full text-xs">
                                  ✗
                                </span>
                              )}
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                              {feature.competitor1 ? (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-green-500 text-white rounded-full text-xs">
                                  ✓
                                </span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white rounded-full text-xs">
                                  ✗
                                </span>
                              )}
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                              {feature.competitor2 ? (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-green-500 text-white rounded-full text-xs">
                                  ✓
                                </span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white rounded-full text-xs">
                                  ✗
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pricing Comparison */}
        {activeTab === 'pricing' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(pricingComparison).map(([key, plan]) => (
              <div 
                key={key}
                className={`rounded-2xl shadow-xl overflow-hidden ${
                  plan.highlight 
                    ? 'ring-4 ring-primary transform scale-105' 
                    : 'bg-white'
                }`}
              >
                <div className={`p-4 text-center ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white' 
                    : 'bg-gray-50'
                }`}>
                  {plan.highlight && (
                    <div className="bg-yellow-400 text-primary-dark text-xs font-bold py-1 px-2 rounded-full inline-block mb-1">
                      MÁS POPULAR
                    </div>
                  )}
                  <h3 className={`text-lg font-bold ${plan.highlight ? 'text-white' : 'text-gray-800'}`}>
                    {plan.name}
                  </h3>
                  <div className={`mt-2 ${plan.highlight ? 'text-white' : 'text-gray-600'}`}>
                    <span className="text-2xl font-bold">{plan.price}</span>
                  </div>
                  <div className={`text-xs mt-1 ${plan.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                    Setup: {plan.setup}
                  </div>
                </div>
                
                <div className="p-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs text-white mt-0.5 ${
                          plan.highlight ? 'bg-primary' : 'bg-gray-400'
                        }`}>
                          ✓
                        </span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => {
                      if (plan.highlight) {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}>
                    {plan.highlight ? 'Comenzar Ahora' : 'Ver Detalles'}
                  </button>
                </div>
              </div>
              ))}
            </div>
            
            {/* Mensaje explicativo del modelo de precios */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-primary-light/20 rounded-lg border-l-4 border-primary">
              <div className="flex items-start space-x-2">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">💡 Diferencia Clave en Nuestro Modelo de Precios</h4>
                  <p className="text-gray-700 leading-snug text-sm">
                    Mientras que <span className="font-semibold text-red-600">otras empresas te cobran por cada usuario</span> (costoso con equipos grandes), 
                    <span className="font-bold text-primary"> PRAGMO te cobra por módulo funcional</span>, independientemente de cuántos usuarios lo utilicen. 
                    <span className="font-semibold text-green-600">Esto significa ahorros significativos</span>, especialmente con muchos empleados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Support Comparison */}
        {activeTab === 'support' && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6">
              <h3 className="text-xl font-bold text-white">Comparación de Soporte y Servicio</h3>
            </div>
            
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Aspecto</th>
                      <th className="text-center py-3 px-4 font-semibold text-primary">PRAGMO</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-600">Competidor A</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-600">Competidor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supportComparison.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium">{item.aspect}</td>
                        <td className="text-center py-4 px-4">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {item.pragmo}
                          </span>
                        </td>
                        <td className="text-center py-4 px-4 text-gray-600 text-sm">
                          {item.competitor1}
                        </td>
                        <td className="text-center py-4 px-4 text-gray-600 text-sm">
                          {item.competitor2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="bg-gradient-to-r from-primary to-primary-light p-6 sm:p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
              ¿Listo para Elegir la Mejor Opción?
            </h3>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-90">
              Comprueba por ti mismo por qué PRAGMO es la elección de las empresas más exigentes
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Comparar con Mi Solución Actual
              </button>
              <button 
                onClick={() => {
                  window.open('https://wa.me/51983113140?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20personalizada%20de%20PRAGMO%20para%20mi%20empresa', '_blank');
                }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-sm sm:text-base"
              >
                Solicitar Demo Personalizada
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectComparison;