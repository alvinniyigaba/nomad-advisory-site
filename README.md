# Nomad Group — website

The public website for Nomad Group: four pages built from the Claude Design handoff
(`project/Nomad App Landing.dc.html`) and the Nomad Ventures company profile.

| Page | Address | Code | Words |
|---|---|---|---|
| Nomad App & Advisory (home, with the enquiry form) | `/` | `src/pages/HomePage.jsx` | `src/content/landing.js` |
| Our Vision | `/vision/` | `src/pages/VisionPage.jsx` | `src/content/vision.js` |
| Nomad Fund | `/fund/` | `src/pages/FundPage.jsx` | `src/content/fund.js` |
| Credit (coming soon, waitlist) | `/credit/` | `src/pages/CreditPage.jsx` | `src/content/credit.js` |

The header menu and footer are shared by every page (`src/site/`), with their words in
`src/content/site.js`. Each page is its own HTML file (`index.html`, `vision/index.html`,
...), so every address works when opened directly.

This is a standalone static site. It shares no code, deployment, domain or backend
with the Nomad customer app (`alvinniyigaba/Nomad-App`); the design-system
components in `src/components/ds/` and tokens in `src/styles/tokens/` are copies.

## Stack

React 19 + Vite (multi-page build), no router, no backend. Output is plain static
files in `dist/`.

## Run

```bash
npm install
npm run dev       # local dev server: /, /vision/, /fund/, /credit/
npm run build     # static build into dist/
npm run preview   # serve the build locally
```

## Editing the copy

Every word lives in **`src/content/`**, one file per page plus `site.js` for the menu
and footer, each laid out in page order. Change the text between the quotes, keep the
quotes and commas, and save. Lists of features, steps, sectors and products can be
lengthened or shortened; their numbering follows the order automatically. Lines marked
`DRAFT` were written for the site and need confirming.

Each page's browser-tab title and search description are in its HTML file.

To see changes as you type, run `npm run dev` (locally or in a GitHub Codespace) and
open the address it prints. Pushing to `main` publishes them to the live site.

## Enquiries

The enquiry form is on the home page. The other pages link to it with an option
already picked (`?interest=fund`, `?interest=credit`, `?interest=app`). The form has
no backend yet: **Send** only shows the thank-you message.

## Settings

- `ANCHOR` in `src/site/layout.js`: dark background for the hero and dark bands,
  `'ink-green'` (default), `'terrain-black'` or `'deep-moss'`.
- `CURRENCY` at the top of `src/pages/HomePage.jsx`: currency in the illustrative app
  mockups (default `USD`).

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds the site and publishes `dist/` on every push to
`main`. One-time setup: in the repo, **Settings → Pages → Build and deployment →
Source: GitHub Actions**. The site is then served at
`https://<owner>.github.io/<repo>/` (a custom domain can be added in the same settings
page). Asset paths are relative (`base: './'` in `vite.config.js`), so no path
configuration is needed.

## Before going live

- The enquiry form has no backend: **Send** only shows the thank-you state.
- Credit is not offered yet; keep the Credit page as "coming soon" until products,
  rates and eligibility are final.
- The Fund page's offer disclaimer and the footer's regulatory wording need legal review.
- App figures, the fee wording ("No hidden commissions") and lines marked `DRAFT`
  need confirming.
