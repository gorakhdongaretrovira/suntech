import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // For Hostinger / normal domain hosting
  base: '/',

  optimizeDeps: {
    include: ['leaflet', 'react-leaflet'],
  },
})