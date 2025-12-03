import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const contactRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '#use-cases', label: 'Casos de Uso' },
    { href: '#comparison', label: 'Beneficios' },
    { href: '#why-pragmo', label: 'Por qué PRAGMO' },
    { href: '#faq', label: 'FAQ' },
  ];
  
  const whatsappMessage = "Hola, estoy interesado/a en las soluciones de PRAGMO y me gustaría recibir más información.";
  const whatsappUrl1 = `https://wa.me/51983113140?text=${encodeURIComponent(whatsappMessage)}`;
  const whatsappUrl2 = `https://wa.me/51973199953?text=${encodeURIComponent(whatsappMessage)}`;

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

    const sections = navLinks.map(link => document.querySelector(link.href.substring(1))).filter(Boolean);
    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (showContactModal) {
      const timer = setTimeout(() => {
        setShowContactModal(false);
      }, 4000); // Auto-close after 4 seconds
      
      return () => clearTimeout(timer);
    }
  }, [showContactModal]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contactRef]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };
  
  const linkClasses = (href: string) => 
    `py-2 transition-all duration-300 border-b-2 ${
      activeSection === href 
      ? 'text-primary border-primary font-semibold' 
      : 'text-subtle border-transparent hover:text-primary'
    }`;

  const DropdownItem: React.FC<{ href: string; title: string; number: string; }> = ({ href, title, number }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
      onClick={() => setIsContactOpen(false)}
    >
      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.223l-.206.324-1.127 4.135 4.224-1.119.326-.192z"/></svg>
      <div className="ml-3">
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-gray-500">{number}</p>
      </div>
    </a>
  );


  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <img className="h-8 sm:h-10" src="https://www.pragmo.pe/imagenes/logan-qehs-consultores-s-a-c-logo-15102025175641.png" alt="PRAGMO Logo" />
          <span className="font-bold text-lg sm:text-xl text-primary-dark">PRAGMO</span>
        </a>
        <nav className="hidden lg:flex items-center font-medium space-x-3 xl:space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={linkClasses(link.href)}
            >
              <span className="text-sm xl:text-base">{link.label}</span>
            </a>
          ))}
          <div className="relative overflow-visible" ref={contactRef}>
            <button
              onClick={() => setShowContactModal(true)}
              className="bg-secondary text-white font-bold py-2 px-3 xl:px-5 rounded-lg hover:bg-secondary-dark transition duration-300 flex items-center text-sm xl:text-base"
            >
              <span className="hidden xl:inline">Contactar asesor</span>
              <span className="xl:hidden">Contactar</span>
              <svg className="w-4 h-4 ml-1 xl:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </button>
          </div>
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary-dark focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg relative z-[55]">
          <nav className="px-4 pt-3 pb-4 space-y-2 flex flex-col text-gray-600 font-medium">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block py-3 px-2 text-base hover:text-primary hover:bg-gray-50 rounded-lg transition-colors">{link.label}</a>
            ))}
            <div className="border-t border-gray-200 my-3"></div>
             <a 
                href={whatsappUrl1}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center bg-secondary text-white font-semibold py-3 px-3 rounded-lg hover:bg-secondary-dark transition duration-300 text-sm"
             >
                📱 Contactar Asesor 1
             </a>
              <a 
                href={whatsappUrl2}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 transition duration-300 text-sm"
             >
                📱 Contactar Asesor 2
             </a>
             <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')} 
                className="w-full text-center bg-gray-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition duration-300 text-sm"
            >
                📋 Agendar Demo (Formulario)
            </a>
          </nav>
        </div>
      )}
      
      {/* Modal de contacto centrado en pantalla */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl p-3 mx-4 w-52 animate-scale-in">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-8 w-8 rounded-full bg-green-100 mb-2">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">¡Contáctanos!</h3>
              <p className="text-xs text-gray-600 mb-3">Elige tu asesor preferido</p>
              
              <div className="space-y-2">
                <a
                  href={whatsappUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowContactModal(false)}
                  className="w-full flex items-center justify-center px-2 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-xs transition duration-300"
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.223l-.206.324-1.127 4.135 4.224-1.119.326-.192z"/>
                  </svg>
                  Asesor 1: +51 983 113 140
                </a>
                
                <a
                  href={whatsappUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowContactModal(false)}
                  className="w-full flex items-center justify-center px-2 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-xs transition duration-300"
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.223l-.206.324-1.127 4.135 4.224-1.119.326-.192z"/>
                  </svg>
                  Asesor 2: +51 973 199 953
                </a>
              </div>
              
              <button
                onClick={() => setShowContactModal(false)}
                className="mt-2 px-3 py-1 text-xs text-gray-500 hover:text-gray-700 transition duration-300"
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