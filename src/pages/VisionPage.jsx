import Button from '../components/ds/Button';
import Card from '../components/ds/Card';
import Eyebrow from '../components/ds/Eyebrow';
import TerrainPattern from '../components/ds/TerrainPattern';
import { cta, hero, mission, pillars, route, thesis, trackRecord } from '../content/vision';
import { contactHref, pageHref } from '../site/links';
import PageShell from '../site/PageShell';
import { bodyStyle, gutter, h2Style, upperLabel } from '../site/layout';
import { AnchorBand, CardGrid, CtaBand, FactList, RouteTimeline, Section, SectionHead, TitledCard } from '../site/ui';

/** Our Vision: the company's vision, mission, thesis, track record and growth path. */

function Hero() {
  return (
    <AnchorBand>
      <div style={{ position: 'absolute', inset: 0 }}>
        <TerrainPattern theme="ink" width={1360} height={640} contourOpacity={0.09} showRoute={false} />
      </div>
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: `clamp(72px, 10vw, 128px) ${gutter}` }}>
        <h1 style={{ margin: 0 }}>
          <Eyebrow theme="ink">{hero.eyebrow}</Eyebrow>
        </h1>
        <figure style={{ margin: '32px 0 0', maxWidth: 900 }}>
          <blockquote
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(26px, 3.4vw, 42px)',
              lineHeight: 1.34,
              letterSpacing: '0.01em',
              color: 'var(--sage-200)',
              textWrap: 'balance',
            }}
          >
            &ldquo;{hero.quote}&rdquo;
          </blockquote>
          <figcaption style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 32 }}>
            <span style={{ width: 36, borderTop: '1.5px dashed var(--ochre-gold)' }} />
            <span style={{ ...upperLabel, color: 'var(--ochre-soft)' }}>{hero.attribution}</span>
          </figcaption>
        </figure>
      </div>
    </AnchorBand>
  );
}

function Mission() {
  return (
    <Section id="mission">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 420px', minWidth: 0 }}>
          <Eyebrow number="01">{mission.eyebrow}</Eyebrow>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(24px, 2.8vw, 32px)',
              lineHeight: 1.36,
              color: 'var(--ink-green)',
              margin: '26px 0 0',
              textWrap: 'balance',
            }}
          >
            &ldquo;{mission.quote}&rdquo;
          </p>
        </div>
        <div style={{ flex: '1 1 420px', minWidth: 0, maxWidth: 560 }}>
          <Card variant="light" padding={30}>
            <div style={{ ...upperLabel, color: 'var(--ochre-gold)', marginBottom: 6 }}>{mission.factsHeading}</div>
            <FactList facts={mission.facts} />
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Thesis() {
  return (
    <Section id="thesis" tone="warm">
      <SectionHead number="02" eyebrow={thesis.eyebrow} title={thesis.headline} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 56px', marginTop: 32, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 600 }}>
          {thesis.paragraphs.map((p) => (
            <p key={p} style={bodyStyle()}>
              {p}
            </p>
          ))}
        </div>
        <div style={{ flex: '1 1 360px', minWidth: 0 }}>
          <div style={{ ...upperLabel, color: 'var(--text-muted)' }}>{thesis.precedentsHeading}</div>
          <div style={{ display: 'grid', gap: 14, marginTop: 16 }}>
            {thesis.precedents.map((p) => (
              <TitledCard
                key={p.title}
                kicker={<span style={{ ...upperLabel, color: 'var(--ochre-gold)' }}>{p.scale}</span>}
                title={p.title}
                body={p.body}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TrackRecord() {
  return (
    <AnchorBand id="track-record" style={{ padding: 'clamp(72px, 9vw, 108px) 0' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <TerrainPattern theme="ink" width={1360} height={760} contourOpacity={0.08} showRoute={false} />
      </div>
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: `0 ${gutter}` }}>
        <Eyebrow number="03" theme="ink">
          {trackRecord.eyebrow}
        </Eyebrow>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, marginTop: 26, alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 460px', minWidth: 0 }}>
            <h2 style={h2Style('ink')}>{trackRecord.headline}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20, maxWidth: 560 }}>
              {trackRecord.paragraphs.map((p) => (
                <p key={p} style={bodyStyle('ink')}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <dl
            style={{
              flex: '1 1 300px',
              minWidth: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 22,
            }}
          >
            {trackRecord.figures.map((f) => (
              <div
                key={f.label}
                style={{
                  borderTop: '1px dashed rgba(201,138,43,0.55)',
                  paddingTop: 18,
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'row-reverse',
                  justifyContent: 'flex-end',
                  alignItems: 'baseline',
                  gap: '4px 20px',
                }}
              >
                <dt style={{ flex: '1 1 160px', fontSize: 13, lineHeight: 1.6, color: 'var(--sage-400)' }}>{f.label}</dt>
                <dd
                  style={{
                    margin: 0,
                    flex: '0 0 150px',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 3vw, 36px)',
                    letterSpacing: '0.02em',
                    color: 'var(--sage-200)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </AnchorBand>
  );
}

function Pillars() {
  return (
    <Section id="what-we-do">
      <SectionHead number="04" eyebrow={pillars.eyebrow} title={pillars.headline} />
      <CardGrid min={260}>
        {pillars.items.map((p) => (
          <TitledCard
            key={p.title}
            title={p.title}
            body={p.body}
            footer={
              <a
                href={pageHref(p.link.page, 'vision', { section: p.link.section })}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-green)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--ochre-gold)',
                  paddingBottom: 4,
                }}
              >
                {p.link.label}
              </a>
            }
          />
        ))}
      </CardGrid>
    </Section>
  );
}

function Route() {
  return (
    <Section id="route" tone="warm">
      <SectionHead number="05" eyebrow={route.eyebrow} title={route.headline} />
      <RouteTimeline phases={route.phases} />
    </Section>
  );
}

export default function VisionPage() {
  return (
    <PageShell current="vision">
      <Hero />
      <Mission />
      <Thesis />
      <TrackRecord />
      <Pillars />
      <Route />
      <CtaBand
        title={cta.headline}
        body={cta.body}
        actions={
          <>
            <Button variant="gold" href={contactHref('vision', 'app')}>
              {cta.primaryButton}
            </Button>
            <Button variant="outline" theme="ink" href={contactHref('vision', 'fund')}>
              {cta.secondaryButton}
            </Button>
          </>
        }
      />
    </PageShell>
  );
}
