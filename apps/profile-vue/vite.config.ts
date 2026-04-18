import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'profile_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './mount': './src/main.ts',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 3002,
    origin: 'http://localhost:3002',
  },
  build: {
    target: 'chrome89',
  },
});