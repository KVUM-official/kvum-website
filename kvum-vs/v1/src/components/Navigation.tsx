'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import Image from 'next/image';

const LOCALE_LABELS: Record<string, string> = { ko: 'KO', en: 'EN', ja: 'JA' };

const NAV_ITEMS_KO = ['홈', '5th KVUM', 'KVUM Team', 'Gallery', 'VR Insight'];
const NAV_ITEMS_EN = ['Home', '5th KVUM', 'KVUM Team', 'Gallery', 'VR Insight'];
const NAV_ITEMS_JA = ['ホーム', '第5回 KVUM', 'KVUM チーム', 'ギャラリー', 'VR Insight'];

const NAV_LABELS: Record<string, string[]> = {
  ko: NAV_ITEMS_KO,
  en: NAV_ITEMS_EN,
  ja: NAV_ITEMS_JA,
};

export function Navigation() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = (next: Locale) => router.replace(pathname, { locale: next });

  const labels = NAV_LABELS[locale] ?? NAV_LABELS.ko;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const sectionIds = ['top', 'next-event', 'about', 'history', 'partners', 'programs', 'join'];

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand" aria-label="KVUM 홈" onClick={e => { e.preventDefault(); scrollTo('top'); }}>
          <Image
            src="/images/brand/kvum_logo_simple.png"
            alt="KVUM"
            className="brand__logo"
            width={80}
            height={26}
            priority
          />
        </a>

        <ul className={`nav__menu${menuOpen ? ' nav__menu--open' : ''}`}>
          <li><a href="#top" className="is-active" onClick={e => { e.preventDefault(); scrollTo('top'); }}>{labels[0]}</a></li>
          <li><a href="#join" onClick={e => { e.preventDefault(); scrollTo('join'); }}>{labels[1]}</a></li>
          <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('about'); }}>{labels[2]}</a></li>
          <li><a href="#history" onClick={e => { e.preventDefault(); scrollTo('history'); }}>{labels[3]}</a></li>
          <li>
            <a href="https://blog.naver.com/vr_insight" target="_blank" rel="noopener">
              {labels[4]}<span className="ext">↗</span>
            </a>
          </li>
          {menuOpen && (
            <li className="nav__lang" style={{ paddingLeft: 0, borderLeft: 'none', borderTop: '1px solid var(--line)', paddingTop: 12 }}>
              {routing.locales.map((loc, i) => (
                <span key={loc} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {i > 0 && <span className="lang-sep" />}
                  <button
                    className={`lang-btn${locale === loc ? ' is-active' : ''}`}
                    onClick={() => switchLocale(loc)}
                  >
                    {LOCALE_LABELS[loc]}
                  </button>
                </span>
              ))}
            </li>
          )}
        </ul>

        <div className="nav__lang">
          {routing.locales.map((loc, i) => (
            <span key={loc} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {i > 0 && <span className="lang-sep" />}
              <button
                className={`lang-btn${locale === loc ? ' is-active' : ''}`}
                onClick={() => switchLocale(loc)}
              >
                {LOCALE_LABELS[loc]}
              </button>
            </span>
          ))}
        </div>

        <button
          className="nav__toggle"
          aria-label="menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
