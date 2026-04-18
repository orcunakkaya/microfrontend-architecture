import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'dashboard_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3001,
    origin: 'http://localhost:3001',
  },
  build: {
    target: 'chrome89',
  },
});