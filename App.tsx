import React, { Component, ReactNode } from 'react';
import { BackgroundProvider, useAlternatingBackground } from './context/BackgroundContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Industries from './components/Industries';
import WhyChoosePRAGMO from './components/WhyChoosePRAGMO';
import ServicesUseCases from './components/ServicesUseCases';
import HowItWorks from './components/HowItWorks';
import Developments from './components/Developments';
import ROICalculator from './components/ROICalculator';
import Testimonials from './components/Testimonials';
import DirectComparison from './components/DirectComparison';
import Integrations from './components/Integrations';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean; error?: any}> {
  constructor(props: any){
    super(props);
    this.state = {hasError: false};
  }
  static getDerivedStateFromError(error: any){
    return {hasError: true, error};
  }
  componentDidCatch(error: any, info: any){
    console.error('ErrorBoundary catch:', error, info);
  }
  render(){
    if(this.state.hasError){
      return <div style={{padding:20, color:'#900'}}><h2>⚠️ Error en componente</h2><pre style={{whiteSpace:'pre-wrap'}}>{String(this.state.error)}</pre></div>;
    }
    return this.props.children;
  }
}

// Section con alternancia de fondos
const Section: React.FC<{ index: number; id: string; children: ReactNode }> = ({ index, id, children }) => {
  const bg = useAlternatingBackground(index);
  
  const style: React.CSSProperties = bg ? {
    backgroundImage: `url('${bg}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};
  
  return (
    <section id={id} style={style} className="relative">
      <div className="absolute top-1 right-1 text-white text-xs z-50 opacity-30">
        {id}
      </div>
      <div className="relative">
        {children}
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <BackgroundProvider>
      <div style={{minHeight:'100vh', background:'#fff', overflowX:'hidden', width:'100%'}}>
        <Header />
        
        {/* 1. Hero Section */}
        <Section index={0} id="hero"><ErrorBoundary><Hero /></ErrorBoundary></Section>
        
        {/* 2. Industries */}
        <Section index={1} id="industries"><ErrorBoundary><Industries /></ErrorBoundary></Section>
        
        {/* 3. Why Choose PRGAMO - NUEVA SECCIÓN */}
        <div id="why-pragmo" className="bg-white"><ErrorBoundary><WhyChoosePRAGMO /></ErrorBoundary></div>
        
        {/* 4. Services + Use Cases - NUEVA SECCIÓN FUSIONADA */}
        <div id="use-cases" className="bg-gradient-to-br from-gray-50 to-blue-50"><ErrorBoundary><ServicesUseCases /></ErrorBoundary></div>
        
        {/* 5. How It Works */}
        <Section index={0} id="how-it-works"><ErrorBoundary><HowItWorks /></ErrorBoundary></Section>
        
        {/* 6. Developments */}
        <div className="bg-white"><ErrorBoundary><Developments /></ErrorBoundary></div>
        
        {/* 7. ROI Calculator - NUEVA SECCIÓN */}
        <div className="bg-gray-50"><ErrorBoundary><ROICalculator /></ErrorBoundary></div>
        
        {/* 8. Testimonials - MEJORADA */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100"><ErrorBoundary><Testimonials /></ErrorBoundary></div>
        
        {/* 9. Direct Comparison - NUEVA SECCIÓN */}
        <div id="comparison" className="bg-white"><ErrorBoundary><DirectComparison /></ErrorBoundary></div>
        
        {/* 10. Integrations */}
        <div className="bg-white"><ErrorBoundary><Integrations /></ErrorBoundary></div>
        
        {/* 11. FAQ */}
        <Section index={1} id="faq"><ErrorBoundary><FAQ /></ErrorBoundary></Section>
        
        {/* 12. Contact */}
        <div className="bg-white"><ErrorBoundary><Contact /></ErrorBoundary></div>
        
        <Footer />
      </div>
    </BackgroundProvider>
  );
};

export default App;