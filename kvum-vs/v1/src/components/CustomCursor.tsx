'use client';

import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]';

const RING_LERP = 0.15;

export function CustomCursor() {
  const clusterRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;

    const cluster = clusterRef.current;
    const ring = ringRef.current;
    if (!cluster || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        cluster.style.opacity = '1';
        ring.style.opacity = '1';
      }
      cluster.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    };

    const onLeave = () => {
      visible = false;
      cluster.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(INTERACTIVE_SELECTOR)) {
        ring.classList.add('cursor-ring--hover');
      }
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const related = e.relatedTarget as HTMLElement | null;
      if (target?.closest(INTERACTIVE_SELECTOR) && !related?.closest(INTERACTIVE_SELECTOR)) {
        ring.classList.remove('cursor-ring--hover');
      }
    };

    let raf = 0;
    const tick = () => {
      rx += (mx - rx) * RING_LERP;
      ry += (my - ry) * RING_LERP;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div ref={clusterRef} className="cursor-cluster" aria-hidden="true">
        <div className="cursor-dot" />
      </div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
