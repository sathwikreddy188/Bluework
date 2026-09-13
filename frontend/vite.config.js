import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Any request the frontend makes to "/api/..." will be forwarded
    // to our backend server running on port 5000. This lets us avoid
    // writing the full backend URL everywhere in our React code.
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
