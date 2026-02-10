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
      features: ["1 módulo incluido", "Hasta 5 usuarios", "Funciones básicas", "Soporte por email"],
      highlight: false
    },
    {
      name: "BASIC",
      price: "$45",
      period: "/mes",
      description: "Para equipos pequeños",
      features: ["2 módulos incluidos", "Hasta 8 usuarios", "Sin reportes automáticos", "Soporte por email (24h)"],
      highlight: false
    },
    {
      name: "STARTER",
      price: "$75",
      period: "/mes",
      description: "Perfecto para empresas en crecimiento",
      features: ["4 módulos incluidos", "Hasta 25 usuarios", "Reportes + Dashboards", "+$25 por módulo adicional", "Soporte prioritario"],
      highlight: true
    },
    {
      name: "A MEDIDA",
      price: "Cotizar",
      period: "",
      description: "Solución personalizada para tu empresa",
      features: ["Módulos ilimitados", "Usuarios ilimitados", "IA + Reportes avanzados", "Desarrollos a medida", "Soporte dedicado 24/7", "Capacitación personalizada"],
      highlight: false
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

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-surface to-[#0a0f1a]"></div>
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-glow-blue/5 rounded-full blur-[100px]"></div>

      <div className="max-w-[92%] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
            Comparación Directa
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            ¿Por qué PRAGMO es la{' '}
            <span className="gradient-text">Mejor Opción</span>?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto">
            Comparamos PRAGMO punto por punto contra las principales alternativas del mercado.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 px-4">
          {[
            { id: 'pricing', label: 'Precios', icon: '💰' },
            { id: 'features', label: 'Características', icon: '⚡' },
            { id: 'support', label: 'Soporte', icon: '🛡️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === tab.id
                ? 'bg-gradient-to-r from-primary to-secondary text-[#0a0f1a] shadow-glow scale-105'
                : 'glass-card text-gray-400 hover:text-white'
                }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="space-y-6 max-w-6xl mx-auto">
            {featureComparison.map((category, ci) => (
              <div key={ci} className="glass-card rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary/20 to-primary/5 border-b border-white/5 p-5">
                  <h3 className="text-lg font-bold text-white">{category.category}</h3>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 px-3 font-semibold text-gray-400 text-xs sm:text-sm">Característica</th>
                          <th className="text-center py-2 px-3 font-semibold text-primary text-xs sm:text-sm">PRAGMO</th>
                          <th className="text-center py-2 px-3 font-semibold text-gray-500 text-xs sm:text-sm">Comp. A</th>
                          <th className="text-center py-2 px-3 font-semibold text-gray-500 text-xs sm:text-sm">Comp. B</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.features.map((f, fi) => (
                          <tr key={fi} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-3 px-3 text-sm text-gray-300">{f.name}</td>
                            <td className="text-center py-3 px-3">
                              {f.pragmo
                                ? <span className="inline-flex items-center justify-center w-5 h-5 bg-primary/20 text-primary rounded-full text-xs">✓</span>
                                : <span className="inline-flex items-center justify-center w-5 h-5 bg-red-500/20 text-red-400 rounded-full text-xs">✗</span>
                              }
                            </td>
                            <td className="text-center py-3 px-3">
                              {f.competitor1
                                ? <span className="inline-flex items-center justify-center w-5 h-5 bg-green-500/20 text-green-400 rounded-full text-xs">✓</span>
                                : <span className="inline-flex items-center justify-center w-5 h-5 bg-red-500/20 text-red-400 rounded-full text-xs">✗</span>
                              }
                            </td>
                            <td className="text-center py-3 px-3">
                              {f.competitor2
                                ? <span className="inline-flex items-center justify-center w-5 h-5 bg-green-500/20 text-green-400 rounded-full text-xs">✓</span>
                                : <span className="inline-flex items-center justify-center w-5 h-5 bg-red-500/20 text-red-400 rounded-full text-xs">✗</span>
                              }
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

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Planes PRAGMO</h3>
              <p className="text-gray-400">Elige el plan que mejor se adapte a tu empresa</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all duration-500 ${plan.highlight
                    ? 'ring-2 ring-primary relative z-10 -translate-y-2 shadow-glow-lg glass-card'
                    : 'glass-card hover:border-primary/20 hover:shadow-glow'
                    }`}
                >
                  <div className={`p-6 text-center ${plan.highlight
                    ? 'bg-gradient-to-r from-primary/20 to-secondary/10 border-b border-primary/20'
                    : 'border-b border-white/5'
                    }`}>
                    {plan.highlight && (
                      <div className="bg-gradient-to-r from-primary to-secondary text-[#0a0f1a] text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                        MÁS POPULAR
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <div className="mt-3">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-sm mt-2 text-gray-400">{plan.description}</p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={scrollToContact}
                      className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 ${plan.highlight
                        ? 'bg-gradient-to-r from-primary to-secondary text-[#0a0f1a] hover:shadow-glow hover:scale-105'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                        }`}
                    >
                      {plan.highlight ? 'Comenzar Ahora' : plan.name === 'A MEDIDA' ? 'Solicitar Cotización' : 'Elegir Plan'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Competitor comparison */}
            <div className="mt-12 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                ¿Cómo se compara PRAGMO con la competencia?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* PRAGMO STARTER */}
                <div className="rounded-2xl overflow-hidden glass-card ring-2 ring-primary shadow-glow">
                  <div className="bg-gradient-to-r from-primary/20 to-secondary/10 border-b border-primary/20 text-white p-6 text-center">
                    <div className="bg-gradient-to-r from-primary to-secondary text-[#0a0f1a] text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">RECOMENDADO</div>
                    <h3 className="text-xl font-bold">PRAGMO STARTER</h3>
                    <div className="mt-3"><span className="text-3xl font-bold">$75</span><span className="text-lg text-gray-400">/mes</span></div>
                    <p className="text-sm mt-2 text-gray-400">Hasta 25 usuarios incluidos</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {["4 módulos incluidos", "Funciones ilimitadas", "Soporte prioritario", "Capacitación incluida"].map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary mt-0.5">✓</span>
                          <span className="text-sm text-gray-300">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Competitors */}
                {Object.entries(competitorComparison).map(([key, comp]) => (
                  <div key={key} className="rounded-2xl overflow-hidden glass-card">
                    <div className="border-b border-white/5 p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-300">{comp.name}</h3>
                      <div className="mt-3"><span className="text-3xl font-bold text-gray-400">{comp.price}</span></div>
                      <p className="text-sm mt-2 text-gray-500">{comp.setup}</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {comp.features.map((f, fi) => (
                          <li key={fi} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-xs text-red-400 mt-0.5">✗</span>
                            <span className="text-sm text-gray-400">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Savings card */}
            <div className="mt-8 glass-card rounded-2xl border-l-4 border-primary p-6 max-w-6xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-3">💡 ¿Por qué PRAGMO es Más Rentable?</h4>
                  <div className="space-y-2 text-gray-300">
                    <p><span className="font-bold text-red-400">Competencia:</span> Te cobran $15-20 por cada usuario mensual</p>
                    <p><span className="font-bold text-primary">PRAGMO:</span> Precio fijo por plan con usuarios incluidos</p>
                    <div className="glass-card rounded-xl p-4 mt-4">
                      <h5 className="font-bold text-white mb-2">💰 Ejemplo de Ahorro:</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-red-400">Competidor A (25 usuarios):</p>
                          <p className="text-gray-400">25 × $15 = <span className="font-bold text-white">$375/mes</span></p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary">PRAGMO STARTER (25 usuarios):</p>
                          <p className="text-gray-400">Plan completo = <span className="font-bold text-white">$75/mes</span></p>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-secondary/10 border border-secondary/20 rounded-xl">
                        <p className="font-bold text-secondary text-center">🎉 Ahorras $300/mes = $3,600/año con PRAGMO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === 'support' && (
          <div className="glass-card rounded-2xl overflow-hidden max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 border-b border-white/5 p-5">
              <h3 className="text-lg font-bold text-white">Comparación de Soporte y Servicio</h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 font-semibold text-gray-400">Aspecto</th>
                      <th className="text-center py-3 px-4 font-semibold text-primary">PRAGMO</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-500">Competidor A</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-500">Competidor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supportComparison.map((item, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-medium text-gray-300">{item.aspect}</td>
                        <td className="text-center py-4 px-4">
                          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">{item.pragmo}</span>
                        </td>
                        <td className="text-center py-4 px-4 text-gray-500 text-sm">{item.competitor1}</td>
                        <td className="text-center py-4 px-4 text-gray-500 text-sm">{item.competitor2}</td>
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
          <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/10"></div>
            <div className="absolute inset-0 glass-card"></div>
            <div className="relative p-6 md:p-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white leading-tight">
                ¿Listo para Elegir la <span className="gradient-text">Mejor Opción</span>?
              </h3>
              <p className="text-sm sm:text-base mb-6 text-gray-400">
                Comprueba por ti mismo por qué PRAGMO es la elección de las empresas más exigentes
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-primary to-secondary text-[#0a0f1a] px-6 sm:px-8 py-3 rounded-xl font-semibold hover:shadow-glow hover:scale-105 transition-all text-sm sm:text-base"
                >
                  Comparar con Mi Solución Actual
                </button>
                <button
                  onClick={() => window.open('https://wa.me/51983113140?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20personalizada%20de%20PRAGMO%20para%20mi%20empresa', '_blank')}
                  className="border border-white/20 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all text-sm sm:text-base"
                >
                  Solicitar Demo Personalizada
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectComparison;