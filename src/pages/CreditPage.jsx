import Badge from '../components/ds/Badge';
import Button from '../components/ds/Button';
import Card from '../components/ds/Card';
import { cta, hero, how, pageNote, products } from '../content/credit';
import { contactHref } from '../site/links';
import PageShell from '../site/PageShell';
import { twoDigits, upperLabel } from '../site/layout';
import { CardGrid, CtaBand, PageHero, Section, SectionHead, TitledCard } from '../site/ui';

/**
 * Credit: not offered yet. Describes the planned products in general terms and
 * collects a waitlist through the enquiry form on the home page.
 */

function Products() {
  return (
    <Section id="products">
      <SectionHead number="01" eyebrow={products.eyebrow} title={products.headline} intro={products.intro} split />
      <CardGrid min={260}>
        {products.items.map((p) => (
          <TitledCard key={p.name} kicker={<Badge variant="outline">{products.badge}</Badge>} title={p.name} body={p.body} />
        ))}
      </CardGrid>
    </Section>
  );
}

function How() {
  return (
    <Section id="how" tone="warm">
      <SectionHead number="02" eyebrow={how.eyebrow} title={how.headline} />
      <ol
        style={{
          listStyle: 'none',
          margin: '44px 0 0',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
          gap: '28px 32px',
        }}
      >
        {how.steps.map((step, i) => (
          <li key={step.title} style={{ borderTop: '1px dashed rgba(201,138,43,0.7)', paddingTop: 20 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: '0.16em', color: 'var(--ochre-gold)' }}>
              {twoDigits(i)}
            </div>
            <h3
              style={{
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ink-green)',
                margin: '12px 0 0',
              }}
            >
              {step.title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, margin: '8px 0 0' }}>{step.body}</p>
          </li>
        ))}
      </ol>
      <Card variant="panel" padding={28} style={{ marginTop: 48, maxWidth: 720 }}>
        <div style={{ ...upperLabel, color: 'var(--ink-green)' }}>{how.todayHeading}</div>
        <p style={{ fontSize: 14, lineHeight: 1.7, margin: '10px 0 0' }}>{how.todayBody}</p>
      </Card>
    </Section>
  );
}

export default function CreditPage() {
  return (
    <PageShell current="credit" note={pageNote}>
      <PageHero
        eyebrow={hero.eyebrow}
        badge={hero.badge}
        title={hero.headline}
        intro={hero.intro}
        actions={
          <>
            <Button variant="gold" href={contactHref('credit', 'credit')}>
              {hero.primaryButton}
            </Button>
            <Button variant="outline" theme="ink" href={contactHref('credit', 'app')}>
              {hero.secondaryButton}
            </Button>
          </>
        }
      />
      <Products />
      <How />
      <CtaBand
        title={cta.headline}
        body={cta.body}
        actions={
          <Button variant="gold" href={contactHref('credit', 'credit')}>
            {cta.button}
          </Button>
        }
      />
    </PageShell>
  );
}
