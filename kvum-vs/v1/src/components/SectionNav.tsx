'use client';

import { useEffect, useState } from 'react';

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: 'kvum',     label: 'About' },
  { id: 'values',   label: 'Values' },
  { id: 'history',  label: 'History' },
  { id: 'join',     label: '5th' },
  { id: 'partners', label: 'Partners' },
  { id: 'programs', label: 'Programs' },
];

export function SectionNav() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length === 0) return;
        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveId(topmost.target.id);
      },
      {
        rootMargin: '-100px 0px -55% 0px',
        threshold: 0,
      },
    );

    const els: Element[] = [];
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) {
        observer.observe(el);
        els.push(el);
      }
    });

    return () => {
      els.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    history.pushState(null, '', `#${id}`);
    setActiveId(id);
  };

  return (
    <aside className="section-nav" aria-label="Page sections">
      {SECTIONS.map(s => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`section-nav__item${activeId === s.id ? ' is-active' : ''}`}
          onClick={e => handleClick(e, s.id)}
        >
          <span className="section-nav__dot" />
          <span className="section-nav__label">{s.label}</span>
        </a>
      ))}
    </aside>
  );
}
