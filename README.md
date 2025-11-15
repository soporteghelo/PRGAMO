# PRGAMO - Digitalización de Procesos 🚀

Plataforma web para la digitalización y optimización de cualquier proceso empresarial. Simplifica flujos de trabajo, elimina el papeleo y potencia la productividad.

## 🛠️ Tecnologías

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Estilos**: CSS3 + Tailwind CSS
- **Integración**: Google Sheets API
- **Deployment**: Netlify
- **CI/CD**: GitHub Actions

## 🚀 Ejecutar Localmente

**Prerrequisitos:** Node.js 18+

### Pasos de instalación:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/soporteghelo/PRGAMO.git
   cd PRGAMO
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   - Local: http://localhost:8080/
   - Red: http://[tu-ip]:8080/

## 📊 Funcionalidades

- ✅ **Interfaz responsiva** con Tailwind CSS
- ✅ **Integración con Google Sheets** para contenido dinámico
- ✅ **Soporte para Google Drive** multimedia
- ✅ **Formulario de contacto** funcional
- ✅ **Componentes modulares** React + TypeScript
- ✅ **Optimizado para producción** con Vite
- ✅ **Deploy automático** con GitHub Actions
- ✅ **Type Safety** completo con TypeScript

## 📁 Estructura del Proyecto

```
PRGAMO/
├── components/          # Componentes React reutilizables
├── context/            # Context Providers
├── hooks/              # Custom Hooks
├── services/           # Servicios y APIs
├── utils/              # Utilidades y helpers
├── public/             # Archivos estáticos
└── types.ts           # Definiciones de tipos
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Type checking
npm run type-check
```

## 🌐 Deployment

El proyecto se despliega automáticamente en Netlify cuando se hace push a la rama `main`.

### Variables de Entorno Requeridas en GitHub Secrets:
- `NETLIFY_AUTH_TOKEN`: Token de autenticación de Netlify
- `NETLIFY_SITE_ID`: ID del sitio en Netlify

## 🔧 Configuración

La aplicación funciona inmediatamente sin necesidad de configuración adicional. Los datos se cargan desde Google Sheets públicas ya configuradas.

## 🤝 Contribución

1. Fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 👥 Equipo

- **Desarrollo**: soporteghelo
- **Repositorio**: [https://github.com/soporteghelo/PRGAMO](https://github.com/soporteghelo/PRGAMO)

---

⭐ ¡Dale una estrella si te gusta el proyecto!
