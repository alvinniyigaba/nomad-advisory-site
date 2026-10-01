import { useEffect, useRef, useState } from 'react';
import Button from './components/ds/Button';
import Card from './components/ds/Card';
import Eyebrow from './components/ds/Eyebrow';
import Field from './components/ds/Field';
import NomadLogo from './components/ds/NomadLogo';
import RouteDivider from './components/ds/RouteDivider';
import TerrainPattern from './components/ds/TerrainPattern';
import { AccountsScreen, AllocationScreen, GoalsScreen, OverviewScreen, PhoneFrame } from './landing/PhoneMockups';

/**
 * Public marketing page for the Nomad App, with Portfolio Advisory as the
 * secondary product (branded Nomad Advisory). Built from the Claude Design
 * handoff `Nomad App Landing.dc.html`.
 */

// Dark anchor for the hero and advisory bands: 'ink-green' | 'terrain-black' | 'deep-moss'.
const ANCHOR = 'ink-green';
// Currency shown in the illustrative app mockups.
const CURRENCY = 'USD';

const APP = 'The Nomad App';
const ADVISORY = 'Portfolio advisory';

const gutter = 'clamp(20px, 4vw, 48px)';
const wrap = { maxWidth: 1200, margin: '0 auto', padding: `0 ${gutter}` };
const upperLabel = { fontSize: 10, fontWeight: 600, letterSpacing: '0.26em', textTransform: 'uppercase' };

const FEATURES = [
  {
    id: 'accounts',
    num: 'I',
    title: 'Every account, one view',
    body: 'Link brokerage, pension, savings and money-market accounts. One balance, kept current.',
  },
  {
    id: 'allocation',
    num: 'II',
    title: 'Know where you stand',
    body: 'See how your wealth is spread across asset classes and markets — and where it has drifted.',
  },
  {
    id: 'goals',
    num: 'III',
    title: 'Save towards what matters',
    body: 'Set goals, fund them from any account, and watch the distance close.',
  },
];

const STEPS = [
  ['01', 'Reading the country', 'A conversation about where you are, what you hold and where you want to be.'],
  ['02', 'Drawing the route', 'A written portfolio plan — allocation, instruments and the reasoning behind each.'],
  ['03', 'Setting out', 'We help you open the accounts and put the plan in place.'],
  ['04', 'Staying on course', 'Your advised portfolio lives in the Nomad App, reviewed with you as life moves.'],
];

const INCLUDED = [
  'A dedicated adviser from first conversation onwards',
  'A written portfolio plan you keep',
  'Help with account opening and set-up',
  'Scheduled reviews, tracked in the app',
];

function TextButton({ onClick, color, hoverColor, style, children }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: hover ? hoverColor : color,
        transition: 'color 140ms',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

const NAV_LINKS = [
  ['The App', 'app'],
  ['Portfolio Advisory', 'advisory'],
];

// Matches the breakpoint in global.css where the inline nav gives way to the menu button.
const MOBILE_NAV = '(max-width: 719px)';

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

function Header({ go, pickApp }) {
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

  const choose = (action) => () => {
    setOpen(false);
    action();
  };

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
        <button
          type="button"
          onClick={() => go('top')}
          aria-label="Back to top"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex' }}
        >
          <NomadLogo brand="advisory" layout="wordmark" size={15} />
        </button>
        <nav
          className="nav-inline"
          aria-label="Main"
          style={{ alignItems: 'center', gap: '12px clamp(14px, 2.4vw, 30px)' }}
        >
          {NAV_LINKS.map(([text, id]) => (
            <TextButton
              key={id}
              onClick={() => go(id)}
              color="var(--text-body)"
              hoverColor="var(--ink-green)"
              style={{ padding: '6px 0', fontWeight: 500 }}
            >
              {text}
            </TextButton>
          ))}
          <Button variant="primary" size="sm" onClick={pickApp}>
            Get the app
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
        <nav
          id="mobile-menu"
          aria-label="Main"
          inert={!open}
          style={{ overflow: 'hidden', minHeight: 0 }}
        >
          <div style={{ padding: `4px ${gutter} 24px`, borderTop: '1px solid var(--border-default)' }}>
            {NAV_LINKS.map(([text, id]) => (
              <button
                key={id}
                type="button"
                onClick={choose(() => go(id))}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '18px 0',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid var(--border-default)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-green)',
                }}
              >
                {text}
              </button>
            ))}
            <div style={{ marginTop: 22 }}>
              <Button variant="primary" full onClick={choose(pickApp)}>
                Get the app
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function AnchorBand({ id, children, style }) {
  return (
    <section id={id} style={{ position: 'relative', background: `var(--${ANCHOR})`, overflow: 'hidden', ...style }}>
      {children}
    </section>
  );
}

