import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolveSiteUrl } from './scripts/resolve-site-url.mjs'

const siteUrl = resolveSiteUrl()

function siteUrlHtmlPlugin(): Plugin {
  return {
    name: 'site-url-html',
    transformIndexHtml(html) {
      return html.replaceAll('%SITE_URL%', siteUrl)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlHtmlPlugin()],
  define: {
    __SITE_URL__: JSON.stringify(siteUrl),
  },
})
