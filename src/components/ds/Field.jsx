import { useState } from 'react';

/**
 * Field — labelled text input / textarea for Nomad forms (contact, subscribe).
 * Uppercase tracked label, hairline sand border, matte gold focus.
 */
export default function Field({
  label,
  as = 'input', // 'input' | 'textarea'
  type = 'text',
  placeholder = '',
  hint,
  value,
  defaultValue,
  onChange,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const controlStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--w-light)',
    fontSize: 'var(--fs-md)',
    color: 'var(--text-heading)',
    background: 'var(--bone-warm)',
    border: `1px solid ${focus ? 'var(--accent-gold)' : 'var(--border-default)'}`,
    boxShadow: focus ? '0 0 0 3px rgba(201,138,43,0.16)' : 'none',
    borderRadius: 'var(--radius-sm)',
    padding: '12px 14px',
    outline: 'none',
    resize: as === 'textarea' ? 'vertical' : undefined,
    transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
  };
  const common = {
    placeholder,
    value,
    defaultValue,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: controlStyle,
    ...rest,
  };

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--w-medium)',
            fontSize: 'var(--fs-2xs)',
            letterSpacing: 'var(--ls-label)',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          {label}
        </span>
      )}
      {as === 'textarea' ? <textarea rows={rows} {...common} /> : <input type={type} {...common} />}
      {hint && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>
          {hint}
        </span>
      )}
    </label>
  );
}
