import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importe o módulo 'path' do Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
  },
});
