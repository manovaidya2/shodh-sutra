import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4100,  // Set the port to 4100
    host: '0.0.0.0',  // Make the app accessible from external IPs
  },
})
