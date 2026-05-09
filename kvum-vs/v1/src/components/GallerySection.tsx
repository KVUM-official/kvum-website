'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';

const GALLERY_IMGS = [
  '/images/events/4th/event-4th-group-main.jpg',
  '/images/events/4th/event-4th-photo-02.jpg',
  '/images/events/4th/event-4th-photo-04.jpg',
  '/images/events/4th/event-4th-photo-05.jpg',
  '/images/events/4th/event-4th-photo-07.jpg',
  '/images/events/4th/event-4th-photo-08.jpg',
  '/images/events/4th/event-4th-photo-11.jpg',
  '/images/events/4th/event-4th-photo-12.jpg',
  '/images/events/4th/event-4th-prize.jpg',
];

const DESKTOP = [
  { col: '1 / span 2', row: '1 / span 2' },
  { col: '3',          row: '1'           },
  { col: '3',          row: '2'           },
  { col: '1',          row: '3'           },
  { col: '2',          row: '3'           },
  { col: '3',          row: '3 / span 2'  },
  { col: '1',          row: '4'           },
  { col: '2',          row: '4'           },
  { col: '1 / span 3', row: '5'           },
];

const CARD_TILTS = [0.3, -0.4, 0.2, -0.3, 0.4, -0.2, 0.35, -0.25];

function GalleryItem({
  src, alt, index, onClick, visible,
  gridCol, gridRow,
}: {
  src: string; alt: string; index: number;
  onClick: (i: number) => void; visible: boolean;
  gridCol?: string; gridRow?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [entered, setEntered] = useState(false);
  const tilt = CARD_TILTS[index % CARD_TILTS.length];

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setEntered(true), (index * 0.06 + 0.1 + 0.65) * 1000);
    return () => clearTimeout(t);
  }, [visible, index]);

  return (
    <button
      onClick={() => onClick(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden bg-[#e4e7f5] w-full h-full focus:outline-none cursor-pointer block"
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        borderRadius: '14px',
        opacity: visible ? 1 : 0,
        transform: !visible
          ? 'translateY(10px) scale(0.96)'
          : hovered ? 'translateY(-8px) scale(1.02) rotate(0deg)'
          : `translateY(0) scale(1) rotate(${tilt}deg)`,
        boxShadow: hovered
          ? '0 28px 56px rgba(13,13,26,0.16), 0 6px 20px rgba(124,58,237,0.10)'
          : '0 4px 18px rgba(13,13,26,0.08)',
        willChange: 'transform',
        transition: !entered
          ? `opacity 0.65s ease ${index * 0.06 + 0.1}s, transform 0.65s ease ${index * 0.06 + 0.1}s, box-shadow 0.4s ease`
          : 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s ease, opacity 0.65s ease',
      }}
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          borderRadius: '14px',
        }}
        loading={index < 3 ? 'eager' : 'lazy'}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          background: 'linear-gradient(to bottom, rgba(13,13,26,0.04) 0%, rgba(13,13,26,0.42) 100%)',
          transition: 'opacity 0.4s ease',
          borderRadius: '14px',
        }}
      />
      <div
        className="absolute inset-0 flex items-end justify-start p-4 pointer-events-none"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        <div
          className="flex items-center gap-2"
          style={{
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'transform 0.35s ease',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
            <path d="M6 9h6M9 6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-white/70">View</span>
        </div>
      </div>
    </button>
  );
}

export function GallerySection() {
  const t = useTranslations('Gallery');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.06 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightbox(i => i !== null ? (i + 1) % GALLERY_IMGS.length : null);
      if (e.key === 'ArrowLeft') setLightbox(i => i !== null ? (i - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length : null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-white border-t border-[#0d0d1a]/[0.05] py-20 md:py-28 overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">

          {/* Header */}
          <div
            className="mb-12"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(2rem)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <span
              className="inline-block text-[0.6rem] tracking-[0.3em] uppercase font-bold mb-5 px-3 py-1"
              style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', borderRadius: '999px' }}
            >
              {t('label')}
            </span>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2
                className="font-black leading-none text-[#0d0d1a]"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.03em' }}
              >
                {t('title')}
              </h2>
              <a
                href="#events"
                className="hidden md:inline-flex items-center gap-2.5 text-[0.8rem] tracking-[0.14em] uppercase font-semibold transition-colors duration-300 mb-1"
                style={{ color: 'rgba(13,13,26,0.45)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#22c55e'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(13,13,26,0.45)'; }}
              >
                {t('cta')}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile grid */}
          <div className="grid grid-cols-2 gap-2.5 md:hidden">
            {GALLERY_IMGS.map((src, i) => (
              <div key={src} style={{ aspectRatio: i === 0 ? '16/9' : '1/1', gridColumn: i === 0 ? 'span 2' : undefined }}>
                <GalleryItem
                  src={src} alt={`KVUM 4th ${i + 1}`} index={i}
                  onClick={setLightbox} visible={visible}
                />
              </div>
            ))}
          </div>

          {/* Desktop masonry */}
          <div
            className="hidden md:grid"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(4, 230px) 200px',
              gap: '12px',
            }}
          >
            {GALLERY_IMGS.map((src, i) => (
              <GalleryItem
                key={src}
                src={src} alt={`KVUM 4th ${i + 1}`} index={i}
                onClick={setLightbox} visible={visible}
                gridCol={DESKTOP[i].col}
                gridRow={DESKTOP[i].row}
              />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 flex justify-center md:hidden">
            <a
              href="#events"
              className="inline-flex items-center gap-2.5 font-semibold text-[0.82rem] tracking-[0.12em] uppercase px-7 py-3 transition-all duration-300"
              style={{
                color: '#22c55e',
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.24)',
                borderRadius: '999px',
              }}
            >
              {t('cta')}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'rgba(6,6,10,0.94)', backdropFilter: 'blur(8px)' }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white active:scale-[0.9] transition-all duration-200 cursor-pointer"
            style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px' }}
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/40 hover:text-white active:scale-[0.9] transition-all duration-200 cursor-pointer"
            style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px' }}
            onClick={e => { e.stopPropagation(); setLightbox(i => i !== null ? (i - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length : null); }}
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <img
            src={GALLERY_IMGS[lightbox]}
            alt={`KVUM 4th ${lightbox + 1}`}
            className="max-w-[88vw] max-h-[82vh] object-contain"
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6)', borderRadius: '12px' }}
            onClick={e => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/40 hover:text-white active:scale-[0.9] transition-all duration-200 cursor-pointer"
            style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px' }}
            onClick={e => { e.stopPropagation(); setLightbox(i => i !== null ? (i + 1) % GALLERY_IMGS.length : null); }}
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-[0.2em] tabular-nums">
            {lightbox + 1} / {GALLERY_IMGS.length}
          </p>
        </div>
      )}
    </>
  );
}
