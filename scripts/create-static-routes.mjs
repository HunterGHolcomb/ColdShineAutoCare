import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const routes = [
  '/services',
  '/reviews',
  '/our-work',
  '/about',
  '/contact',
  '/services/full-detail',
  '/services/interior-detailing',
  '/services/exterior-detailing',
  '/services/paint-correction',
  '/services/ceramic-coating',
  '/services/headlight-restoration',
  '/services/maintenance-detail',
  '/services/engine-detailing',
  '/services/car-waxing',
  '/services/clay-bar-treatment',
  '/services/wheel-washing',
]

for (const route of routes) {
  const target = join('dist', route.replace(/^\//, ''), 'index.html')
  await mkdir(dirname(target), { recursive: true })
  await copyFile('dist/index.html', target)
}

await copyFile('dist/index.html', 'dist/404.html')
console.log(`Created static entry points for ${routes.length} routes.`)
