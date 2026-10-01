/**
 * All the words on the landing page, in the order they appear.
 *
 * Edit the text between the quotes and save. Keep the quotes, commas and
 * brackets as they are. To use an apostrophe inside a 'single-quoted' line,
 * write it as \' (for example 'We\'ll be in touch').
 *
 * Lists (features, steps, included items, accounts, goals) can grow or shrink:
 * copy or delete a whole { ... } block or line. Their numbering (I, II, III and
 * 01, 02, 03 ...) is worked out from the order, so it stays correct.
 *
 * The browser-tab title and search-engine description live in index.html.
 */

// ---- Header menu (also used in the footer) ----
export const nav = {
  app: 'The App',
  advisory: 'Portfolio Advisory',
  getApp: 'Get the app',
};

// ---- Hero: the dark band at the top ----
export const hero = {
  
  headline: 'Your whole portfolio, under one roof.',
  intro:
    'Investments and savings scattered across institutions, statements and logins now gathered into one clear view. The Nomad App shows you the whole terrain, so you can choose the route through it.',
  primaryButton: 'Get the app',
  secondaryButton: 'Explore portfolio advisory',
};

// ---- Section 01: The Nomad App ----
export const app = {
  eyebrow: 'The Nomad App',
  headline: 'One map for everything you hold.',
  intro:
    'Most people cannot say, at a glance, what they own or how it is spread. The Nomad App answers both and keeps answering as your wealth grows.',
  // Each feature switches the phone screen beside it. The `screen` value picks
  // which phone screen goes with it: 'accounts', 'allocation' or 'goals'.
  features: [
    {
      screen: 'accounts',
      title: 'Every account, one view',
      body: 'Link brokerage, pension, savings and money-market accounts. One balance, kept current.',
    },
    {
      screen: 'allocation',
      title: 'Know where you stand',
      body: 'See how your wealth is spread across asset classes and markets — and where it has drifted.',
    },
    {
      screen: 'goals',
      title: 'Save towards what matters',
      body: 'Set goals, fund them from any account, and watch the distance close.',
    },
  ],
};

// ---- Section 02: Portfolio Advisory ----
export const advisory = {
  eyebrow: 'Portfolio Advisory',
  headline: 'When the terrain calls for a guide.',
  intro:
    'Seeing your wealth clearly is the first step. Arranging it well is the next. Our advisers help you build an investment portfolio around your goals, horizon and appetite for risk — for a clear, agreed fee.',
  steps: [
    {
      title: 'Reading the country',
      body: 'A conversation about where you are, what you hold and where you want to be.',
    },
    {
      title: 'Drawing the route',
      body: 'A written portfolio plan allocation, instruments and the reasoning behind each.',
    },
    {
      title: 'Setting out',
      body: 'We help you open the accounts and put the plan in place.',
    },
    {
      title: 'Staying on course',
      body: 'Your advised portfolio lives in the Nomad App, reviewed with you as life moves.',
    },
  ],
  // The card on the right
  includedHeading: 'What is included',
  included: [
    'A dedicated adviser from first conversation onwards',
    'A written portfolio plan you keep',
    'Help with account opening and set-up',
    'Scheduled reviews, tracked in the app',
  ],
  feeHeading: 'Fee',
  fee: 'Agreed in writing before any work begins. No hidden commissions.',
  button: 'Book a consultation',
};

// ---- Section 03: Get started (the form) ----
export const contact = {
  eyebrow: 'Get started',
  headline: 'Begin with a clear view.',
  intro: 'Request access to the Nomad App, book a portfolio consultation, or both. An adviser will be in touch.',
  interestsLabel: 'I am interested in',
  interests: {
    app: 'The Nomad App',
    advisory: 'Portfolio advisory',
  },
  fields: {
    name: { label: 'Full name', placeholder: 'Amara Okonkwo' },
    phone: { label: 'Phone', placeholder: '+256 700 000 000' },
    email: { label: 'Email', placeholder: 'you@example.com' },
    message: { label: 'Anything we should know', placeholder: 'What you hold today, and what you are working towards.' },
  },
  sendButton: 'Send',
  // Shown after sending
  thanksHeading: 'Thank you.',
  thanksAdvisory: 'An adviser will be in touch to arrange your first conversation.', // if "Portfolio advisory" was picked
  thanksApp: 'We will be in touch with your access to the Nomad App.', // otherwise
  sendAnotherButton: 'Send another',
};

// ---- Footer ----
export const footer = {
  tagline: 'A Nomad Group practice · Nomad Ventures LLP',
  copyright: '© 2026 Nomad Group',
  disclaimer:
    'The value of investments can go down as well as up. Figures shown in the app are illustrative. Regulatory disclosures to be confirmed.',
};

// ---- Phone mockups: illustrative figures only, not real data ----
// Amounts are shown after the currency set at the top of LandingPage.jsx where a
// currency appears (e.g. "USD 248,310").
export const mockups = {
  // Hero phone
  overview: {
    initials: 'AO',
    greeting: 'Good morning, Amara',
    totalLabel: 'Total portfolio',
    total: '248,310',
    change: '+2.4% this month',
    allocationLabel: 'Allocation',
    allocation: [
      { name: 'Equities', percent: 46 },
      { name: 'Fixed income', percent: 24 },
      { name: 'Cash', percent: 18 },
      { name: 'Property', percent: 12 },
    ],
    accountsLabel: 'Accounts',
    accounts: [
      { name: 'Equities portfolio', type: 'Brokerage', value: '112,400' },
      { name: 'Money market fund', type: 'Savings', value: '58,210' },
      { name: 'Pension', type: 'Retirement', value: '77,700' },
    ],
  },
  // "Every account, one view" phone
  accounts: {
    title: 'Linked accounts',
    subtitle: '5 accounts · 4 institutions',
    accounts: [
      { name: 'Equities portfolio', type: 'Brokerage · Nairobi', value: '112,400' },
      { name: 'Pension', type: 'Retirement scheme', value: '77,700' },
      { name: 'Money market fund', type: 'Unit trust', value: '58,210' },
      { name: 'Fixed deposit', type: 'Bank · 12 months', value: '30,000' },
      { name: 'Savings', type: 'Bank', value: '12,450' },
    ],
    action: 'Link an account',
  },
  // "Know where you stand" phone
  allocation: {
    title: 'Allocation',
    subtitle: '290,760 across 4 asset classes', // shown after the currency
    classes: [
      { name: 'Equities', percent: 46 },
      { name: 'Fixed income', percent: 24 },
      { name: 'Cash and savings', percent: 18 },
      { name: 'Property', percent: 12 },
    ],
    marketsLabel: 'By market',
    markets: [
      { name: 'Local', percent: 62 },
      { name: 'Offshore', percent: 38 },
    ],
    note: 'Equities have drifted 6% above your target. Review with an adviser.',
  },
  // "Save towards what matters" phone
  goals: {
    title: 'Goals',
    subtitle: '3 goals on track',
    goals: [
      { name: 'Home deposit', percent: 62, detail: '37,200 of 60,000 · 2028' }, // detail shown after the currency
      { name: 'Education fund', percent: 38, detail: '19,000 of 50,000 · 2032' },
      { name: 'Emergency reserve', percent: 90, detail: '10,800 of 12,000' },
    ],
    action: 'Set a new goal',
  },
};
