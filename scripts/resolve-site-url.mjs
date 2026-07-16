// Single source of truth for "what domain is this build living at", used by
// both vite.config.ts (index.html tags + client bundle) and
// generate-seo-files.mjs (robots.txt / sitemap.xml).
//
// Resolution order:
//   1. VITE_SITE_URL, if you've set it explicitly (e.g. once
//      fabianholderness.com is attached as the domain in Vercel or DO).
//   2. VERCEL_URL, which Vercel injects automatically for every deployment
//      (preview and production) — this is what makes a fresh deploy with no
//      custom domain yet still produce correct, live URLs.
//   3. APP_URL, DigitalOcean App Platform's equivalent — unlike Vercel this
//      isn't ambient, it must be wired up explicitly as a build-time env var
//      via the ${APP_URL} bindable variable (see .do/app.yaml), but once it
//      is, a fresh App Platform deploy gets correct URLs the same way.
//   4. http://localhost:5173, for plain local builds off either platform.
export function resolveSiteUrl() {
  const explicit = process.env.VITE_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/$/, '')

  return 'http://localhost:5173'
}
