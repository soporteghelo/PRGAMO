import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Clean Vite configuration for PRGAMO app
// No external API dependencies required
export default defineConfig({
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