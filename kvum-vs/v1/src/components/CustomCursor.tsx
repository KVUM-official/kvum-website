'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [label,    setLabel]    = useState('');
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => {
    // Desktop-only: pointer: fine excludes touch/stylus-only devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    setMounted(true);

    // Hide default cursor globally
    const style = document.createElement('style');
    style.id = 'kvum-cursor-none';
    style.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(style);

    let mx = 0, my = 0, dx = 0, dy = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      // Dot snaps immediately
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
    };

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      // Ring lerps behind — 0.13 lerp factor
      dx += (mx - dx) * 0.13;
      dy += (my - dy) * 0.13;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isBtn  = !!target.closest('button');
      const isLink = !!target.closest('a');
      if (isBtn || isLink) {
        setExpanded(true);
        setLabel(isBtn ? 'CLICK' : '');
      } else {
        setExpanded(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver);
    tick();

    return () => {
      document.getElementById('kvum-cursor-none')?.remove();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted) return null;

  // Ring size: 26px default, 44px expanded
  // margin: -(size/2) to center at transform origin
  const ringSize   = expanded ? 44 : 26;
  const ringMargin = -(ringSize / 2);

  return (
    <>
      {/* Dot — snaps directly to cursor */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            margin: '-3px',
            borderRadius: '50%',
            background: '#1a5cff',
            boxShadow: '0 0 8px rgba(26,92,255,0.85)',
          }}
        />
      </div>

      {/* Ring — lags behind with lerp */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
        }}
      >
        <div
          style={{
            width: ringSize,
            height: ringSize,
            margin: `${ringMargin}px`,
            borderRadius: '50%',
            border: `1px solid rgba(26,92,255,${expanded ? 0.65 : 0.28})`,
            boxShadow: expanded ? '0 0 14px rgba(26,92,255,0.14)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition:
              'width 0.18s ease, height 0.18s ease, margin 0.18s ease, ' +
              'border-color 0.18s ease, box-shadow 0.18s ease',
          }}
        >
          {expanded && label && (
            <span
              style={{
                color: 'rgba(26,92,255,0.75)',
                fontSize: '0.34rem',
                letterSpacing: '0.18em',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
