'use client';

import { useEffect, useState } from 'react';

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transform = !visible
    ? 'translateY(14px) scale(0.82)'
    : hovered
    ? 'translateY(0) scale(1.12)'
    : 'translateY(0) scale(1)';

  const shadow = hovered
    ? '0 6px 24px rgba(0,0,0,0.5), 0 0 22px rgba(0,229,255,0.24)'
    : '0 4px 16px rgba(0,0,0,0.4), 0 0 10px rgba(0,229,255,0.08)';

  const borderColor = hovered
    ? 'rgba(0,229,255,0.55)'
    : 'rgba(0,229,255,0.28)';

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 40,
        width: 40,
        height: 40,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(8,12,26,0.90)',
        border: `1px solid ${borderColor}`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: shadow,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform,
        transition: 'opacity 0.3s ease, transform 0.25s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        cursor: 'pointer',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 11V3M3 7l4-4 4 4"
          stroke="#00e5ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
