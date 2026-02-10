import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '#use-cases', label: 'Casos de Uso' },
    { href: '#comparison', label: 'Planes' },
    { href: '#why-pragmo', label: 'Por qué PRAGMO' },
    { href: '#faq', label: 'FAQ' },
  ];

  const whatsappMessage = "Hola, estoy interesado/a en las soluciones de PRAGMO y me gustaría recibir más información.";
  const whatsappUrl1 = `https://wa.me/51983113140?text=${encodeURIComponent(whatsappMessage)}`;
  const whatsappUrl2 = `https://wa.me/51973199953?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );
    const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);
    sections.forEach((section) => section && observer.observe(section));
    return () => { sections.forEach((section) => section && observer.unobserve(section)); };
  }, []);

  useEffect(() => {
    if (showContactModal) {
      const timer = setTimeout(() => setShowContactModal(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showContactModal]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#0a0f1a]/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 group">
          <img className="h-8 sm:h-10 transition-transform duration-300 group-hover:scale-110" src="https://www.pragmo.pe/imagenes/logan-qehs-consultores-s-a-c-logo-15102025175641.png" alt="PRAGMO Logo" />
          <span className="font-display font-bold text-lg sm:text-xl text-white">PRAGMO</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center font-medium space-x-1 xl:space-x-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3 py-2 rounded-lg text-sm xl:text-base transition-all duration-300 ${activeSection === link.href
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowContactModal(true)}
            className="ml-2 bg-gradient-to-r from-primary to-secondary text-[#0a0f1a] font-bold py-2.5 px-5 rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105 text-sm xl:text-base"
          >
            <span className="hidden xl:inline">Contactar Asesor</span>
            <span className="xl:hidden">Contactar</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white focus:outline-none p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1a]/95 backdrop-blur-xl border-t border-white/5">
          <nav className="px-4 pt-3 pb-4 space-y-1 flex flex-col">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 px-4 text-base text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/10 my-2"></div>
            <a
              href={whatsappUrl1} target="_blank" rel="noopener noreferrer"
              className="w-full text-center bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-3 rounded-xl transition duration-300 text-sm"
            >
              📱 Contactar Asesor 1
            </a>
            <a
              href={whatsappUrl2} target="_blank" rel="noopener noreferrer"
              className="w-full text-center bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-3 px-4 rounded-xl transition duration-300 text-sm"
            >
              📱 Contactar Asesor 2
            </a>
            <a
              href="#contact" onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center bg-white/10 text-white font-bold py-3 px-4 rounded-xl hover:bg-white/20 transition duration-300 text-sm"
            >
              📋 Agendar Demo
            </a>
          </nav>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in">
          <div className="glass-card rounded-2xl shadow-glow-lg p-6 mx-4 w-72 animate-scale-in">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 mb-3">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">¡Contáctanos!</h3>
              <p className="text-sm text-gray-400 mb-4">Elige tu asesor preferido</p>

              <div className="space-y-3">
                <a
                  href={whatsappUrl1} target="_blank" rel="noopener noreferrer"
                  onClick={() => setShowContactModal(false)}
                  className="w-full flex items-center justify-center px-4 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl text-sm transition duration-300 border border-green-500/20"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.223l-.206.324-1.127 4.135 4.224-1.119.326-.192z" /></svg>
                  Asesor 1: +51 983 113 140
                </a>
                <a
                  href={whatsappUrl2} target="_blank" rel="noopener noreferrer"
                  onClick={() => setShowContactModal(false)}
                  className="w-full flex items-center justify-center px-4 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl text-sm transition duration-300 border border-green-500/20"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.223l-.206.324-1.127 4.135 4.224-1.119.326-.192z" /></svg>
                  Asesor 2: +51 973 199 953
                </a>
              </div>

              <button
                onClick={() => setShowContactModal(false)}
                className="mt-4 px-4 py-2 text-sm text-gray-500 hover:text-white transition duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;