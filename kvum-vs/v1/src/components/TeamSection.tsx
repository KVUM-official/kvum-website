'use client';

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { useTranslations } from 'next-intl';

const MEMBER_ACCENTS: Record<string, { color: string; bg: string; border: string }> = {
  Lead:   { color: '#7c3aed', bg: 'rgba(124,58,237,0.10)', border: 'rgba(124,58,237,0.24)' },
  Design: { color: '#ec4899', bg: 'rgba(236,72,153,0.10)', border: 'rgba(236,72,153,0.24)' },
  Sales:  { color: '#f59e0b', bg: 'rgba(245,158,11,0.10)', border: 'rgba(245,158,11,0.24)' },
};

const MEMBERS = [
  { name: '김정현', nick: '쭘쭘', role: 'Lead',   bioKey: 'member1_bio', img: '/images/common/team/team-kimjunghyun.png' },
  { name: '노윤경', nick: '순탄', role: 'Design', bioKey: 'member3_bio', img: '/images/common/team/team-noyunkyung.png' },
  { name: '권기현', nick: '권뺌', role: 'Sales',  bioKey: 'member2_bio', img: '/images/common/team/team-kwonkihyun.png' },
];

function MemberCard({ name, nick, role, bioKey, img }: (typeof MEMBERS)[number]) {
  const t = useTranslations('Team');
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const accent = MEMBER_ACCENTS[role] ?? MEMBER_ACCENTS.Lead;

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 2;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    el.style.transform = `perspective(700px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateZ(16px) scale(1.02)`;
  };

  const onLeave = () => {
    setHovered(false);
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#fff',
        transition: 'transform 0.14s ease-out, box-shadow 0.35s ease',
        willChange: 'transform',
        boxShadow: hovered
          ? `0 0 0 2px ${accent.color}60, 0 16px 48px ${accent.bg}, 0 4px 20px rgba(13,13,26,0.08)`
          : '0 0 0 1px rgba(13,13,26,0.07), 0 2px 12px rgba(13,13,26,0.05)',
      }}
      className="cursor-default"
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          loading="lazy"
        />
        {/* Role sticker on photo */}
        <div className="absolute top-3 right-3">
          <span
            className="text-[0.58rem] font-bold tracking-[0.22em] uppercase px-2.5 py-1"
            style={{
              color: accent.color,
              background: 'rgba(255,255,255,0.92)',
              border: `1px solid ${accent.border}`,
              borderRadius: '999px',
              backdropFilter: 'blur(8px)',
            }}
          >
            {role}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="px-5 pt-4 pb-5" style={{ borderTop: '1px solid rgba(13,13,26,0.06)' }}>
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="text-[#0d0d1a] font-bold text-base tracking-tight">{name}</span>
          <span className="text-[0.82rem]" style={{ color: 'rgba(13,13,26,0.28)' }}>({nick})</span>
        </div>
        <p className="text-[0.78rem] leading-relaxed" style={{ color: 'rgba(13,13,26,0.44)' }}>
          {t(bioKey as 'member1_bio' | 'member2_bio' | 'member3_bio')}
        </p>
      </div>
    </div>
  );
}

export function TeamSection() {
  const t = useTranslations('Team');
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);
  const ctaRef    = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [gridVisible,   setGridVisible]   = useState(false);
  const [ctaVisible,    setCtaVisible]    = useState(false);
  const [joinHov, setJoinHov] = useState(false);

  useEffect(() => {
    const targets = [
      { el: headerRef.current, set: setHeaderVisible },
      { el: gridRef.current,   set: setGridVisible   },
      { el: ctaRef.current,    set: setCtaVisible    },
    ];
    const observers = targets.map(({ el, set }) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { set(true); obs.disconnect(); } },
        { threshold: 0.1 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section id="team" className="relative py-24 overflow-hidden border-t border-[#0d0d1a]/[0.05]" style={{ background: '#f7f8fc' }}>
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14 transition-all duration-1000"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(2rem)' }}
        >
          <span
            className="inline-block text-[0.6rem] tracking-[0.3em] uppercase font-bold mb-5 px-3 py-1"
            style={{ background: 'rgba(245,158,11,0.10)', color: '#f59e0b', borderRadius: '999px' }}
          >
            {t('label')}
          </span>
          <h2
            className="font-black leading-tight text-[#0d0d1a]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.03em' }}
          >
            {t('title')}
          </h2>
        </div>

        {/* Team grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-7"
          style={{ opacity: gridVisible ? 1 : 0, transition: 'opacity 0.8s ease 0.2s' }}
        >
          {MEMBERS.map((m, i) => (
            <div
              key={m.name}
              style={{
                transform: gridVisible ? 'translateY(0)' : 'translateY(2.5rem)',
                transition: `transform 0.7s ease ${0.1 + i * 0.12}s`,
              }}
            >
              <MemberCard {...m} />
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div
          ref={ctaRef}
          className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 md:p-10"
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(13,13,26,0.07)',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(13,13,26,0.05)',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
          }}
        >
          <div>
            <span
              className="inline-block text-[0.58rem] tracking-[0.28em] uppercase font-bold mb-3 px-2.5 py-0.5"
              style={{ background: 'rgba(124,58,237,0.10)', color: '#7c3aed', borderRadius: '999px' }}
            >
              {t('join_label')}
            </span>
            <h3 className="font-black text-[#0d0d1a] leading-tight mb-2"
              style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)', letterSpacing: '-0.02em' }}>
              {t('join_title')}
            </h3>
            <p className="text-[0.88rem] max-w-[340px]" style={{ color: 'rgba(13,13,26,0.48)', lineHeight: 1.85, wordBreak: 'keep-all' }}>
              {t('join_desc')}
            </p>
          </div>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            onMouseEnter={() => setJoinHov(true)}
            onMouseLeave={() => setJoinHov(false)}
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 font-bold text-[0.8rem] tracking-[0.14em] uppercase cursor-pointer transition-all duration-200"
            style={{
              borderRadius: '999px',
              color: joinHov ? '#fff' : '#7c3aed',
              background: joinHov ? '#7c3aed' : 'rgba(124,58,237,0.08)',
              border: '1px solid rgba(124,58,237,0.28)',
              boxShadow: joinHov ? '0 8px 28px rgba(124,58,237,0.35)' : 'none',
              transform: joinHov ? 'translateY(-2px)' : 'none',
            }}
          >
            {t('join_cta')}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
