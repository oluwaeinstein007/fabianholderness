// Self-hosted photography, originally sourced from Unsplash (unsplash.com)
// under the Unsplash License. Files live in public/images/.
export const images = {
  heroSkyline: '/images/hero-skyline.jpg', // Los Angeles skyline at dusk
  towersUpward: '/images/towers-upward.jpg', // looking up at glass towers
  officeInterior: '/images/office-interior.jpg', // minimalist glass-walled office
  dataDashboard: '/images/data-dashboard.jpg', // analytics / research dashboard
  teamAtWork: '/images/team-at-work.jpg', // office at dusk, teams at work
}

// Native pixel dimensions of each file above — used for og:image:width /
// og:image:height so link-preview crawlers can render a card without
// fetching the image first.
export const imageDimensions: Record<keyof typeof images, { width: number; height: number }> = {
  heroSkyline: { width: 2400, height: 1600 },
  towersUpward: { width: 1800, height: 1200 },
  officeInterior: { width: 1800, height: 1202 },
  dataDashboard: { width: 1600, height: 976 },
  teamAtWork: { width: 2000, height: 1333 },
}

// Shared alt text, one per photo — reused everywhere that image appears so
// meaningful uses (article covers) get a real description instead of each
// call site inventing its own wording (or leaving it blank).
export const imageAlt: Record<keyof typeof images, string> = {
  heroSkyline: 'Downtown Los Angeles skyline at dusk',
  towersUpward: 'Looking up at glass office towers',
  officeInterior: 'Minimalist glass-walled office interior',
  dataDashboard: 'Market research and analytics dashboard',
  teamAtWork: 'Office at dusk, teams reviewing work',
}