function Hero({ go, pickApp }) {
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
        <div style={{ flex: '1 1 440px', maxWidth: 600, minWidth: 0 }}>
          <Eyebrow theme="ink">The Nomad App · Nomad Advisory</Eyebrow>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(38px, 5vw, 58px)',
              lineHeight: 1.12,
              letterSpacing: '0.03em',
              color: 'var(--sage-200)',
              margin: '24px 0 0',
              textWrap: 'balance',
            }}
          >
            Your whole portfolio, under one roof.
          </h1>
          <p
            style={{
              fontWeight: 300,
              fontSize: 17,
              lineHeight: 1.75,
              color: 'var(--sage-400)',
              maxWidth: 500,
              margin: '24px 0 0',
              textWrap: 'pretty',
            }}
          >
            Investments and savings scattered across institutions, statements and logins — gathered into one clear
            view. The Nomad App shows you the whole terrain, so you can choose the route through it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
            <Button variant="gold" onClick={pickApp}>
              Get the app
            </Button>
            <Button variant="outline" theme="ink" onClick={() => go('advisory')}>
              Explore portfolio advisory
            </Button>
          </div>
        </div>
        <PhoneFrame goldEdge>
          <OverviewScreen currency={CURRENCY} />
        </PhoneFrame>
      </div>
    </AnchorBand>
  );
}

function FeatureButton({ feature, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      style={{
        textAlign: 'left',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        padding: '24px 26px',
        borderRadius: 8,
        transition: 'background 220ms, border-color 220ms, box-shadow 220ms',
        background: active ? 'var(--surface-card)' : 'transparent',
        border: `1px solid ${active ? 'var(--border-default)' : 'transparent'}`,
        boxShadow: active ? 'var(--shadow-md)' : 'none',
      }}
    >
      <div style={{ display: 'flex', gap: 18, alignItems: 'baseline' }}>
        <span
          style={{
            width: 30,
            flexShrink: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 13,
            letterSpacing: '0.16em',
            color: 'var(--ochre-gold)',
          }}
        >
          {feature.num}
        </span>
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--ink-green)',
            }}
          >
            {feature.title}
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-body)', marginTop: 8 }}>{feature.body}</div>
        </div>
      </div>
    </button>
  );
}

function AppSection() {
  const [tab, setTab] = useState('accounts');
  return (
    <section id="app" style={{ background: 'var(--bone)', padding: 'clamp(64px, 8vw, 96px) 0' }}>
      <div style={wrap}>
        <Eyebrow number="01">The Nomad App</Eyebrow>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 56px', marginTop: 26, alignItems: 'flex-end' }}>
          <h2
            style={{
              flex: '1 1 420px',
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(28px, 3.2vw, 36px)',
              lineHeight: 1.28,
              color: 'var(--text-heading)',
              margin: 0,
              textWrap: 'balance',
            }}
          >
            One map for everything you hold.
          </h2>
          <p style={{ flex: '1 1 380px', fontSize: 15, lineHeight: 1.75, margin: 0, maxWidth: 460, textWrap: 'pretty' }}>
            Most people cannot say, at a glance, what they own or how it is spread. The Nomad App answers both — and
            keeps answering as your wealth grows.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center', marginTop: 56 }}>
          <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FEATURES.map((f) => (
              <FeatureButton key={f.id} feature={f} active={tab === f.id} onSelect={() => setTab(f.id)} />
            ))}
          </div>
          <PhoneFrame>
            {tab === 'accounts' && <AccountsScreen />}
            {tab === 'allocation' && <AllocationScreen currency={CURRENCY} />}
            {tab === 'goals' && <GoalsScreen currency={CURRENCY} />}
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}

