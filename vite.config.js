import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// One HTML file per page, so each address (/, /vision/, /fund/, /credit/) is a real
// file that GitHub Pages can serve directly.
const page = (path) => fileURLToPath(new URL(path, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset URLs so the build can be served from any path.
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: page('index.html'),
        vision: page('vision/index.html'),
        fund: page('fund/index.html'),
        credit: page('credit/index.html'),
      },
    },
  },
})
