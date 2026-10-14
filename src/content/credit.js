/**
 * All the words on the Credit page, in the order they appear.
 * Credit is not offered yet: this page describes what is planned and collects a
 * waitlist. Keep it that way until products, rates and eligibility are final.
 * Lines marked DRAFT were written for the site and need confirming.
 *
 * Edit the text between the quotes and save. Keep the quotes, commas and
 * brackets as they are. To use an apostrophe inside a 'single-quoted' line,
 * write it as \' (for example 'group\'s'). Lists can grow or shrink by copying
 * or deleting a whole { ... } block or line.
 *
 * The browser-tab title and search-engine description live in credit/index.html.
 */

// ---- Hero ----
export const hero = {
  eyebrow: 'Nomad Credit',
  badge: 'Coming soon',
  headline: 'Credit that starts with what you have saved.', // DRAFT
  intro:
    'We are building credit into the Nomad App for members who save with us. It is not available yet. Join the waitlist and we will tell you first.',
  primaryButton: 'Join the waitlist',
  secondaryButton: 'Get the app',
};

// ---- Section 01: Planned products ----
export const products = {
  eyebrow: 'Planned products',
  headline: 'Simple credit, built for members.', // DRAFT
  intro: 'The first products we are planning. Amounts, rates and eligibility will be set out in full before launch.',
  badge: 'Planned',
  items: [
    { name: 'Savings-backed loans', body: 'Short-term loans for members, secured against the savings they hold with Nomad.' }, // DRAFT
    {
      name: 'Business working capital',
      body: 'Short-term credit for traders, farmers and small businesses to buy stock and inputs ahead of sales.', // DRAFT
    },
    {
      name: 'Group credit',
      body: 'Loans to savings groups that already save together in the Nomad App, backed by the group\'s record.', // DRAFT
    },
  ],
};

// ---- Section 02: How it will work ----
export const how = {
  eyebrow: 'How it will work',
  headline: 'Everything happens in the app.', // DRAFT
  steps: [
    { title: 'Save', body: 'Build a savings record in the Nomad App.' },
    { title: 'Apply', body: 'Apply in the app when credit opens to members.' },
    { title: 'Assessment', body: 'Your savings history forms part of the assessment.' }, // DRAFT
    { title: 'Repay', body: 'Repay in the app and see every repayment as it lands.' },
  ],
  // The card about what the app does today
  todayHeading: 'Already lending or borrowing?',
  todayBody:
    'The Nomad App can already keep a record of money you have lent to or borrowed from people outside Nomad, with every repayment, so you always know what is owed.',
};

// ---- Closing band ----
export const cta = {
  headline: 'Be first in line.', // DRAFT
  body: 'Join the waitlist and we will contact you when credit opens.',
  button: 'Join the waitlist',
};

// Shown in the footer on this page, under the shared disclaimer.
export const pageNote =
  'Nomad does not offer credit yet. Nothing on this page is an offer of credit. Products, eligibility, rates and terms will be confirmed before launch.';
