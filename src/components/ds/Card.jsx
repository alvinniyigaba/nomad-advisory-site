import { useState } from 'react';

/**
 * Card — the warm hairline-bordered surface used across Nomad materials.
 * Variants: 'light' (bone-warm on sand hairline), 'ink' (deep green),
 * 'panel' (recessed). Optional hover lift.
 */
export default function Card({
  variant = 'light', // 'light' | 'ink' | 'panel'
  interactive = false,
  padding = 26,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const skins = {
    light: { bg: 'var(--surface-card)', bd: 'var(--border-default)', sh: 'var(--shadow-sm)' },
    panel: { bg: 'var(--surface-panel)', bd: 'var(--border-default)', sh: 'none' },
    ink: { bg: 'var(--surface-ink)', bd: 'rgba(201,138,43,0.28)', sh: 'var(--shadow-md)' },
  };
  const s = skins[variant] || skins.light;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: s.bg,
        border: `1px solid ${s.bd}`,
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: interactive && hover ? 'var(--shadow-md)' : s.sh,
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        color: variant === 'ink' ? 'var(--text-on-ink-body)' : 'var(--text-body)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
