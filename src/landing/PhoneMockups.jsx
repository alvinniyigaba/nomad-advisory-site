import figureSrc from '../assets/fund-figure.png';
import { mockups } from '../content';

// Illustrative app screens for the landing page. Their words and figures live in
// src/content.js under `mockups`.

// Bar colours, applied in list order and repeated if a list runs longer.
const BAR_COLORS = ['var(--ink-green)', 'var(--ochre-gold)', 'var(--savannah-sand)', 'var(--clay-red)'];
const barColor = (i) => BAR_COLORS[i % BAR_COLORS.length];

const label = (color = 'var(--text-muted)') => ({
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color,
});

const screenTitle = { fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: '0.04em', color: 'var(--ink-green)' };
const screenSub = { fontSize: 11, color: 'var(--text-muted)', marginTop: 4 };
const panel = { background: 'var(--bone-warm)', border: '1px solid var(--border-default)', borderRadius: 8 };
const dashedAction = {
  border: '1px dashed var(--sand-line)',
  borderRadius: 8,
  padding: 12,
  textAlign: 'center',
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--ink-green)',
};

export function PhoneFrame({ goldEdge = false, children }) {
  return (
    <div style={{ flex: '0 1 300px', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
      <div
        style={{
          width: 290,
          maxWidth: '100%',
          background: 'var(--terrain-black)',
          borderRadius: 44,
          padding: 10,
          boxShadow: 'var(--shadow-lg)',
          boxSizing: 'border-box',
          border: goldEdge ? '1px solid rgba(201,138,43,0.28)' : undefined,
        }}
      >
        <div
          style={{
            background: 'var(--bone)',
            borderRadius: 34,
            overflow: 'hidden',
            height: 580,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '14px 24px 0',
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--text-heading)',
            }}
          >
            <span>9:41</span>
            <span
              style={{
                width: 18,
                height: 9,
                border: '1px solid var(--text-heading)',
                borderRadius: 2,
                boxSizing: 'content-box',
              }}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function AccountRow({ name, sub, value, last, pad = 10 }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: `${pad}px 0`,
        borderBottom: last ? undefined : '1px solid var(--border-default)',
      }}
    >
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-heading)' }}>{name}</div>
        <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 2 }}>{sub}</div>
      </div>
      <span style={{ fontSize: 12, color: 'var(--text-heading)' }}>{value}</span>
    </div>
  );
}

export function OverviewScreen({ currency }) {
  const c = mockups.overview;
  return (
    <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={figureSrc} alt="" style={{ height: 24, width: 'auto', display: 'block' }} />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: '0.14em',
              color: 'var(--ink-green)',
            }}
          >
            NOMAD
          </span>
        </div>
        <span
          style={{
            width: 28,
            height: 28,
            boxSizing: 'content-box',
            borderRadius: 6,
            background: 'var(--bone-panel)',
            border: '1px solid var(--border-default)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
            fontWeight: 600,
            color: 'var(--ink-green)',
          }}
        >
          {c.initials}
        </span>
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{c.greeting}</div>
      <div style={{ background: 'var(--ink-green)', borderRadius: 8, padding: 18 }}>
        <div style={label('var(--sage-400)')}>{c.totalLabel}</div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            letterSpacing: '0.02em',
            color: 'var(--sage-200)',
            marginTop: 8,
          }}
        >
          {`${currency} ${c.total}`}
        </div>
        <div style={{ fontSize: 11, color: 'var(--ochre-soft)', marginTop: 6 }}>{c.change}</div>
      </div>
      <div>
        <div style={{ ...label(), marginBottom: 8 }}>{c.allocationLabel}</div>
        <div style={{ display: 'flex', height: 8, borderRadius: 2, overflow: 'hidden', gap: 2 }}>
          {c.allocation.map((a, i) => (
            <span key={a.name} style={{ flex: a.percent, background: barColor(i) }} />
          ))}
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4px 10px',
            marginTop: 8,
            fontSize: 10,
            color: 'var(--text-body)',
          }}
        >
          {c.allocation.map((a) => (
            <span key={a.name}>{`${a.name} ${a.percent}%`}</span>
          ))}
        </div>
      </div>
      <div>
        <div style={{ ...label(), marginBottom: 4 }}>{c.accountsLabel}</div>
        {c.accounts.map((a, i) => (
          <AccountRow key={a.name} name={a.name} sub={a.type} value={a.value} last={i === c.accounts.length - 1} />
        ))}
      </div>
    </div>
  );
}

export function AccountsScreen() {
  const c = mockups.accounts;
  return (
    <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <div style={screenTitle}>{c.title}</div>
        <div style={screenSub}>{c.subtitle}</div>
      </div>
      <div style={{ ...panel, padding: '4px 14px' }}>
        {c.accounts.map((a, i) => (
          <AccountRow
            key={a.name}
            name={a.name}
            sub={a.type}
            value={a.value}
            pad={12}
            last={i === c.accounts.length - 1}
          />
        ))}
      </div>
      <div style={dashedAction}>{c.action}</div>
    </div>
  );
}

const rowText = { display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-heading)' };
const track = { height: 6, background: 'var(--bone-panel)', borderRadius: 2 };

export function AllocationScreen({ currency }) {
  const c = mockups.allocation;
  return (
    <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div>
        <div style={screenTitle}>{c.title}</div>
        <div style={screenSub}>{`${currency} ${c.subtitle}`}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {c.classes.map((a, i) => (
          <div key={a.name}>
            <div style={{ ...rowText, marginBottom: 6 }}>
              <span>{a.name}</span>
              <span>{a.percent}%</span>
            </div>
            <div style={track}>
              <div style={{ width: `${a.percent}%`, height: '100%', background: barColor(i), borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ ...panel, padding: 14 }}>
        <div style={label()}>{c.marketsLabel}</div>
        {c.markets.map((m, i) => (
          <div key={m.name} style={{ ...rowText, marginTop: i === 0 ? 10 : 6 }}>
            <span>{m.name}</span>
            <span>{m.percent}%</span>
          </div>
        ))}
      </div>
      <div
        style={{
          background: 'var(--ink-green)',
          borderRadius: 8,
          padding: 14,
          fontSize: 11,
          lineHeight: 1.6,
          color: 'var(--sage-200)',
        }}
      >
        {c.note}
      </div>
    </div>
  );
}

export function GoalsScreen({ currency }) {
  const c = mockups.goals;
  return (
    <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <div style={screenTitle}>{c.title}</div>
        <div style={screenSub}>{c.subtitle}</div>
      </div>
      {c.goals.map((g) => (
        <div key={g.name} style={{ ...panel, padding: 14 }}>
          <div style={{ ...rowText, fontWeight: 500 }}>
            <span>{g.name}</span>
            <span style={{ color: 'var(--ochre-gold)' }}>{g.percent}%</span>
          </div>
          <div style={{ ...track, marginTop: 10 }}>
            <div style={{ width: `${g.percent}%`, height: '100%', background: 'var(--ink-green)', borderRadius: 2 }} />
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 8 }}>
            {`${currency} ${g.detail}`}
          </div>
        </div>
      ))}
      <div style={dashedAction}>{c.action}</div>
    </div>
  );
}