function AdvisorySection({ pickAdvisory }) {
  return (
    <AnchorBand id="advisory" style={{ padding: 'clamp(72px, 9vw, 108px) 0' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <TerrainPattern theme="ink" width={1360} height={760} contourOpacity={0.08} showRoute={false} />
      </div>
      <div style={{ ...wrap, position: 'relative' }}>
        <Eyebrow number="02" theme="ink">
          Portfolio Advisory
        </Eyebrow>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, marginTop: 26, alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 460px', minWidth: 0 }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(28px, 3.2vw, 38px)',
                lineHeight: 1.26,
                color: 'var(--sage-200)',
                margin: 0,
                textWrap: 'balance',
              }}
            >
              When the terrain calls for a guide.
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: 'var(--sage-400)',
                margin: '20px 0 0',
                maxWidth: 520,
                textWrap: 'pretty',
              }}
            >
              Seeing your wealth clearly is the first step. Arranging it well is the next. Our advisers help you build
              an investment portfolio around your goals, horizon and appetite for risk — for a clear, agreed fee.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
                gap: '28px 32px',
                marginTop: 44,
              }}
            >
              {STEPS.map(([num, title, body]) => (
                <div key={num} style={{ borderTop: '1px dashed rgba(201,138,43,0.55)', paddingTop: 20 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 13,
                      letterSpacing: '0.16em',
                      color: 'var(--ochre-soft)',
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 12,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--sage-200)',
                      marginTop: 12,
                    }}
                  >
                    {title}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--sage-400)', margin: '8px 0 0' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: '1 1 340px', minWidth: 0, maxWidth: 440 }}>
            <Card variant="ink" padding={34} style={{ background: 'rgba(27,63,60,0.94)' }}>
              <div style={{ ...upperLabel, color: 'var(--ochre-soft)' }}>What is included</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22, color: 'var(--sage-200)' }}>
                {INCLUDED.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        border: '1.5px solid var(--ochre-gold)',
                        borderRadius: '50%',
                        flexShrink: 0,
                        marginTop: 6,
                        boxSizing: 'content-box',
                      }}
                    />
                    <span style={{ fontSize: 14, lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 26, paddingTop: 20, borderTop: '1px solid rgba(201,138,43,0.28)' }}>
                <div style={{ ...upperLabel, color: 'var(--sage-400)' }}>Fee</div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--sage-200)', margin: '8px 0 0' }}>
                  Agreed in writing before any work begins. No hidden commissions.
                </p>
              </div>
              <div style={{ marginTop: 26 }}>
                <Button variant="gold" onClick={pickAdvisory}>
                  Book a consultation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AnchorBand>
  );
}

function InterestChip({ label, on, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={on}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        padding: '10px 16px',
        borderRadius: 4,
        cursor: 'pointer',
        transition: 'background 140ms, color 140ms, border-color 140ms',
        background: on ? 'var(--ink-green)' : 'transparent',
        color: on ? 'var(--sage-200)' : 'var(--text-body)',
        border: `1px solid ${on ? 'var(--ink-green)' : 'var(--border-default)'}`,
      }}
    >
      {label}
    </button>
  );
}

