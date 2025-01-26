import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';




export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        background: path.resolve(__dirname, 'src/background/background.js'),
        popup: path.resolve(__dirname, './index.html'),
      },
      output: {
        entryFileNames: '[name]/[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});