import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { onRequest as handleHoraires } from './functions/api/horaires.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function primHorairesDevPlugin(primApiKey) {
  return {
    name: 'prim-horaires-dev-proxy',
    configureServer(server) {
      server.middlewares.use('/api/horaires', async (req, res) => {
        try {
          const fullUrl = new URL(req.originalUrl || req.url, 'http://localhost:5173')
          const webReq = new Request(fullUrl.toString(), {
            method: req.method || 'GET',
            headers: req.headers,
          })
          const webRes = await handleHoraires({
            request: webReq,
            env: { PRIM_API_KEY: primApiKey },
          })
          res.statusCode = webRes.status
          webRes.headers.forEach((value, key) => {
            res.setHeader(key, value)
          })
          const bodyText = await webRes.text()
          res.end(bodyText)
        } catch (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(
            JSON.stringify({
              error: 'Erreur proxy local /api/horaires',
              details: err?.message || String(err),
              passages: [],
            })
          )
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '')
  const primApiKey = env.PRIM_API_KEY || process.env.PRIM_API_KEY || ''

  return {
    base: '/',
    publicDir: 'public',
    plugins: [react(), primHorairesDevPlugin(primApiKey)],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: false,
    },
  }
})
