import React, { Component, ReactNode } from 'react';
import { BackgroundProvider } from './context/BackgroundContext';
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

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error?: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    console.error('ErrorBoundary catch:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ padding: 20, color: '#ff4444', background: '#1a1a2e', borderRadius: 8, margin: 8 }}><h2>⚠️ Error en componente</h2><pre style={{ whiteSpace: 'pre-wrap', color: '#888' }}>{String(this.state.error)}</pre></div>;
    }
    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <BackgroundProvider>
      <div style={{ minHeight: '100vh', background: '#0a0f1a', overflowX: 'hidden', width: '100%' }}>
        <Header />

        {/* 1. Hero Section */}
        <div className="w-full"><ErrorBoundary><Hero /></ErrorBoundary></div>

        {/* 2. Industries */}
        <div id="industries"><ErrorBoundary><Industries /></ErrorBoundary></div>

        {/* 3. Developments — Phase 2 component, wrapped with own dark background */}
        <div className="bg-surface"><ErrorBoundary><Developments /></ErrorBoundary></div>

        {/* 4. Why Choose PRAGMO — Phase 2 component */}
        <div id="why-pragmo" className="bg-surface-light"><ErrorBoundary><WhyChoosePRAGMO /></ErrorBoundary></div>

        {/* 5. Services + Use Cases — Phase 2 component */}
        <div id="use-cases" className="bg-surface"><ErrorBoundary><ServicesUseCases /></ErrorBoundary></div>

        {/* 6. How It Works */}
        <div id="how-it-works"><ErrorBoundary><HowItWorks /></ErrorBoundary></div>

        {/* 7. ROI Calculator — Phase 2 component */}
        <div className="bg-surface-light"><ErrorBoundary><ROICalculator /></ErrorBoundary></div>

        {/* 8. Testimonials — Phase 2 component */}
        <div className="bg-surface"><ErrorBoundary><Testimonials /></ErrorBoundary></div>

        {/* 9. Direct Comparison */}
        <div id="comparison"><ErrorBoundary><DirectComparison /></ErrorBoundary></div>

        {/* 10. Integrations — Phase 2 component */}
        <div className="bg-surface-light"><ErrorBoundary><Integrations /></ErrorBoundary></div>

        {/* 11. FAQ — Phase 2 component */}
        <div id="faq" className="bg-surface"><ErrorBoundary><FAQ /></ErrorBoundary></div>

        {/* 12. Contact — Phase 2 component */}
        <div className="bg-surface-light"><ErrorBoundary><Contact /></ErrorBoundary></div>

        <Footer />
      </div>
    </BackgroundProvider>
  );
};

export default App;