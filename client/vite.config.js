import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {  // This matches your REST API routes that start with /api
        target: 'http://localhost:3001', // Your REST API server port
        secure: false,
        changeOrigin: true
      },
      '/uploads': {  // Add this to handle serving uploaded files
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  }
})