import { defineConfig } from '@tanstack/start/config'
import { devtools } from '@tanstack/devtools-vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    preset: 'vercel',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: () => [
      devtools(),
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
      viteReact({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
    ],
  },
  react: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  sitemap: {
    enabled: true,
    host: 'https://www.roadsyster.co.za/',
  },
})
