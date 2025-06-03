// app-shell/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app_shell',
      filename: 'remoteEntry.js',
      exposes: {
        './useGlobalStore': './src/store/useGlobalStore.ts'
      },
      remotes: {
        cargo: 'http://localhost:4174/assets/remoteEntry.js',
        desligamento: 'http://localhost:4173/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'zustand']
    })
  ],
  server: {
    port: 3000
  },
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
    port: 3000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});
