import React from 'react';

const SocialLink: React.FC<{href: string, children: React.ReactNode}> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-gray-400 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
                <a href="#hero" className="mb-4 block flex items-center space-x-3">
                     <img src="https://www.pragmo.pe/imagenes/logan-qehs-consultores-s-a-c-logo-15102025175641.png" alt="PRAGMO Logo" className="h-10 w-auto"/>
                     <span className="font-bold text-xl text-white">PRAGMO</span>
                </a>
                <p className="text-sm mb-4">
                    Digitalizando Procesos en el Perú.
                </p>
                <p className="text-xs">&copy; {new Date().getFullYear()} PRAGMO Soluciones Digitales. Todos los derechos reservados.</p>
            </div>
            
            <div>
                <h5 className="font-bold text-white uppercase tracking-wider mb-4">Soluciones</h5>
                <ul className="space-y-2 text-sm">
                    <li><a href="#solutions" className="hover:text-white">Formularios con IA</a></li>
                    <li><a href="#solutions" className="hover:text-white">Auditorías Digitales</a></li>
                    <li><a href="#solutions" className="hover:text-white">Gestión de Tareas</a></li>
                    <li><a href="#solutions" className="hover:text-white">Gestión Documental (QR)</a></li>
                    <li><a href="#solutions" className="hover:text-white">Reporte de Eventos</a></li>
                </ul>
            </div>
            
            <div>
                <h5 className="font-bold text-white uppercase tracking-wider mb-4">Empresa</h5>
                <ul className="space-y-2 text-sm">
                    <li><a href="#why-us" className="hover:text-white">Nosotros</a></li>
                    <li><a href="#developments" className="hover:text-white">Desarrollos</a></li>
                    <li><a href="#clients" className="hover:text-white">Clientes</a></li>
                    <li><a href="#" className="hover:text-white">Política de Privacidad</a></li>
                </ul>
            </div>
            
            <div>
                <h5 className="font-bold text-white uppercase tracking-wider mb-4">Contacto</h5>
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                        <span className="mr-2 opacity-70">📍</span> Lima, Perú
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2 opacity-70">✉️</span> hola@pragmo.pe
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2 opacity-70">📞</span> (+51) 987 654 321
                    </li>
                </ul>
                <div className="flex space-x-4 mt-6">
                    <SocialLink href="https://www.linkedin.com/company/pragmo-digital/">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                    </SocialLink>
                    <SocialLink href="https://www.facebook.com/pragmo.digital/">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" clipRule="evenodd" /></svg>
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/pragmo.digital/">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.957-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.957-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.957.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 013.45 2.525c.636-.247 1.363-.416 2.427-.465C7.03 2.013 7.384 2 9.815 2h2.5zm-2.5 10a4 4 0 100-8 4 4 0 000 8zm0-6.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5.5 1.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" /></svg>
                    </SocialLink>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;