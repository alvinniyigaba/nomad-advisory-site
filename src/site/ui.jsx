import { useState } from 'react';
import Badge from '../components/ds/Badge';
import Card from '../components/ds/Card';
import Eyebrow from '../components/ds/Eyebrow';
import TerrainPattern from '../components/ds/TerrainPattern';
import { ANCHOR, bodyStyle, gutter, h2Style, sectionPadding, twoDigits, upperLabel, wrap } from './layout';

/** Layout components shared by every page. Constants and helpers live in layout.js. */

const onInk = (theme) => theme === 'ink';

/** Small uppercase text link with a hover colour, used in the header and footer. */
export function TextLink({ href, onClick, color, hoverColor, active = false, style, children }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: hover || active ? hoverColor : color,
        transition: 'color 140ms',
        ...style,
      }}
    >
      {children}
    </a>
  );
}

/** Full-bleed dark band in the anchor colour. */
export function AnchorBand({ id, children, style }) {
  return (
    <section id={id} style={{ position: 'relative', background: `var(--${ANCHOR})`, overflow: 'hidden', ...style }}>
      {children}
    </section>
  );
}

/** A light section: 'bone' (the page ground) or 'warm' (slightly raised). */
export function Section({ id, tone = 'bone', children, style }) {
  return (
    <section
      id={id}
      style={{ background: tone === 'warm' ? 'var(--bone-warm)' : 'var(--bone)', padding: sectionPadding, ...style }}
    >
      <div style={wrap}>{children}</div>
    </section>
  );
}

/**
 * Numbered eyebrow, then the section headline. `split` puts the intro beside the
 * headline on wide screens; otherwise it sits underneath.
 */
export function SectionHead({ number, eyebrow, title, intro, theme = 'light', split = false }) {
  return (
    <div>
      <Eyebrow number={number} theme={theme}>
        {eyebrow}
      </Eyebrow>
      {split ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 56px', marginTop: 26, alignItems: 'flex-end' }}>
          <h2 style={{ ...h2Style(theme), flex: '1 1 420px' }}>{title}</h2>
          {intro && <p style={{ ...bodyStyle(theme), flex: '1 1 380px', maxWidth: 460 }}>{intro}</p>}
        </div>
      ) : (
        <>
          <h2 style={{ ...h2Style(theme), marginTop: 26, maxWidth: 760 }}>{title}</h2>
          {intro && <p style={{ ...bodyStyle(theme), marginTop: 20, maxWidth: 560 }}>{intro}</p>}
        </>
      )}
    </div>
  );
}

/** The dark opening band of a page, with the terrain pattern on the right. */
export function PageHero({ eyebrow, badge, title, intro, actions, aside }) {
  return (
    <AnchorBand>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', right: 0 }}>
        <TerrainPattern theme="ink" width={800} height={720} />
      </div>
      <div
        style={{
          position: 'relative',
          maxWidth: 1200,
          margin: '0 auto',
          padding: `clamp(64px, 8vw, 96px) ${gutter}`,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 56,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: '1 1 440px', maxWidth: 640, minWidth: 0 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14 }}>
            {eyebrow && <Eyebrow theme="ink">{eyebrow}</Eyebrow>}
            {badge && <Badge variant="gold">{badge}</Badge>}
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(36px, 4.6vw, 54px)',
              lineHeight: 1.14,
              letterSpacing: '0.03em',
              color: 'var(--sage-200)',
              margin: eyebrow || badge ? '24px 0 0' : 0,
              textWrap: 'balance',
            }}
          >
            {title}
          </h1>
          {intro && (
            <p
              style={{
                fontWeight: 300,
                fontSize: 17,
                lineHeight: 1.75,
                color: 'var(--sage-400)',
                maxWidth: 520,
                margin: '24px 0 0',
                textWrap: 'pretty',
              }}
            >
              {intro}
            </p>
          )}
          {actions && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>{actions}</div>}
        </div>
        {aside}
      </div>
    </AnchorBand>
  );
}

