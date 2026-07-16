// Resolved once at build time by scripts/resolve-site-url.mjs — see that
// file for the fallback order (explicit env var → Vercel's auto URL → localhost).
export const SITE_URL = __SITE_URL__
export const SITE_NAME = 'Fabian Holderness'
export const DEFAULT_TITLE = 'Fabian Holderness | Asset Management & Investment in Los Angeles'
export const DEFAULT_DESCRIPTION =
  'Fabian Holderness is an asset management and investment house in Los Angeles, blending AI-assisted research with disciplined, relationship-driven advisory services.'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-skyline.jpg`

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Converts the site's "06 Feb 2026" display dates to "2026-02-06" for
// <lastmod>/datePublished — done with a fixed lookup table rather than
// `new Date(str)` so it isn't at the mercy of the build machine's timezone.
export function toISODate(displayDate: string): string {
  const [day, month, year] = displayDate.split(' ')
  const monthIndex = MONTHS.indexOf(month)
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${day.padStart(2, '0')}`
}
