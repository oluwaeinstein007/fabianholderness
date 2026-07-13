// Single source of truth for "what domain is this build living at", used by
// both vite.config.ts (index.html tags + client bundle) and
// generate-seo-files.mjs (robots.txt / sitemap.xml).
//
// Resolution order:
//   1. VITE_SITE_URL, if you've set it explicitly (e.g. once
//      fabianholderness.com is attached as the domain in Vercel).
//   2. VERCEL_URL, which Vercel injects automatically for every deployment
//      (preview and production) — this is what makes a fresh deploy with no
//      custom domain yet still produce correct, live URLs.
//   3. http://localhost:5173, for plain local builds off Vercel.
export function resolveSiteUrl() {
  const explicit = process.env.VITE_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

  return 'http://localhost:5173'
}
