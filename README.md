# Nomad Advisory — landing site

Public landing page for the Nomad App, with Portfolio Advisory as the secondary
product. Built from the Claude Design handoff `project/Nomad App Landing.dc.html`.

This is a standalone static site. It shares no code, deployment, domain or backend
with the Nomad customer app (`alvinniyigaba/Nomad-App`); the design-system
components in `src/components/ds/` and tokens in `src/styles/tokens/` are copies.

## Stack

React 19 + Vite, no router, no backend. Output is plain static files in `dist/`.

## Run

```bash
npm install
npm run dev       # local dev server
npm run build     # static build into dist/
npm run preview   # serve the build locally
```

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds the site and publishes `dist/` on every push to
`main`. One-time setup: in the repo, **Settings → Pages → Build and deployment →
Source: GitHub Actions**. The site is then served at
`https://<owner>.github.io/<repo>/` (a custom domain can be added in the same settings
page). Asset paths are relative (`base: './'` in `vite.config.js`), so no path
configuration is needed.

## Settings

At the top of `src/LandingPage.jsx`:

- `ANCHOR` — dark background for the hero and advisory bands:
  `'ink-green'` (default), `'terrain-black'` or `'deep-moss'`.
- `CURRENCY` — currency in the illustrative app mockups (default `USD`).

## Before going live

- The get-started form has no backend: **Send** only shows the thank-you state.
- App figures, feature copy, the fee wording ("No hidden commissions") and the
  footer disclaimer are placeholders from the design and need confirming.
