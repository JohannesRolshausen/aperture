import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on a custom domain, on Vercel
// and under a GitHub Pages sub-path without changes.
export default defineConfig({
  base: './',
  plugins: [react()],
})
