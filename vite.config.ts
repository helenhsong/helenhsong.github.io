import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { resolve } from 'node:path'

// GitHub Pages serves public/portfolio/index.html at /portfolio on its own;
// the dev and preview servers fall back to the app instead, so rewrite it here.
const portfolioRedirect: Plugin = {
  name: 'portfolio-redirect',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/portfolio' || req.url === '/portfolio/') req.url = '/portfolio/index.html'
      next()
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/portfolio' || req.url === '/portfolio/') req.url = '/portfolio/index.html'
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), portfolioRedirect],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        404: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})
