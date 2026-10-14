import NomadLogo from '../components/ds/NomadLogo';
import { footer, menu } from '../content/site';
import { pageHref, PAGES } from './links';
import { wrap } from './layout';
import { TextLink } from './ui';

/** Site footer. `note` adds a page-specific line under the shared disclaimer. */
export default function Footer({ current, note }) {
  return (
    <footer style={{ background: 'var(--ink-green)', padding: '56px 0 40px' }}>
      <div style={wrap}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 36 }}>
          <div>
            <NomadLogo brand="group" layout="horizontal" theme="ink" size={15} />
            <div style={{ fontSize: 12, letterSpacing: '0.04em', color: 'var(--sage-400)', marginTop: 20 }}>
              {footer.tagline}
            </div>
          </div>
          <nav aria-label="Footer" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 28px', alignItems: 'center' }}>
            {PAGES.map((page) => (
              <TextLink
                key={page}
                href={pageHref(page, current)}
                active={page === current}
                color="var(--sage-400)"
                hoverColor="var(--sage-200)"
              >
                {menu[page]}
              </TextLink>
            ))}
            <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage-400)' }}>
              {footer.copyright}
            </span>
          </nav>
        </div>
        <div
          style={{
            margin: '36px 0 0',
            paddingTop: 20,
            borderTop: '1px solid rgba(201,138,43,0.28)',
            maxWidth: 820,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {[footer.disclaimer, note].filter(Boolean).map((text) => (
            <p key={text} style={{ fontSize: 11, lineHeight: 1.7, color: 'var(--sage-400)', margin: 0 }}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
