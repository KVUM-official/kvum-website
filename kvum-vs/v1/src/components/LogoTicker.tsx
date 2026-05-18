'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const PARTNER_IDS = [1, 2, 3, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

function LogoGroup({ ariaHidden, eager }: { ariaHidden?: boolean; eager?: boolean }) {
  return (
    <div className="ticker__group" aria-hidden={ariaHidden}>
      {PARTNER_IDS.map(id => (
        <Image
          key={id}
          src={`/images/partners/${id}.png`}
          alt=""
          className="ticker__logo"
          width={220}
          height={48}
          loading={eager ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  );
}

export function LogoTicker() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 두 번의 rAF: 첫 번째는 DOM paint, 두 번째는 GPU 레이어 확정 후
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        section.classList.add('is-ready');
      });
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  return (
    <section ref={sectionRef} className="ticker ticker--logos" id="next-event" aria-label="Partners">
      <div className="ticker__track">
        <LogoGroup eager />
        <LogoGroup ariaHidden />
      </div>
    </section>
  );
}
