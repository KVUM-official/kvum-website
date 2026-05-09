'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

function useFadeIn(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const BENEFIT_KEYS = ['benefit_01', 'benefit_02', 'benefit_03', 'benefit_04'] as const;

const BENEFIT_ACCENTS = [
  { color: '#7c3aed', bg: 'rgba(124,58,237,0.09)', border: 'rgba(124,58,237,0.20)' },
  { color: '#06b6d4', bg: 'rgba(6,182,212,0.09)',  border: 'rgba(6,182,212,0.20)'  },
  { color: '#ec4899', bg: 'rgba(236,72,153,0.09)', border: 'rgba(236,72,153,0.20)' },
  { color: '#f59e0b', bg: 'rgba(245,158,11,0.09)', border: 'rgba(245,158,11,0.20)' },
] as const;

const BENEFIT_ICONS = [
  <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="7" width="18" height="10" rx="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="8" cy="12" r="1.8" fill="currentColor" opacity="0.5"/>
    <circle cx="14" cy="12" r="1.8" fill="currentColor" opacity="0.5"/>
    <path d="M11 4v3M8 5l1.5 2M14 5l-1.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16 7h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 14v3M11 14v3M5 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="16" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 19c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 13c1.657 0 3 1.343 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l2.4 6.3L20 9.3l-4.9 4.4 1.4 6.3L11 16.8l-5.5 3.2 1.4-6.3L2 9.3l6.6-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>,
];

export function EventFifthSection() {
  const t = useTranslations('EventFifth');
  const header   = useFadeIn(0.08);
  const infoGrid = useFadeIn(0.08);
  const bens     = useFadeIn(0.08);

  const infoItems = [
    { label: '일시',                    value: t('date') },
    { label: '장소',                    value: t('location') },
    { label: t('target_label'),         value: t('target') },
    { label: t('registration_label'),   value: t('registration') },
    { label: t('capacity_label'),       value: t('capacity') },
    { label: t('fees_label'),           value: t('fees') },
  ];

  return (
    <section
      id="5th"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-28 border-t border-black/[0.05]"
      style={{ background: '#f0f3fa' }}
    >
      {/* Giant bg number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-black text-[#0d0d1a] leading-none"
          style={{ fontSize: 'clamp(12rem, 38vw, 36rem)', letterSpacing: '-0.04em', opacity: 0.025 }}
        >
          5TH
        </span>
      </div>

      {/* Aurora glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '-15%', left: '-5%', width: '50%', height: '60%',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 65%)',
          animation: 'kvum-glow-drift 22s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-5%', width: '45%', height: '55%',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 65%)',
          animation: 'kvum-glow-drift 26s ease-in-out 6s infinite reverse',
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 md:px-16">

        {/* Header */}
        <div
          ref={header.ref}
          className="mb-14 transition-all duration-1000"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'translateY(0)' : 'translateY(2.5rem)' }}
        >
          <span
            className="inline-block text-[0.6rem] tracking-[0.3em] uppercase font-bold mb-5 px-3 py-1"
            style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b', borderRadius: '999px' }}
          >
            {t('label')}
          </span>
          <div className="flex items-baseline gap-5 flex-wrap">
            <h2
              className="font-black leading-none text-[#0d0d1a]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.03em' }}
            >
              {t('title')}
            </h2>
            <span
              className="font-bold text-[#0d0d1a] leading-none"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', letterSpacing: '-0.01em', opacity: 0.25 }}
            >
              2026 · 10 · 03
            </span>
          </div>
        </div>

        {/* Info grid */}
        <div
          ref={infoGrid.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-14 transition-all duration-1000 delay-100"
          style={{
            opacity: infoGrid.visible ? 1 : 0, transform: infoGrid.visible ? 'translateY(0)' : 'translateY(2rem)',
            background: 'rgba(255,255,255,0.85)',
            borderRadius: '20px',
            border: '1px solid rgba(13,13,26,0.07)',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(13,13,26,0.06)',
          }}
        >
          {infoItems.map(({ label, value }, i) => (
            <div
              key={i}
              className="p-7 relative group"
              style={{ borderBottom: '1px solid rgba(13,13,26,0.06)', borderRight: undefined }}
            >
              <div
                className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: BENEFIT_ACCENTS[i % 4].color }}
              />
              <p className="text-[0.72rem] tracking-[0.2em] uppercase mb-2.5 font-bold"
                style={{ color: BENEFIT_ACCENTS[i % 4].color }}>
                {label}
              </p>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: 'rgba(13,13,26,0.75)' }}>{value}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div
          ref={bens.ref}
          className="transition-all duration-1000 delay-200"
          style={{ opacity: bens.visible ? 1 : 0, transform: bens.visible ? 'translateY(0)' : 'translateY(2rem)' }}
        >
          <p className="text-[0.68rem] tracking-[0.28em] uppercase mb-6 font-bold"
            style={{ color: 'rgba(13,13,26,0.30)' }}>
            {t('benefits_label')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BENEFIT_KEYS.map((key, i) => {
              const acc = BENEFIT_ACCENTS[i];
              return (
                <div
                  key={key}
                  className="group relative p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.85)',
                    border: `1px solid ${acc.border}`,
                    borderRadius: '16px',
                    boxShadow: '0 2px 12px rgba(13,13,26,0.04)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 32px ${acc.bg}`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = acc.color + '40';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(13,13,26,0.04)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = acc.border;
                  }}
                >
                  <div className="mb-4" style={{ color: acc.color }}>
                    {BENEFIT_ICONS[i]}
                  </div>
                  <p className="text-[0.9rem] leading-relaxed font-medium" style={{ color: 'rgba(13,13,26,0.72)' }}>
                    {t(key)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <ContactCards />
      </div>
    </section>
  );
}

// ── Contact cards ─────────────────────────────────────────────────────────────
function ContactCards() {
  const t = useTranslations('EventFifth');
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const CONTACT_ACCENTS = ['#22c55e', '#7c3aed', '#1a5cff', '#ec4899'] as const;

  const CONTACTS = [
    {
      href: 'https://open.kakao.com/o/gfNFgQ9f',
      title: t('contact_kakao_title'),
      desc: t('contact_kakao_desc'),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.477 3 2 6.477 2 10.9c0 2.7 1.46 5.09 3.72 6.59l-.96 3.57 4.18-2.72A11.7 11.7 0 0 0 12 18.8c5.523 0 10-3.477 10-7.9S17.523 3 12 3z"/>
        </svg>
      ),
    },
    {
      href: 'mailto:future1070@naver.com',
      title: t('contact_email_title'),
      desc: t('contact_email_desc'),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m2 7 10 7 10-7"/>
        </svg>
      ),
    },
    {
      href: 'https://x.com/vum_k67455',
      title: t('contact_x_title'),
      desc: t('contact_x_desc'),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      href: 'https://blog.naver.com/vr_insight',
      title: t('contact_blog_title'),
      desc: t('contact_blog_desc'),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.42 11.9L9.92 5H5v14h4.58v-6.9l4.5 6.9H19V5h-4.58z"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      ref={ref}
      className="mt-12"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(2rem)',
        transition: 'opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s',
      }}
    >
      <p className="text-[0.68rem] tracking-[0.28em] uppercase mb-6 font-bold" style={{ color: 'rgba(13,13,26,0.30)' }}>
        {t('contact_label')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CONTACTS.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target={c.href.startsWith('mailto') ? undefined : '_blank'}
            rel={c.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="group relative flex items-center gap-4 p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
            style={{
              background: 'rgba(255,255,255,0.85)',
              border: `1px solid rgba(13,13,26,0.08)`,
              borderRadius: '16px',
              boxShadow: '0 2px 12px rgba(13,13,26,0.04)',
            }}
            onMouseEnter={e => {
              const t = e.currentTarget as HTMLAnchorElement;
              t.style.borderColor = CONTACT_ACCENTS[i] + '40';
              t.style.boxShadow = `0 10px 28px rgba(13,13,26,0.08)`;
            }}
            onMouseLeave={e => {
              const t = e.currentTarget as HTMLAnchorElement;
              t.style.borderColor = 'rgba(13,13,26,0.08)';
              t.style.boxShadow = '0 2px 12px rgba(13,13,26,0.04)';
            }}
          >
            <div className="flex-shrink-0" style={{ color: CONTACT_ACCENTS[i] }}>
              {c.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[#0d0d1a] font-semibold text-[0.86rem] leading-snug truncate">{c.title}</p>
              <p className="text-[0.7rem] mt-0.5" style={{ color: 'rgba(13,13,26,0.40)' }}>{c.desc}</p>
            </div>
            <svg
              width="11" height="11" viewBox="0 0 12 12" fill="none"
              className="ml-auto flex-shrink-0"
              style={{ color: 'rgba(13,13,26,0.22)' }}
            >
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
