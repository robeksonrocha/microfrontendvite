import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    federation({
      name: 'app-shell',
      remotes: {
        cargo: 'http://localhost:4174/assets/cargo.js',
        desligamento: 'http://localhost:4173/assets/desligamento.js',
        classes: 'http://localhost:4175/assets/classes.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 3000,
    strictPort: true
  },
  preview: {
    port: 3000,
    strictPort: true
  }
}) 