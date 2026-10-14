// Links between pages are written relative to the current page, so they work both at
// alvinniyigaba.github.io/nomad-advisory-site/ and on a custom domain later.

export const PAGES = ['home', 'vision', 'fund', 'credit'];

// Hosts that don't map folder addresses to their index.html (the claude.ai review copy)
// build with VITE_EXPLICIT_INDEX=1 so links name the file. GitHub Pages doesn't need it.
const INDEX = import.meta.env.VITE_EXPLICIT_INDEX ? 'index.html' : '';

export function pageHref(target, current, { section, interest } = {}) {
  const up = current === 'home' ? './' : '../';
  let href = target === 'home' ? `${up}${INDEX}` : `${up}${target}/${INDEX}`;
  if (interest) href += `?interest=${interest}`;
  if (section) href += `#${section}`;
  return href;
}

// The enquiry form lives on the home page; other pages link to it with an option picked.
export const contactHref = (current, interest) => pageHref('home', current, { section: 'contact', interest });
