import React, { useState } from 'react';

const DirectComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pricing');

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

  const pricingPlans = [
    {
      name: "LITE",
      price: "$25",
      period: "/mes",
      description: "Ideal para microempresas",
      features: [
        "1 módulo incluido",
        "Hasta 5 usuarios",
        "Funciones básicas",
        "Soporte por email"
      ],
      highlight: false,
      color: "bg-gray-100"
    },
    {
      name: "BASIC",
      price: "$45",
      period: "/mes",
      description: "Para equipos pequeños",
      features: [
        "2 módulos incluidos",
        "Hasta 8 usuarios",
        "Sin reportes automáticos",
        "Soporte por email (24h)"
      ],
      highlight: false,
      color: "bg-gray-100"
    },
    {
      name: "STARTER",
      price: "$75",
      period: "/mes",
      description: "Perfecto para empresas en crecimiento",
      features: [
        "4 módulos incluidos",
        "Hasta 25 usuarios",
        "Reportes + Dashboards",
        "+$25 por módulo adicional",
        "Soporte prioritario"
      ],
      highlight: true,
      color: "bg-gradient-to-r from-primary to-primary-light"
    },
    {
      name: "A MEDIDA",
      price: "Cotizar",
      period: "",
      description: "Solución personalizada para tu empresa",
      features: [
        "Módulos ilimitados",
        "Usuarios ilimitados",
        "IA + Reportes avanzados",
        "Desarrollos a medida",
        "Soporte dedicado 24/7",
        "Capacitación personalizada"
      ],
      highlight: false,
      color: "bg-gray-100"
    }
  ];

  const competitorComparison = {
    competitor1: {
      name: "Competidor A",
      price: "$15 por usuario",
      setup: "Por usuario/mes",
      features: ["Sin modo offline", "Soporte horario", "Capacitación extra", "Actualizaciones pagadas"],
      highlight: false
    },
    competitor2: {
      name: "Competidor B",
      price: "$20 por usuario",
      setup: "Por usuario/mes",
      features: ["Funcionalidades básicas", "Chat support", "Sin capacitación", "Updates anuales"],
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
      <div className="max-w-[92%] mx-auto">
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
            { id: 'pricing', label: '💰 Precios', icon: '💰' },
            { id: 'features', label: '⚡ Características', icon: '⚡' },
            { id: 'support', label: '🛡️ Soporte', icon: '🛡️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === tab.id
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
          <div className="space-y-8 max-w-6xl mx-auto">
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
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-green-500 text-white rounded-full text-xs">✓</span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white rounded-full text-xs">✗</span>
                              )}
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                              {feature.competitor1 ? (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-green-500 text-white rounded-full text-xs">✓</span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white rounded-full text-xs">✗</span>
                              )}
                            </td>
                            <td className="text-center py-3 sm:py-4 px-2 sm:px-4">
                              {feature.competitor2 ? (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-green-500 text-white rounded-full text-xs">✓</span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white rounded-full text-xs">✗</span>
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
          <div className="space-y-8">
            {/* Título de la sección de planes PRAGMO */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Planes PRAGMO</h3>
              <p className="text-gray-600">Elige el plan que mejor se adapte a tu empresa</p>
            </div>

            {/* Grid de planes PRAGMO */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl shadow-xl overflow-hidden bg-white ${plan.highlight
                    ? 'ring-4 ring-primary relative z-10 -translate-y-2'
                    : 'hover:shadow-2xl transition-shadow'
                    }`}
                >
                  <div className={`p-6 text-center ${plan.highlight
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white'
                    : 'bg-gray-50'
                    }`}>
                    {plan.highlight && (
                      <div className="bg-yellow-400 text-primary-dark text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                        MÁS POPULAR
                      </div>
                    )}
                    <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h3>
                    <div className={`mt-3 ${plan.highlight ? 'text-white' : 'text-gray-600'}`}>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-lg">{plan.period}</span>
                    </div>
                    <p className={`text-sm mt-2 ${plan.highlight ? 'text-white/90' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs text-white mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all duration-300 ${plan.highlight
                        ? 'bg-primary text-white hover:bg-primary-dark transform hover:scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {plan.highlight ? 'Comenzar Ahora' : 'Elegir Plan'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparación con competidores */}
            <div className="mt-12 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
                ¿Cómo se compara PRAGMO con la competencia?
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Plan STARTER destacado de PRAGMO */}
                <div className="rounded-2xl shadow-xl overflow-hidden bg-white ring-4 ring-primary">
                  <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 text-center">
                    <div className="bg-yellow-400 text-primary-dark text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                      NUESTRA RECOMENDACIÓN
                    </div>
                    <h3 className="text-xl font-bold">PRAGMO STARTER</h3>
                    <div className="mt-3">
                      <span className="text-3xl font-bold">$75</span>
                      <span className="text-lg">/mes</span>
                    </div>
                    <p className="text-sm mt-2 text-white/90">
                      Hasta 25 usuarios incluidos
                    </p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs text-white mt-0.5">✓</span>
                        <span className="text-sm text-gray-700">4 módulos incluidos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs text-white mt-0.5">✓</span>
                        <span className="text-sm text-gray-700">Funciones ilimitadas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs text-white mt-0.5">✓</span>
                        <span className="text-sm text-gray-700">Soporte prioritario</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs text-white mt-0.5">✓</span>
                        <span className="text-sm text-gray-700">Capacitación incluida</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Competidores */}
                {Object.entries(competitorComparison).map(([key, competitor]) => (
                  <div key={key} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                    <div className="bg-gray-50 p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800">{competitor.name}</h3>
                      <div className="mt-3 text-gray-600">
                        <span className="text-3xl font-bold">{competitor.price}</span>
                      </div>
                      <p className="text-sm mt-2 text-gray-500">
                        {competitor.setup}
                      </p>
                    </div>

                    <div className="p-6">
                      <ul className="space-y-3">
                        {competitor.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-xs text-white mt-0.5">✗</span>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mensaje explicativo del modelo de precios */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-primary-light/20 rounded-xl border-l-4 border-primary max-w-6xl mx-auto">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-3">💡 ¿Por qué PRAGMO es Más Rentable?</h4>
                  <div className="space-y-3 text-gray-700">
                    <p className="font-medium">
                      <span className="font-bold text-red-600">Competencia:</span> Te cobran $15-20 por cada usuario mensual
                    </p>
                    <p className="font-medium">
                      <span className="font-bold text-primary">PRAGMO:</span> Precio fijo por plan con usuarios incluidos
                    </p>
                    <div className="bg-white p-4 rounded-lg mt-4">
                      <h5 className="font-bold text-gray-800 mb-2">💰 Ejemplo de Ahorro:</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-red-600">Competidor A (25 usuarios):</p>
                          <p>25 × $15 = <span className="font-bold">$375/mes</span></p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary">PRAGMO STARTER (25 usuarios):</p>
                          <p>Plan completo = <span className="font-bold">$75/mes</span></p>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-green-100 rounded-lg">
                        <p className="font-bold text-green-700 text-center">
                          🎉 Ahorras $300/mes = $3,600/año con PRAGMO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Support Comparison */}
        {activeTab === 'support' && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6">
              <h3 className="text-xl font-bold text-white">Comparación de Soporte y Servicio</h3>
            </div>

            <div className="p-6">
              <div className="overflow-x-auto -mx-3 sm:-mx-6">
                <table className="w-full min-w-[600px]">
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
          <div className="bg-gradient-to-r from-primary to-primary-light p-4 sm:p-6 md:p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
              ¿Listo para Elegir la Mejor Opción?
            </h3>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-90">
              Comprueba por ti mismo por qué PRAGMO es la elección de las empresas más exigentes
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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