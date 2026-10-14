import { useEffect, useState } from 'react';
import Button from '../components/ds/Button';
import NomadLogo from '../components/ds/NomadLogo';
import { menu } from '../content/site';
import { contactHref, pageHref, PAGES } from './links';
import { gutter } from './layout';
import { TextLink } from './ui';

// Matches the breakpoint in global.css where the inline menu gives way to the menu button.
const MOBILE_NAV = '(max-width: 899px)';

function MenuIcon({ open }) {
  const line = (y, rotate) => ({
    position: 'absolute',
    left: 0,
    top: y,
    width: 20,
    height: 1.5,
    background: 'var(--ink-green)',
    transform: rotate,
    transition: 'transform var(--dur-base) var(--ease-standard), opacity var(--dur-fast) var(--ease-standard)',
  });
  return (
    <span aria-hidden="true" style={{ position: 'relative', display: 'block', width: 20, height: 14 }}>
      <span style={line(0, open ? 'translateY(6.25px) rotate(45deg)' : 'none')} />
      <span style={{ ...line(6.25, 'none'), opacity: open ? 0 : 1 }} />
      <span style={line(12.5, open ? 'translateY(-6.25px) rotate(-45deg)' : 'none')} />
    </span>
  );
}

/**
 * Sticky site header: Nomad Group wordmark, a link to each page, and "Get the app".
 * `current` is the page being shown. On the home page `onGetApp` scrolls to the form
 * in place; elsewhere the button links to it.
 */
export default function Header({ current, onGetApp }) {
  const [open, setOpen] = useState(false);

  // Close the menu on Escape, and when the viewport widens past the mobile breakpoint.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia(MOBILE_NAV);
    const onChange = (e) => !e.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, [open]);

  const getApp = onGetApp
    ? {
        onClick: (e) => {
          e.preventDefault();
          setOpen(false);
          onGetApp();
        },
      }
    : {};
  const getAppHref = contactHref(current, 'app');

  return (
    <header
      style={{
        position: 'sticky',
        top: 'env(safe-area-inset-top, 0px)',
        zIndex: 20,
        background: 'rgba(245,238,226,0.95)',
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div
        data-header-bar
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: `12px ${gutter}`,
          minHeight: 76,
          boxSizing: 'border-box',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px 24px',
        }}
      >
        <a href={pageHref('home', current)} aria-label="Nomad Group, home" style={{ display: 'flex', textDecoration: 'none' }}>
          <NomadLogo brand="group" layout="wordmark" size={15} />
        </a>
        <nav className="nav-inline" aria-label="Main" style={{ alignItems: 'center', gap: '12px clamp(14px, 2.2vw, 30px)' }}>
          {PAGES.map((page) => (
            <TextLink
              key={page}
              href={pageHref(page, current)}
              active={page === current}
              color="var(--text-body)"
              hoverColor="var(--ink-green)"
              style={{
                padding: '6px 0',
                fontWeight: 500,
                borderBottom: `1px solid ${page === current ? 'var(--ochre-gold)' : 'transparent'}`,
              }}
            >
              {menu[page]}
            </TextLink>
          ))}
          <Button variant="primary" size="sm" href={getAppHref} {...getApp}>
            {menu.getApp}
          </Button>
        </nav>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            marginRight: -12,
            background: 'none',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
          }}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <div className="nav-panel" data-open={open}>
        <nav id="mobile-menu" aria-label="Main" inert={!open} style={{ overflow: 'hidden', minHeight: 0 }}>
          <div style={{ padding: `4px ${gutter} 24px`, borderTop: '1px solid var(--border-default)' }}>
            {PAGES.map((page) => (
              <a
                key={page}
                href={pageHref(page, current)}
                aria-current={page === current ? 'page' : undefined}
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '18px 0',
                  borderBottom: '1px solid var(--border-default)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-green)',
                }}
              >
                {menu[page]}
                {page === current && (
                  <span
                    aria-hidden="true"
                    style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ochre-gold)' }}
                  />
                )}
              </a>
            ))}
            <div style={{ marginTop: 22 }}>
              <Button variant="primary" full href={getAppHref} {...getApp}>
                {menu.getApp}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
