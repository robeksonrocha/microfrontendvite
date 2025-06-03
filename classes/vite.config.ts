import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'classes',
      filename: 'remoteEntry.js',
      remotes: {
        app_shell: 'http://localhost:3000/assets/remoteEntry.js'
      },
      exposes: {
        './ClassesApp': './src/ClassesApp.tsx'
      },
      shared: ['react', 'react-dom', 'zustand']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js'
      }
    }
  },
  preview: {
    port: 4175,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
}); 