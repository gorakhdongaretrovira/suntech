import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/suntech/',
  base: '/',

  optimizeDeps: {
    include: ['leaflet', 'react-leaflet'],
  },
})