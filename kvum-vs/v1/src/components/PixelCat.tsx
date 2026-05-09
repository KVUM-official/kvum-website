'use client';

import { useEffect, useRef } from 'react';

const FRAME_W = 72;            // 1.5× of 48
const SPRITE_W = FRAME_W * 8;
const FRAME_DUR = 220;         // ms per animation frame
const STATE_CHECK = 2500;      // ms between state-change checks
const WALK_SPEED = 0.04;       // px per ms

const STATES = {
  walk:  { offset: 0, frames: 4 },
  sit:   { offset: 4, frames: 2 },
  groom: { offset: 6, frames: 2 },
} as const;
type CatState = keyof typeof STATES;

export function PixelCat() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const el = ref.current;
    if (!el) return;

    let state: CatState = 'walk';
    let frame = 0;
    let dir: 1 | -1 = 1;
    let x = 0; // start at left edge
    let lastTime = performance.now();
    let frameAccum = 0;
    let stateAccum = 0;

    const apply = () => {
      const offset = (STATES[state].offset + frame) * FRAME_W;
      el.style.backgroundPosition = `-${offset}px 0`;
      el.style.transform = `translate3d(${x}px, 0, 0) scaleX(${dir})`;
    };
    apply();

    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 100);
      lastTime = now;
      frameAccum += dt;
      stateAccum += dt;

      if (frameAccum >= FRAME_DUR) {
        frameAccum -= FRAME_DUR;
        frame = (frame + 1) % STATES[state].frames;
      }

      if (state === 'walk') {
        const w = window.innerWidth;
        x += dir * WALK_SPEED * dt;
        const right = w - FRAME_W - 8;
        if (x > right) { dir = -1; x = right; }
        else if (x < 0)  { dir = 1;  x = 0;     }
      }

      if (stateAccum >= STATE_CHECK) {
        stateAccum = 0;
        const r = Math.random();
        if (state === 'walk') {
          if (r < 0.18)      { state = 'sit';   frame = 0; }
          else if (r < 0.30) { state = 'groom'; frame = 0; }
        } else {
          if (r < 0.55)      { state = 'walk';  frame = 0; }
        }
      }

      apply();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        lastTime = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        bottom: 20,
        width: FRAME_W,
        height: FRAME_W,
        backgroundImage: 'url(/images/cat-sprite.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${SPRITE_W}px ${FRAME_W}px`,
        imageRendering: 'pixelated',
        pointerEvents: 'none',
        willChange: 'transform, background-position',
        transformOrigin: 'center center',
        zIndex: 9999,
      }}
    />
  );
}
