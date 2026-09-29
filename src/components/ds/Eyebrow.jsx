/**
 * Eyebrow — the small uppercase section label used across Nomad materials,
 * optionally prefixed with a Cinzel section number (01 · ESSENCE).
 */
export default function Eyebrow({
  number,
  children,
  theme = 'light', // 'light' | 'ink'
  align = 'left',
  style = {},
  ...rest
}) {
  const numColor = theme === 'ink' ? 'var(--sage-400)' : 'var(--ink-green)';
  const labelColor = theme === 'ink' ? 'var(--sage-600)' : 'var(--text-muted)';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 14,
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        ...style,
      }}
      {...rest}
    >
      {number != null && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--w-medium)',
            fontSize: 15,
            letterSpacing: '0.3em',
            color: numColor,
          }}
        >
          {number}
        </span>
      )}
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 'var(--w-light)',
          fontSize: 'var(--fs-sm)',
          letterSpacing: 'var(--ls-eyebrow)',
          textTransform: 'uppercase',
          color: labelColor,
        }}
      >
        {children}
      </span>
    </span>
  );
}
