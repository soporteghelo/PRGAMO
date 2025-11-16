import React from 'react';

const integrations = [
  { name: 'Microsoft 365', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
  { name: 'Google Drive', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png' },
];

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider">CONECTA TU CUENTA CORPORATIVA</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mt-2 mb-4">
            Tú Tienes el Control Total de tu Información
          </h2>
          <p className="text-lg text-subtle">
            PRAGMO se conecta directamente a tu cuenta corporativa de Microsoft 365 o Google Workspace. Todos tus reportes, fotos y datos se guardan en tu propio <strong>DRIVE</strong> o SharePoint, brindándote seguridad, soberanía y control total sobre tu activo más valioso: tu información.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 md:gap-x-24">
                {integrations.map((integration) => (
                    <div key={integration.name} className="flex flex-col items-center group">
                        <img 
                            src={integration.logo} 
                            alt={integration.name} 
                            className="h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                         <p className="text-base text-subtle mt-3 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{integration.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;