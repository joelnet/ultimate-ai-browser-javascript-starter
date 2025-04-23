import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: './', // Use relative paths instead of absolute paths
  root: './src',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
    hmr: {
      host: 'localhost',
    },
    proxy: {
      '/socket.io': {
        target: 'ws://localhost:3000',
        ws: true,
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