/** Label and value pairs, e.g. company facts or fund terms. */
export function FactList({ facts, theme = 'light' }) {
  const ink = onInk(theme);
  return (
    <dl style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
      {facts.map((f, i) => (
        <div
          key={f.label}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(96px, 30%) 1fr',
            gap: '4px 20px',
            padding: '16px 0',
            borderTop: i === 0 ? 'none' : `1px solid ${ink ? 'rgba(201,138,43,0.28)' : 'var(--border-default)'}`,
          }}
        >
          <dt style={{ ...upperLabel, lineHeight: 1.9, color: ink ? 'var(--ochre-soft)' : 'var(--text-muted)' }}>
            {f.label}
          </dt>
          <dd style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: ink ? 'var(--sage-200)' : 'var(--text-heading)' }}>
            {f.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** A hollow ochre waypoint, the brand's bullet. */
export function Waypoint({ size = 9, style }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        border: '1.5px solid var(--ochre-gold)',
        borderRadius: '50%',
        flexShrink: 0,
        boxSizing: 'content-box',
        display: 'inline-block',
        ...style,
      }}
    />
  );
}

/**
 * Phases along a dashed route line (Now, Next, Later). Each phase can carry a list
 * of what belongs to it. On narrow screens the phases stack.
 */
export function RouteTimeline({ phases, theme = 'light' }) {
  const ink = onInk(theme);
  return (
    <ol
      style={{
        listStyle: 'none',
        margin: '48px 0 0',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '40px 32px',
      }}
    >
      {phases.map((p, i) => (
        <li key={p.title} style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Hollow waypoints along the way; the last one is filled, marking arrival. */}
            <Waypoint size={10} style={i === phases.length - 1 ? { background: 'var(--ochre-gold)' } : undefined} />
            <span style={{ flex: 1, borderTop: '1.5px dashed rgba(201,138,43,0.7)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 20 }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13,
                letterSpacing: '0.16em',
                color: ink ? 'var(--ochre-soft)' : 'var(--ochre-gold)',
              }}
            >
              {twoDigits(i)}
            </span>
            <span style={{ ...upperLabel, color: ink ? 'var(--sage-400)' : 'var(--text-muted)' }}>
              {p.stage} · {p.years}
            </span>
          </div>
          <h3
            style={{
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: ink ? 'var(--sage-200)' : 'var(--ink-green)',
              margin: '12px 0 0',
            }}
          >
            {p.title}
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: '8px 0 0', color: ink ? 'var(--sage-400)' : 'var(--text-body)' }}>
            {p.body}
          </p>
          {p.items?.length > 0 && (
            <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {p.items.map((item) => (
                <li key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Waypoint size={6} style={{ marginTop: 8 }} />
                  <span style={{ fontSize: 13, lineHeight: 1.7, color: ink ? 'var(--sage-200)' : 'var(--text-heading)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Closing band with a headline and buttons, before the footer. */
export function CtaBand({ title, body, actions }) {
  return (
    <AnchorBand style={{ padding: 'clamp(56px, 7vw, 84px) 0' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <TerrainPattern theme="ink" width={1360} height={420} contourOpacity={0.08} showRoute={false} />
      </div>
      <div
        style={{
          ...wrap,
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '28px 56px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: '1 1 420px', minWidth: 0 }}>
          <h2 style={h2Style('ink')}>{title}</h2>
          {body && <p style={{ ...bodyStyle('ink'), marginTop: 14, maxWidth: 520 }}>{body}</p>}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>{actions}</div>
      </div>
    </AnchorBand>
  );
}

/** A card with an uppercase title, used for sectors, pillars and products. */
export function TitledCard({ kicker, title, body, footer, variant = 'light', dashed = false, children }) {
  return (
    <Card
      variant={variant}
      padding={28}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...(dashed ? { background: 'transparent', border: '1px dashed var(--sand-line)', boxShadow: 'none' } : null),
      }}
    >
      {kicker && <div style={{ alignSelf: 'flex-start' }}>{kicker}</div>}
      <h3
        style={{
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: variant === 'ink' ? 'var(--sage-200)' : 'var(--ink-green)',
          margin: kicker ? '16px 0 0' : 0,
        }}
      >
        {title}
      </h3>
      {body && (
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.7,
            margin: '10px 0 0',
            color: variant === 'ink' ? 'var(--sage-400)' : 'var(--text-body)',
          }}
        >
          {body}
        </p>
      )}
      {children}
      {footer && <div style={{ marginTop: 'auto', paddingTop: 22 }}>{footer}</div>}
    </Card>
  );
}

/** Responsive grid of equal cards. */
export function CardGrid({ min = 240, children, style }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`,
        gap: 20,
        marginTop: 48,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
