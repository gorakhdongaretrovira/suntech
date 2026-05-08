import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // GitHub Pages deployment
  base: '/suntech/',

  server: {
    host: '0.0.0.0',
    port: 5173,
  },

  optimizeDeps: {
    include: ['leaflet', 'react-leaflet'],
  },
})