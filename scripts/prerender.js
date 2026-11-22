// Injects the server-rendered app HTML into dist/index.html after `vite build`.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const htmlPath = path.join(root, 'dist', 'index.html')
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

const html = fs.readFileSync(htmlPath, 'utf8')
if (!html.includes('<div id="root"></div>')) throw new Error('Root placeholder not found in dist/index.html')
fs.writeFileSync(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('✓ prerendered dist/index.html')
