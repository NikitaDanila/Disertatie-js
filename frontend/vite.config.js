import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: [
      "src/**/*.jsx",
      "src/**/*.tsx",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",
      "src/**/*.js",
      "node_modules/**/*.js",
      "src/**/*.ts",
      "node_modules/**/*.ts",
    ],
  },
  server:{
    proxy:{
      '/api': 'http://127.0.0.1:8000/',
      '/images':'http://127.0.0.1:8000/'
    }
  },
})
