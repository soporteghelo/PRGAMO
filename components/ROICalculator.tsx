import React, { useState, useEffect } from 'react';

const ROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    employees: 50,
    inspectionsPerMonth: 100,
    timePerInspection: 45,
    hourlyRate: 25,
    paperCosts: 150,
    complianceIssues: 2
  });

  const [results, setResults] = useState({
    currentMonthlyCost: 0,
    pragmoMonthlyCost: 0,
    monthlySavings: 0,
    annualSavings: 0,
    roiPercentage: 0,
    timeToROI: 0
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    // Costos actuales (métodos tradicionales)
    const timeCurrently = (inputs.inspectionsPerMonth * inputs.timePerInspection) / 60; // horas
    const laborCostCurrent = timeCurrently * inputs.hourlyRate;
    const paperCostMonthly = inputs.paperCosts;
    const complianceCost = inputs.complianceIssues * 500; // $500 por issue
    const currentMonthlyCost = laborCostCurrent + paperCostMonthly + complianceCost;

    // Costos con PRAGMO
    const timeWithPragmo = (inputs.inspectionsPerMonth * 15) / 60; // 15 min por inspección
    const laborCostPragmo = timeWithPragmo * inputs.hourlyRate;
    const pragmoSubscription = inputs.employees * 15; // $15 por usuario/mes
    const pragmoMonthlyCost = laborCostPragmo + pragmoSubscription;

    // Ahorros y ROI
    const monthlySavings = currentMonthlyCost - pragmoMonthlyCost;
    const annualSavings = monthlySavings * 12;
    const implementationCost = inputs.employees * 50; // $50 setup por usuario
    const roiPercentage = ((annualSavings - implementationCost) / implementationCost) * 100;
    const timeToROI = implementationCost / monthlySavings;

    setResults({
      currentMonthlyCost,
      pragmoMonthlyCost,
      monthlySavings,
      annualSavings,
      roiPercentage,
      timeToROI
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            CALCULADORA DE ROI
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mt-2 mb-4">
            Descubre Cuánto Puedes <span className="text-primary">Ahorrar</span>
          </h2>
          <p className="text-base text-text-secondary max-w-2xl mx-auto">
            Calcula el retorno de inversión específico para tu empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Input Panel */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="text-lg font-bold text-primary-dark mb-4">
              Datos de tu Empresa
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Número de Empleados
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={inputs.employees}
                  onChange={(e) => handleInputChange('employees', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10</span>
                  <span className="font-bold text-primary">{inputs.employees}</span>
                  <span>500+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Inspecciones por Mes
                </label>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  value={inputs.inspectionsPerMonth}
                  onChange={(e) => handleInputChange('inspectionsPerMonth', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>20</span>
                  <span className="font-bold text-primary">{inputs.inspectionsPerMonth}</span>
                  <span>1000+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Tiempo por Inspección (minutos)
                </label>
                <input
                  type="range"
                  min="30"
                  max="120"
                  value={inputs.timePerInspection}
                  onChange={(e) => handleInputChange('timePerInspection', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>30 min</span>
                  <span className="font-bold text-primary">{inputs.timePerInspection} min</span>
                  <span>120 min</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Costo por Hora de Personal ($)
                </label>
                <input
                  type="range"
                  min="15"
                  max="80"
                  value={inputs.hourlyRate}
                  onChange={(e) => handleInputChange('hourlyRate', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$15</span>
                  <span className="font-bold text-primary">${inputs.hourlyRate}</span>
                  <span>$80+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg shadow-md p-5 text-white">
            <h3 className="text-lg font-bold mb-4">
              Tu Análisis de ROI
            </h3>

            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xs opacity-80 mb-1">Costo Actual (Mensual)</div>
                <div className="text-lg font-bold">
                  ${results.currentMonthlyCost.toFixed(0)}
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xs opacity-80 mb-1">Costo con PRAGMO (Mensual)</div>
                <div className="text-lg font-bold">
                  ${results.pragmoMonthlyCost.toFixed(0)}
                </div>
              </div>

              <div className="bg-green-500/20 rounded-lg p-3 border border-green-400">
                <div className="text-xs opacity-80 mb-1">Ahorro Mensual</div>
                <div className="text-xl font-bold text-green-300">
                  ${results.monthlySavings.toFixed(0)}
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-400">
                <div className="text-xs opacity-80 mb-1">Ahorro Anual</div>
                <div className="text-xl font-bold text-yellow-300">
                  ${results.annualSavings.toFixed(0)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-xs opacity-80 mb-1">ROI</div>
                  <div className="text-base font-bold">
                    {results.roiPercentage.toFixed(0)}%
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-xs opacity-80 mb-1">Tiempo ROI</div>
                  <div className="text-base font-bold">
                    {results.timeToROI.toFixed(1)} meses
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Bottom insights */}
        <div className="mt-6 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-3xl mx-auto">
            <h4 className="text-sm font-bold text-blue-900 mb-1">
              💡 Insight Personalizado
            </h4>
            <p className="text-blue-800 text-sm">
              Con {inputs.employees} empleados realizando {inputs.inspectionsPerMonth} inspecciones mensuales, 
              PRAGMO puede generar ahorros de <strong>${results.annualSavings.toFixed(0)} anuales</strong>, 
              pagándose solo en <strong>{results.timeToROI.toFixed(1)} meses</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;