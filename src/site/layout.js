/** Layout constants and helpers shared by every page. */

// Dark anchor for the hero and dark bands: 'ink-green' | 'terrain-black' | 'deep-moss'.
export const ANCHOR = 'ink-green';

export const gutter = 'clamp(20px, 4vw, 48px)';
export const wrap = { maxWidth: 1200, margin: '0 auto', padding: `0 ${gutter}` };
export const upperLabel = { fontSize: 10, fontWeight: 600, letterSpacing: '0.26em', textTransform: 'uppercase' };
export const sectionPadding = 'clamp(64px, 8vw, 96px) 0';

export const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
export const twoDigits = (i) => String(i + 1).padStart(2, '0');

/**
 * Smooth-scroll to a section, landing it just below the sticky header bar. An open
 * mobile menu is collapsing as we scroll, and the header sits in the page flow, so
 * everything below it will move up by the panel's current height.
 */
export function scrollToSection(id, smooth = true) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector('header');
  const bar = header?.querySelector('[data-header-bar]');
  const offset = bar ? bar.offsetHeight + 1 : 77;
  const collapsing = header && bar ? header.offsetHeight - offset : 0;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset - collapsing,
    behavior: smooth ? 'smooth' : 'auto',
  });
}

const onInk = (theme) => theme === 'ink';

export const h2Style = (theme) => ({
  fontFamily: 'var(--font-display)',
  fontWeight: 400,
  fontSize: 'clamp(28px, 3.2vw, 36px)',
  lineHeight: 1.28,
  color: onInk(theme) ? 'var(--sage-200)' : 'var(--text-heading)',
  margin: 0,
  textWrap: 'balance',
});

export const bodyStyle = (theme) => ({
  fontSize: 15,
  lineHeight: 1.75,
  margin: 0,
  color: onInk(theme) ? 'var(--sage-400)' : 'var(--text-body)',
  textWrap: 'pretty',
});
