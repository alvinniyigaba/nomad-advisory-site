import Button from '../components/ds/Button';
import Card from '../components/ds/Card';
import NomadLogo from '../components/ds/NomadLogo';
import { cta, hero, pageNote, path, sectors, structure } from '../content/fund';
import { contactHref } from '../site/links';
import PageShell from '../site/PageShell';
import { scrollToSection, twoDigits, upperLabel } from '../site/layout';
import { CardGrid, CtaBand, FactList, PageHero, RouteTimeline, Section, SectionHead, TitledCard } from '../site/ui';

/** Nomad Fund: Nomad Capital Fund I, its sectors, structure and growth path. */

function FundMark() {
  return (
    <div style={{ flex: '0 1 320px', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
      <div
        style={{
          border: '1px solid rgba(201,138,43,0.35)',
          borderRadius: 8,
          padding: '44px 52px',
          background: 'rgba(27,63,60,0.6)',
        }}
      >
        <NomadLogo brand="fund" layout="stacked" theme="ink" size={24} />
      </div>
    </div>
  );
}

function Sectors() {
  return (
    <Section id="sectors">
      <SectionHead number="01" eyebrow={sectors.eyebrow} title={sectors.headline} intro={sectors.intro} split />
      <CardGrid min={230}>
        {sectors.items.map((s, i) => (
          <TitledCard
            key={s.name}
            kicker={
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: '0.16em', color: 'var(--ochre-gold)' }}>
                {twoDigits(i)}
              </span>
            }
            title={s.name}
            body={s.body}
          />
        ))}
        <TitledCard
          dashed
          kicker={<span style={{ ...upperLabel, color: 'var(--text-muted)' }}>{sectors.horizon.label}</span>}
          title={sectors.horizon.name}
          body={sectors.horizon.body}
        />
      </CardGrid>
    </Section>
  );
}

function Structure() {
  return (
    <Section id="structure" tone="warm">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 380px', minWidth: 0 }}>
          <SectionHead number="02" eyebrow={structure.eyebrow} title={structure.headline} intro={structure.intro} />
        </div>
        <div style={{ flex: '1 1 460px', minWidth: 0, maxWidth: 600 }}>
          <Card variant="light" padding={30}>
            <FactList facts={structure.facts} />
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Path() {
  return (
    <Section id="path">
      <SectionHead number="03" eyebrow={path.eyebrow} title={path.headline} />
      <RouteTimeline phases={path.phases} />
    </Section>
  );
}

export default function FundPage() {
  return (
    <PageShell current="fund" note={pageNote}>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.headline}
        intro={hero.intro}
        actions={
          <>
            <Button variant="gold" href={contactHref('fund', 'fund')}>
              {hero.primaryButton}
            </Button>
            <Button
              variant="outline"
              theme="ink"
              href="#sectors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('sectors');
              }}
            >
              {hero.secondaryButton}
            </Button>
          </>
        }
        aside={<FundMark />}
      />
      <Sectors />
      <Structure />
      <Path />
      <CtaBand
        title={cta.headline}
        body={cta.body}
        actions={
          <Button variant="gold" href={contactHref('fund', 'fund')}>
            {cta.button}
          </Button>
        }
      />
    </PageShell>
  );
}
