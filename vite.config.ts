import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  // dist/.vite/manifest.json maps each page file to its built chunks, which
  // scripts/prerender.mjs uses to add modulepreload links to each page's HTML.
  build: {
    manifest: true,
  },
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
