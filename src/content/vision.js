/**
 * All the words on the Our Vision page, in the order they appear.
 * Source: the Nomad Ventures company profile. Lines marked DRAFT were written
 * for the site and need confirming.
 *
 * Edit the text between the quotes and save. Keep the quotes, commas and
 * brackets as they are. To use an apostrophe inside a 'single-quoted' line,
 * write it as \' (for example 'Africa\'s'). Lists can grow or shrink by copying
 * or deleting a whole { ... } block or line.
 *
 * The browser-tab title and search-engine description live in vision/index.html.
 */

// ---- Hero: the vision statement ----
export const hero = {
  eyebrow: 'Our Vision',
  quote:
    'I envision an Africa that has reclaimed its honor, where we call on each other to solve our own problems, and stand at the tables of global negotiation not as beggars, but as equitable partners.',
  attribution: 'Niyigaba Alvin, Founder',
};

// ---- Section 01: Mission, with the company facts beside it ----
export const mission = {
  eyebrow: 'Mission',
  quote: 'Gather African capital and deploy it efficiently and profitably in ways that profit the continent.',
  factsHeading: 'At a glance',
  facts: [
    { label: 'Founded', value: '2024, as the formal successor to Growth Capital Investments (est. 2022)' },
    { label: 'Structure', value: 'Nomad Ventures LLP, Wakiso District, Uganda. Family-owned, moving to a fund-managed model.' },
    {
      label: 'Founders',
      value: 'Niyigaba Alvin and his wife, Kirabo, a finance scholar with audit and advisory experience at global firms',
    },
    { label: 'Focus', value: 'Agribusiness, export trade and real assets, expanding toward pan-African financial infrastructure' },
  ],
};

// ---- Section 02: The thesis ----
export const thesis = {
  eyebrow: 'The thesis',
  headline: 'Africa\'s constraint has never been a shortage of capital.',
  paragraphs: [
    'Every major economy that industrialised, from Germany to South Korea to South Africa, was built on a domestic institution that gathered idle capital and directed it toward long-term enterprise that private markets alone would not fund.',
    'African wealth still defaults to foreign vehicles, because no trusted domestic institution has proven it can do better. Nomad Ventures exists to close that trust gap.',
  ],
  precedentsHeading: 'We draw on two African precedents',
  precedents: [
    { scale: 'State scale', title: 'The Mali Empire', body: 'The fiscal discipline of an empire that ran its treasury well.' }, // DRAFT body
    {
      scale: 'Grassroots scale',
      title: 'ROSCAs, chamas and stokvels',
      body: 'The trust-based capital pooling that communities across the continent already run.', // DRAFT body
    },
  ],
};

// ---- Section 03: Track record ----
export const trackRecord = {
  eyebrow: 'Where we began',
  headline: 'The thesis was proven before the company existed.',
  paragraphs: [
    'In 2022, Alvin started Growth Capital Investments, a savings cooperative built to ease the capital-raising struggles he faced as an entrepreneur. It grew through small, disciplined contributions.',
    'As the model outgrew informal governance, it was deliberately wound down and rebuilt as Nomad Ventures, with real fund structure and fiduciary discipline from the outset.',
  ],
  // The large figures beside the story
  figures: [
    { value: '2022', label: 'Growth Capital Investments founded' },
    { value: '22', label: 'Members, up from 6 at the start' },
    { value: '$5,000+', label: 'Pooled in the first year' },
  ],
};

// ---- Section 04: What we do ----
// `page` is where each pillar's link goes: 'home', 'vision', 'fund' or 'credit'.
// `section` (optional) jumps to a part of that page.
export const pillars = {
  eyebrow: 'What we do',
  headline: 'Three pillars, one route.', // DRAFT
  items: [
    {
      title: 'Wealth stewardship',
      body: 'Portfolio structuring, succession planning and asset management for African families and individuals.',
      link: { label: 'Portfolio advisory', page: 'home', section: 'advisory' },
    },
    {
      title: 'Capital formation',
      body: 'A fund structure pooling believer capital into audited, sector-proven African deployments.',
      link: { label: 'Nomad Fund', page: 'fund' },
    },
    {
      title: 'Institution building',
      body: 'A long-term path toward banking, credit and financial infrastructure serving African businesses.',
      link: { label: 'Credit', page: 'credit' },
    },
  ],
};

// ---- Section 05: Growth path ----
export const route = {
  eyebrow: 'The route ahead',
  headline: 'From capital formation to a pan-African institution.', // DRAFT
  phases: [
    {
      stage: 'Now',
      title: 'Capital formation',
      years: '0 to 3 years',
      body: 'Fund-structured deployment into proven African sectors.',
      items: [
        'Portfolio and asset structuring for African families and individuals',
        'Succession and governance advisory: family constitutions, bloodline structures and dispute resolution',
        'Nomad Capital Fund I, a pooled, GP-managed vehicle for believer-capital investors',
        'Direct sector co-investment in agribusiness, export trade and real assets',
        'Simpler asset management for families running several ventures at once',
      ],
    },
    {
      stage: 'Next',
      title: 'Track record to institutional capital',
      years: '3 to 7 years',
      body: 'Audited returns unlock blended finance from development finance institutions (DFIs).',
      items: [
        'Blended finance structuring to attract DFI co-investment',
        'Institutional advisory for businesses and cooperatives seeking a formal capital-raising structure',
      ],
    },
    {
      stage: 'Later',
      title: 'Pan-African deployment',
      years: '7 to 15 years',
      body: 'Cross-border project finance and the wider banking and conglomerate ambition.',
      items: [
        'Banking and credit infrastructure',
        'Cross-border project finance',
        'Correspondent and payments rails for pan-African trade',
      ],
    },
  ],
};

// ---- Closing band ----
export const cta = {
  headline: 'Walk the route with us.', // DRAFT
  body: 'Start with a clear view of what you hold, or register your interest in the Fund.', // DRAFT
  primaryButton: 'Get the app',
  secondaryButton: 'Register interest in the Fund',
};