function ContactSection({ picked, setPicked, sent, setSent }) {
  const toggle = (label) =>
    setPicked((p) => (p.includes(label) ? p.filter((x) => x !== label) : [...p, label]));

  // No lead-capture backend yet: submitting only shows the confirmation state.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const sentMsg = picked.includes(ADVISORY)
    ? 'An adviser will be in touch to arrange your first conversation.'
    : 'We will be in touch with your access to the Nomad App.';

  return (
    <section id="contact" style={{ background: 'var(--bone-warm)', padding: 'clamp(64px, 8vw, 96px) 0' }}>
      <div style={{ ...wrap, display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 360px', minWidth: 0 }}>
          <Eyebrow number="03">Get started</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(28px, 3.2vw, 36px)',
              lineHeight: 1.28,
              color: 'var(--text-heading)',
              margin: '26px 0 16px',
              textWrap: 'balance',
            }}
          >
            Begin with a clear view.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, maxWidth: 420, margin: 0, textWrap: 'pretty' }}>
            Request access to the Nomad App, book a portfolio consultation, or both. An adviser will be in touch.
          </p>
          <div style={{ marginTop: 36, maxWidth: 360 }}>
            <RouteDivider variant="straight" width={360} />
          </div>
        </div>
        <div style={{ flex: '1 1 460px', minWidth: 0 }}>
          <Card variant="light" padding={34}>
            {sent ? (
              <div style={{ padding: '24px 4px' }}>
                <div
                  style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--ink-green)', marginBottom: 12 }}
                >
                  Thank you.
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, margin: '0 0 22px' }}>{sentMsg}</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSent(false);
                    setPicked([]);
                  }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: 10,
                    }}
                  >
                    I am interested in
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {[APP, ADVISORY].map((label) => (
                      <InterestChip key={label} label={label} on={picked.includes(label)} onToggle={() => toggle(label)} />
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                    gap: 18,
                  }}
                >
                  <Field label="Full name" name="name" autoComplete="name" placeholder="Amara Okonkwo" />
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" placeholder="+254 700 000 000" />
                </div>
                <Field label="Email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
                <Field
                  label="Anything we should know"
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder="What you hold today, and what you are working towards."
                />
                <div>
                  <Button variant="primary" type="submit">
                    Send
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ background: 'var(--ink-green)', padding: '56px 0 40px' }}>
      <div style={wrap}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 36,
          }}
        >
          <div>
            <NomadLogo brand="advisory" layout="horizontal" theme="ink" size={15} />
            <div style={{ fontSize: 12, letterSpacing: '0.04em', color: 'var(--sage-400)', marginTop: 20 }}>
              A Nomad Group practice · Nomad Ventures LLP
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center' }}>
            <TextButton onClick={() => go('app')} color="var(--sage-400)" hoverColor="var(--sage-200)" style={{ padding: 0 }}>
              The App
            </TextButton>
            <TextButton
              onClick={() => go('advisory')}
              color="var(--sage-400)"
              hoverColor="var(--sage-200)"
              style={{ padding: 0 }}
            >
              Portfolio Advisory
            </TextButton>
            <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage-400)' }}>
              © 2026 Nomad Group
            </span>
          </div>
        </div>
        <p
          style={{
            fontSize: 11,
            lineHeight: 1.7,
            color: 'var(--sage-400)',
            margin: '36px 0 0',
            paddingTop: 20,
            borderTop: '1px solid rgba(201,138,43,0.28)',
            maxWidth: 820,
          }}
        >
          The value of investments can go down as well as up. Figures shown in the app are illustrative. Regulatory
          disclosures to be confirmed.
        </p>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  const [picked, setPicked] = useState([]);
  const [sent, setSent] = useState(false);
  const rootRef = useRef(null);

  const go = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    // Offset by the header bar alone (plus its 1px border). An open mobile menu is
    // collapsing as we scroll, and the header sits in the page flow, so everything
    // below it will move up by the panel's current height.
    const header = rootRef.current?.querySelector('header');
    const bar = header?.querySelector('[data-header-bar]');
    const offset = bar ? bar.offsetHeight + 1 : 77;
    const collapsing = header && bar ? header.offsetHeight - offset : 0;
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset - collapsing, behavior: 'smooth' });
    }
  };
  const pick = (label) => () => {
    setPicked([label]);
    setSent(false);
    go('contact');
  };

  return (
    <div
      ref={rootRef}
      style={{ fontFamily: 'var(--font-sans)', background: 'var(--bone)', color: 'var(--text-body)', minHeight: '100vh' }}
    >
      <Header go={go} pickApp={pick(APP)} />
      <Hero go={go} pickApp={pick(APP)} />
      <AppSection />
      <AdvisorySection pickAdvisory={pick(ADVISORY)} />
      <ContactSection picked={picked} setPicked={setPicked} sent={sent} setSent={setSent} />
      <Footer go={go} />
    </div>
  );
}
