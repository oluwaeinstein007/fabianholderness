// Resolved once at build time by scripts/resolve-site-url.mjs — see that
// file for the fallback order (explicit env var → Vercel's auto URL → localhost).
export const SITE_URL = __SITE_URL__
export const SITE_NAME = 'Fabian Holderness'
export const DEFAULT_TITLE = 'Fabian Holderness | Asset Management & Investment in Los Angeles'
export const DEFAULT_DESCRIPTION =
  'Fabian Holderness is an asset management and investment house in Los Angeles, blending AI-assisted research with disciplined, relationship-driven advisory services.'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-skyline.jpg`
