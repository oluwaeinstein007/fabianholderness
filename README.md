# Fabian Holderness

Marketing site for Fabian Holderness, an asset management and investment house
in Los Angeles. Vite + React + TypeScript + Tailwind CSS, package-managed with
pnpm.

## Getting started

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` — start the local dev server
- `pnpm build` — type-check and build for production (outputs to `dist/`)
- `pnpm preview` — preview the production build locally
- `pnpm lint` — run oxlint

## Structure

- `src/pages/` — routed pages (`Home`, article detail pages under `/insights/:slug`)
- `src/components/` — page sections and shared UI (nav, footer, contact form, icons)
- `src/articles.ts` — Insights article content
- `src/images.ts` — photography used across the site (self-hosted under `public/images/`)
- `src/hooks/useTheme.ts` — light/dark theme toggle, persisted to `localStorage`

## Deployment

`vercel.json` and `netlify.toml` are set up for zero-config static hosting on
Vercel or Netlify — both build with `pnpm build` and serve `dist/`, with a
catch-all rewrite to `index.html` so client-side routes (e.g. `/insights/*`)
resolve correctly on a hard refresh. Connect the repo through either
provider's dashboard, or deploy from the CLI (`vercel` / `netlify deploy`)
after authenticating with your own account — neither is wired up here.

## Notes

- The contact form builds a `mailto:` link on submit rather than posting to a
  backend. Wire it to a real endpoint (e.g. a serverless function or a form
  service) before relying on it for lead capture.
- Photography in `public/images/` originates from Unsplash, used under the
  [Unsplash License](https://unsplash.com/license).
