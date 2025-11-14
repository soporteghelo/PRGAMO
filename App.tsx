import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Industries from './components/Industries';
import UseCases from './components/Services';
import Benefits from './components/Benefits';
import WhyPragmo from './components/About';
import HowItWorks from './components/HowItWorks';
import Developments from './components/Developments';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Integrations from './components/Integrations';
import FAQ from './components/FAQ';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { BackgroundProvider } from './context/BackgroundContext';

const Section: React.FC<{ id: string; children: React.ReactNode, className?: string }> = ({ id, children, className }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section 
      id={id} 
      ref={ref} 
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className || ''}`}
    >
      {children}
    </section>
  );
};


const App: React.FC = () => {
  return (
    <BackgroundProvider>
      <div className="bg-background text-primary-dark">
        <Header />
        <main>
          <Hero />
          <Section id="industries"><Industries /></Section>
          <Section id="benefits"><Benefits /></Section>
          <Section id="use-cases"><UseCases /></Section>
          <Section id="how-it-works"><HowItWorks /></Section>
          <Section id="developments"><Developments /></Section>
          <Section id="why-pragmo"><WhyPragmo /></Section>
          <Section id="integrations"><Integrations /></Section>
          <Section id="faq"><FAQ /></Section>
          <Section id="contact"><Contact /></Section>
        </main>
        <Footer />
      </div>
    </BackgroundProvider>
  );
};

export default App;