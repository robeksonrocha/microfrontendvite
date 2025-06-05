import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    federation({
      name: 'desligamento',
      filename: 'assets/desligamento.js',
      exposes: {
        './App': './src/App.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 4173,
    strictPort: true
  },
  preview: {
    port: 4173,
    strictPort: true
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
}) 