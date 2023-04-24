import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://127.0.0.1:8000/',
      '/images':'http://127.0.0.1:8000/'
    }
  },
  plugins: [react()],
})
