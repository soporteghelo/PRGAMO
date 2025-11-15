import React from 'react';
import { useBackground } from '../context/BackgroundContext';

interface BenefitProps {
  icon: React.ReactNode;
  value: string;
  description: string;
  source: string;
  sourceUrl: string;
  trend?: string;
  context?: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, value, description, source, sourceUrl, trend, context }) => {
  const handleClick = () => {
    window.open(sourceUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleClick}
      className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <div className="relative z-10">
        <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
        
        <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-300">
          {value}
        </div>
        
        <p className="text-gray-300 group-hover:text-white mb-4 text-sm leading-relaxed transition-colors duration-300">
          {description}
        </p>
        
        <div className="space-y-2">
          <div className="text-xs text-purple-300 font-medium group-hover:text-purple-200 transition-colors duration-300 flex items-center">
            📊 {source}
            <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          
          {trend && (
            <div className="text-xs text-green-300 group-hover:text-green-200 transition-colors duration-300">
              📈 {trend}
            </div>
          )}
          
          {context && (
            <div className="text-xs text-gray-400 group-hover:text-gray-300 italic transition-colors duration-300">
              ℹ️ {context}
            </div>
          )}
          
          <div className="text-xs text-blue-300 group-hover:text-blue-200 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            🔗 Clic para ver fuente completa
          </div>
        </div>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  return null;
};

export default Benefits;