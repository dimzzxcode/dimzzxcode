import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

let outDir = 'dist'

function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const htmlPath = resolve(outDir, 'index.html')
      let html: string
      try {
        html = readFileSync(htmlPath, 'utf-8')
      } catch {
        return
      }
      const linkRe = /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/
      const match = html.match(linkRe)
      if (!match) return
      const cssPath = resolve(outDir, match[1].replace(/^\//, ''))
      const css = readFileSync(cssPath, 'utf-8')
      writeFileSync(htmlPath, html.replace(match[0], `<style>${css}</style>`))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineCss()],
})
