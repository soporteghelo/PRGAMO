import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages configuration for PRGAMO app
export default defineConfig({
  base: '/PRGAMO/', // Importante: nombre del repositorio
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});