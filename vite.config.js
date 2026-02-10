// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Wenn es ein USERNAME.github.io Repo ist, base = '/'
export default defineConfig({
  plugins: [react()],
  base: '/' // für USERNAME.github.io
})
