import figureSrc from '../assets/fund-figure.png';

// Illustrative figures for the landing page's app mockups — not real data.

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

const OVERVIEW_ACCOUNTS = [
  ['Equities portfolio', 'Brokerage', '112,400'],
  ['Money market fund', 'Savings', '58,210'],
  ['Pension', 'Retirement', '77,700'],
];

export function OverviewScreen({ currency }) {
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
          AO
        </span>
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Good morning, Amara</div>
      <div style={{ background: 'var(--ink-green)', borderRadius: 8, padding: 18 }}>
        <div style={label('var(--sage-400)')}>Total portfolio</div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            letterSpacing: '0.02em',
            color: 'var(--sage-200)',
            marginTop: 8,
          }}
        >
          {currency} 248,310
        </div>
        <div style={{ fontSize: 11, color: 'var(--ochre-soft)', marginTop: 6 }}>+2.4% this month</div>
      </div>
      <div>
        <div style={{ ...label(), marginBottom: 8 }}>Allocation</div>
        <div style={{ display: 'flex', height: 8, borderRadius: 2, overflow: 'hidden', gap: 2 }}>
          <span style={{ flex: 46, background: 'var(--ink-green)' }} />
          <span style={{ flex: 24, background: 'var(--ochre-gold)' }} />
          <span style={{ flex: 18, background: 'var(--savannah-sand)' }} />
          <span style={{ flex: 12, background: 'var(--clay-red)' }} />
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
          <span>Equities 46%</span>
          <span>Fixed income 24%</span>
          <span>Cash 18%</span>
          <span>Property 12%</span>
        </div>
      </div>
      <div>
        <div style={{ ...label(), marginBottom: 4 }}>Accounts</div>
        {OVERVIEW_ACCOUNTS.map(([name, sub, value], i) => (
          <AccountRow key={name} name={name} sub={sub} value={value} last={i === OVERVIEW_ACCOUNTS.length - 1} />
        ))}
      </div>
    </div>
  );
}

const LINKED_ACCOUNTS = [
  ['Equities portfolio', 'Brokerage · Nairobi', '112,400'],
  ['Pension', 'Retirement scheme', '77,700'],
  ['Money market fund', 'Unit trust', '58,210'],
  ['Fixed deposit', 'Bank · 12 months', '30,000'],
  ['Savings', 'Bank', '12,450'],
];

export function AccountsScreen() {
  return (
    <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <div style={screenTitle}>Linked accounts</div>
        <div style={screenSub}>5 accounts · 4 institutions</div>
      </div>
      <div style={{ ...panel, padding: '4px 14px' }}>
        {LINKED_ACCOUNTS.map(([name, sub, value], i) => (
          <AccountRow key={name} name={name} sub={sub} value={value} pad={12} last={i === LINKED_ACCOUNTS.length - 1} />
        ))}
      </div>
      <div style={dashedAction}>Link an account</div>
    </div>
  );
}

const ALLOCATION = [
  ['Equities', 46, 'var(--ink-green)'],
  ['Fixed income', 24, 'var(--ochre-gold)'],
  ['Cash and savings', 18, 'var(--savannah-sand)'],
  ['Property', 12, 'var(--clay-red)'],
];

const rowText = { display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-heading)' };
const track = { height: 6, background: 'var(--bone-panel)', borderRadius: 2 };

export function AllocationScreen({ currency }) {
  return (
    <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div>
        <div style={screenTitle}>Allocation</div>
        <div style={screenSub}>{currency} 290,760 across 4 asset classes</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {ALLOCATION.map(([name, pct, color]) => (
          <div key={name}>
            <div style={{ ...rowText, marginBottom: 6 }}>
              <span>{name}</span>
              <span>{pct}%</span>
            </div>
            <div style={track}>
              <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ ...panel, padding: 14 }}>
        <div style={label()}>By market</div>
        <div style={{ ...rowText, marginTop: 10 }}>
          <span>Local</span>
          <span>62%</span>
        </div>
        <div style={{ ...rowText, marginTop: 6 }}>
          <span>Offshore</span>
          <span>38%</span>
        </div>
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
        Equities have drifted 6% above your target. Review with an adviser.
      </div>
    </div>
  );
}

const GOALS = [
  ['Home deposit', 62, '37,200 of 60,000 · 2028'],
  ['Education fund', 38, '19,000 of 50,000 · 2032'],
  ['Emergency reserve', 90, '10,800 of 12,000'],
];

export function GoalsScreen({ currency }) {
  return (
    <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <div style={screenTitle}>Goals</div>
        <div style={screenSub}>3 goals on track</div>
      </div>
      {GOALS.map(([name, pct, detail]) => (
        <div key={name} style={{ ...panel, padding: 14 }}>
          <div style={{ ...rowText, fontWeight: 500 }}>
            <span>{name}</span>
            <span style={{ color: 'var(--ochre-gold)' }}>{pct}%</span>
          </div>
          <div style={{ ...track, marginTop: 10 }}>
            <div style={{ width: `${pct}%`, height: '100%', background: 'var(--ink-green)', borderRadius: 2 }} />
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 8 }}>
            {currency} {detail}
          </div>
        </div>
      ))}
      <div style={dashedAction}>Set a new goal</div>
    </div>
  );
}
