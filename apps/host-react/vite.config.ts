import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host_app',
      dts: false,
      remotes: {
        dashboard_remote: {
          type: 'module',
          name: 'dashboard_remote',
          entry: 'http://localhost:3001/remoteEntry.js',
        },
        profile_remote: {
          type: 'module',
          name: 'profile_remote',
          entry: 'http://localhost:3002/remoteEntry.js',
        },
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3000,
    origin: 'http://localhost:3000',
  },
  build: {
    target: 'chrome89',
  },
});