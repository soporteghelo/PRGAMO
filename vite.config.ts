import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Optimized Vite configuration for GitHub Pages deployment
export default defineConfig({
  base: '/PRGAMO/', // GitHub Pages usa el nombre del repositorio
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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
    },
  }
});