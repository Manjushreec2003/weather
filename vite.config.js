import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Weather-App/",
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
  }
});


