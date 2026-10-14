import { useState } from 'react';
import Button from '../components/ds/Button';
import Card from '../components/ds/Card';
import Eyebrow from '../components/ds/Eyebrow';
import Field from '../components/ds/Field';
import RouteDivider from '../components/ds/RouteDivider';
import TerrainPattern from '../components/ds/TerrainPattern';
import { advisory, app, contact, hero, pageNote } from '../content/landing';
import PageShell from '../site/PageShell';
import { gutter, ROMAN, scrollToSection, twoDigits, upperLabel, wrap } from '../site/layout';
import { AnchorBand } from '../site/ui';
import { AccountsScreen, AllocationScreen, GoalsScreen, OverviewScreen, PhoneFrame } from './home/PhoneMockups';

/**
 * Home page: the Nomad App, with Portfolio Advisory as the secondary product, and the
 * enquiry form the other pages link to. Built from the Claude Design handoff
 * `Nomad App Landing.dc.html`. All the words live in src/content/landing.js.
 */

// Currency shown in the illustrative app mockups.
const CURRENCY = 'USD';

// Which thank-you message wins when several interests are picked.
const THANKS_ORDER = ['advisory', 'fund', 'credit', 'app'];

// An interest passed in the address (?interest=fund) by a link from another page.
function interestFromUrl() {
  const key = new URLSearchParams(window.location.search).get('interest');
  return key && key in contact.interests ? [key] : [];
}

function Hero({ pickApp }) {
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
          {hero.eyebrow && <Eyebrow theme="ink">{hero.eyebrow}</Eyebrow>}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(38px, 5vw, 58px)',
              lineHeight: 1.12,
              letterSpacing: '0.03em',
              color: 'var(--sage-200)',
              margin: hero.eyebrow ? '24px 0 0' : 0,
              textWrap: 'balance',
            }}
          >
            {hero.headline}
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
            {hero.intro}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
            <Button variant="gold" onClick={pickApp}>
              {hero.primaryButton}
            </Button>
            <Button variant="outline" theme="ink" onClick={() => scrollToSection('advisory')}>
              {hero.secondaryButton}
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

function FeatureButton({ feature, num, active, onSelect }) {
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
          {num}
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
  const [tab, setTab] = useState(0);
  const screen = app.features[tab]?.screen;
  return (
    <section id="app" style={{ background: 'var(--bone)', padding: 'clamp(64px, 8vw, 96px) 0' }}>
      <div style={wrap}>
        <Eyebrow number="01">{app.eyebrow}</Eyebrow>
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
            {app.headline}
          </h2>
          <p style={{ flex: '1 1 380px', fontSize: 15, lineHeight: 1.75, margin: 0, maxWidth: 460, textWrap: 'pretty' }}>
            {app.intro}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center', marginTop: 56 }}>
          <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {app.features.map((f, i) => (
              <FeatureButton key={f.title} feature={f} num={ROMAN[i]} active={tab === i} onSelect={() => setTab(i)} />
            ))}
          </div>
          <PhoneFrame>
            {screen === 'accounts' && <AccountsScreen />}
            {screen === 'allocation' && <AllocationScreen currency={CURRENCY} />}
            {screen === 'goals' && <GoalsScreen currency={CURRENCY} />}
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
          {advisory.eyebrow}
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
              {advisory.headline}
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
              {advisory.intro}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
                gap: '28px 32px',
                marginTop: 44,
              }}
            >
              {advisory.steps.map((step, i) => (
                <div key={step.title} style={{ borderTop: '1px dashed rgba(201,138,43,0.55)', paddingTop: 20 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 13,
                      letterSpacing: '0.16em',
                      color: 'var(--ochre-soft)',
                    }}
                  >
                    {twoDigits(i)}
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
                    {step.title}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--sage-400)', margin: '8px 0 0' }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: '1 1 340px', minWidth: 0, maxWidth: 440 }}>
            <Card variant="ink" padding={34} style={{ background: 'rgba(27,63,60,0.94)' }}>
              <div style={{ ...upperLabel, color: 'var(--ochre-soft)' }}>{advisory.includedHeading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22, color: 'var(--sage-200)' }}>
                {advisory.included.map((item) => (
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
                <div style={{ ...upperLabel, color: 'var(--sage-400)' }}>{advisory.feeHeading}</div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--sage-200)', margin: '8px 0 0' }}>
                  {advisory.fee}
                </p>
              </div>
              <div style={{ marginTop: 26 }}>
                <Button variant="gold" onClick={pickAdvisory}>
                  {advisory.button}
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
  const toggle = (key) => setPicked((p) => (p.includes(key) ? p.filter((x) => x !== key) : [...p, key]));

  // No lead-capture backend yet: submitting only shows the confirmation state.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const sentMsg = contact.thanks[THANKS_ORDER.find((k) => picked.includes(k)) ?? 'app'];

  return (
    <section id="contact" style={{ background: 'var(--bone-warm)', padding: 'clamp(64px, 8vw, 96px) 0' }}>
      <div style={{ ...wrap, display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 360px', minWidth: 0 }}>
          <Eyebrow number="03">{contact.eyebrow}</Eyebrow>
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
            {contact.headline}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, maxWidth: 420, margin: 0, textWrap: 'pretty' }}>
            {contact.intro}
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
                  {contact.thanksHeading}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, margin: '0 0 22px' }}>{sentMsg}</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSent(false);
                    setPicked([]);
                  }}
                >
                  {contact.sendAnotherButton}
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
                    {contact.interestsLabel}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {Object.entries(contact.interests).map(([key, label]) => (
                      <InterestChip key={key} label={label} on={picked.includes(key)} onToggle={() => toggle(key)} />
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
                  <Field {...contact.fields.name} name="name" autoComplete="name" />
                  <Field {...contact.fields.phone} name="phone" type="tel" autoComplete="tel" />
                </div>
                <Field {...contact.fields.email} name="email" type="email" autoComplete="email" />
                <Field {...contact.fields.message} name="message" as="textarea" rows={3} />
                <div>
                  <Button variant="primary" type="submit">
                    {contact.sendButton}
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


export default function HomePage() {
  const [picked, setPicked] = useState(interestFromUrl);
  const [sent, setSent] = useState(false);

  const pick = (key) => () => {
    setPicked([key]);
    setSent(false);
    scrollToSection('contact');
  };

  return (
    <PageShell current="home" onGetApp={pick('app')} note={pageNote}>
      <Hero pickApp={pick('app')} />
      <AppSection />
      <AdvisorySection pickAdvisory={pick('advisory')} />
      <ContactSection picked={picked} setPicked={setPicked} sent={sent} setSent={setSent} />
    </PageShell>
  );
}
