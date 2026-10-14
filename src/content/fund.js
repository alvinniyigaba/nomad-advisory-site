/**
 * All the words on the Nomad Fund page, in the order they appear.
 * Source: the Nomad Ventures company profile. Lines marked DRAFT were written
 * for the site and need confirming.
 *
 * Edit the text between the quotes and save. Keep the quotes, commas and
 * brackets as they are. To use an apostrophe inside a 'single-quoted' line,
 * write it as \' (for example 'the fund\'s'). Lists can grow or shrink by copying
 * or deleting a whole { ... } block or line.
 *
 * The browser-tab title and search-engine description live in fund/index.html.
 */

// ---- Hero ----
export const hero = {
  eyebrow: 'Nomad Fund',
  headline: 'Nomad Capital Fund I',
  intro:
    'A pooled fund, managed by Nomad Ventures as general partner, that gathers believer capital and deploys it into audited, sector-proven African ventures.',
  primaryButton: 'Register interest',
  secondaryButton: 'See our sectors',
};

// ---- Section 01: Sectors ----
export const sectors = {
  eyebrow: 'Our sectors',
  headline: 'Where the fund deploys.', // DRAFT
  intro: 'Three sectors today, with a fourth on the horizon.', // DRAFT
  items: [
    { name: 'Agribusiness', body: 'Farming, processing and storage businesses with proven demand.' }, // DRAFT body
    { name: 'Export trade', body: 'Businesses taking African goods to regional and global buyers.' }, // DRAFT body
    { name: 'Real assets', body: 'Land, property and productive infrastructure that hold their value over time.' }, // DRAFT body
  ],
  horizon: {
    label: 'On the horizon',
    name: 'Pan-African financial infrastructure',
    body: 'The rails that move capital across the continent: credit, payments and cross-border finance.', // DRAFT body
  },
};

// ---- Section 02: How the fund works ----
export const structure = {
  eyebrow: 'How the fund works',
  headline: 'Fund structure and fiduciary discipline from the outset.',
  intro:
    'Nomad Ventures began as a savings cooperative. It was rebuilt as a fund so that every deployment is governed, audited and accountable to the people whose capital it carries.', // DRAFT
  facts: [
    { label: 'Vehicle', value: 'Nomad Capital Fund I, a pooled investment fund' },
    { label: 'Manager', value: 'Nomad Ventures, as general partner (GP)' },
    { label: 'Investors', value: 'Believer capital: individuals and families who share the thesis' }, // DRAFT wording
    { label: 'Deployment', value: 'Audited, sector-proven African ventures' },
    { label: 'Co-investment', value: 'Direct co-investment alongside the fund in agribusiness, export trade and real assets' },
  ],
};

// ---- Section 03: Growth path ----
export const path = {
  eyebrow: 'The road from here',
  headline: 'Audited returns open the next door.', // DRAFT
  phases: [
    { stage: 'Now', title: 'Capital formation', years: '0 to 3 years', body: 'Fund-structured deployment into proven African sectors.' },
    {
      stage: 'Next',
      title: 'Institutional capital',
      years: '3 to 7 years',
      body: 'Audited returns unlock blended finance and co-investment from development finance institutions (DFIs).',
    },
    { stage: 'Later', title: 'Pan-African deployment', years: '7 to 15 years', body: 'Cross-border project finance across the continent.' },
  ],
};

// ---- Closing band ----
export const cta = {
  headline: 'Register your interest in Fund I.', // DRAFT
  body: 'Tell us a little about yourself and we will be in touch with the fund\'s documents and next steps.', // DRAFT
  button: 'Register interest',
};

// Shown in the footer on this page, under the shared disclaimer. Needs legal review.
export const pageNote =
  'Nothing on this page is an offer to sell, or a solicitation of an offer to buy, an interest in any fund. Participation is open only to eligible investors on the terms of the fund\'s offering documents. Capital is at risk and returns are not guaranteed.';
