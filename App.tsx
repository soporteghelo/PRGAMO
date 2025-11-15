import React, { Component, ReactNode } from 'react';
import { BackgroundProvider, useAlternatingBackground } from './context/BackgroundContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Industries from './components/Industries';
import UseCases from './components/Services';
import Benefits from './components/Benefits';
import WhyPragmo from './components/About';
import HowItWorks from './components/HowItWorks';
import Developments from './components/Developments';
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
      <div style={{minHeight:'100vh', background:'#fff'}}>
        <Header />
        <Section index={0} id="hero"><ErrorBoundary><Hero /></ErrorBoundary></Section>
        <Section index={1} id="industries"><ErrorBoundary><Industries /></ErrorBoundary></Section>
        <Section index={0} id="use-cases"><ErrorBoundary><UseCases /></ErrorBoundary></Section>
        <Section index={1} id="benefits"><ErrorBoundary><Benefits /></ErrorBoundary></Section>
        <Section index={0} id="how-it-works"><ErrorBoundary><HowItWorks /></ErrorBoundary></Section>
        <Section index={1} id="developments"><ErrorBoundary><Developments /></ErrorBoundary></Section>
        <Section index={0} id="about"><ErrorBoundary><WhyPragmo /></ErrorBoundary></Section>
        <Section index={1} id="integrations"><ErrorBoundary><Integrations /></ErrorBoundary></Section>
        <Section index={0} id="faq"><ErrorBoundary><FAQ /></ErrorBoundary></Section>
        <Section index={1} id="contact"><ErrorBoundary><Contact /></ErrorBoundary></Section>
        <Footer />
      </div>
    </BackgroundProvider>
  );
};

export default App;