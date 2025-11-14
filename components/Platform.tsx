import React from 'react';

const Platform: React.FC = () => {
  return (
    <section id="platform" className="bg-surface py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary-dark mb-6">Nuestra Plataforma Inteligente</h2>
          <p className="text-subtle mb-4">
            Accede a un ecosistema completo para la gestión de la seguridad. Desde la captura de datos en campo hasta la generación de insights estratégicos en la oficina.
          </p>
          <ul className="list-disc list-inside text-subtle space-y-2">
            <li>Interfaz intuitiva y fácil de usar.</li>
            <li>Seguridad de datos de nivel empresarial.</li>
            <li>Accesible desde cualquier dispositivo.</li>
            <li>Reportes personalizables y exportables.</li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="Dashboard de la plataforma" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Platform;