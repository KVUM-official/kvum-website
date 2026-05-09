'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import Image from 'next/image';

const LOCALE_LABELS: Record<string, string> = { ko: 'KO', en: 'EN', ja: 'JA' };

type AnchorItem = { kind: 'anchor'; id: string; label: string };
type PageItem   = { kind: 'page'; href: '/5th' | '/gallery' | '/team'; label: string };
type ExternalItem = { kind: 'external'; href: string; label: string };
type NavItem = AnchorItem | PageItem | ExternalItem;

const NAV_ITEMS: Record<string, NavItem[]> = {
  ko: [
    { kind: 'anchor', id: 'kvum',    label: 'KVUM이란?' },
    { kind: 'anchor', id: 'values',  label: '네 가지 가치' },
    { kind: 'anchor', id: 'history', label: 'KVUM 히스토리' },
    { kind: 'page',   href: '/5th',     label: '5th KVUM' },
    { kind: 'page',   href: '/gallery', label: 'Gallery' },
    { kind: 'page',   href: '/team',    label: 'KVUM Team' },
    { kind: 'external', href: 'https://blog.naver.com/vr_insight', label: 'VR Insight' },
  ],
  en: [
    { kind: 'anchor', id: 'kvum',    label: 'About KVUM' },
    { kind: 'anchor', id: 'values',  label: 'Four Values' },
    { kind: 'anchor', id: 'history', label: 'History' },
    { kind: 'page',   href: '/5th',     label: '5th KVUM' },
    { kind: 'page',   href: '/gallery', label: 'Gallery' },
    { kind: 'page',   href: '/team',    label: 'KVUM Team' },
    { kind: 'external', href: 'https://blog.naver.com/vr_insight', label: 'VR Insight' },
  ],
  ja: [
    { kind: 'anchor', id: 'kvum',    label: 'KVUMとは？' },
    { kind: 'anchor', id: 'values',  label: '四つの価値' },
    { kind: 'anchor', id: 'history', label: 'ヒストリー' },
    { kind: 'page',   href: '/5th',     label: '第5回 KVUM' },
    { kind: 'page',   href: '/gallery', label: 'ギャラリー' },
    { kind: 'page',   href: '/team',    label: 'KVUM チーム' },
    { kind: 'external', href: 'https://blog.naver.com/vr_insight', label: 'VR Insight' },
  ],
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

  const items = NAV_ITEMS[locale] ?? NAV_ITEMS.ko;
  const isHome = pathname === '/';

  const handleAnchorClick = (e: React.MouseEvent, id: string) => {
    setMenuOpen(false);
    if (!isHome) return; // Let Link navigate to /{locale}#id
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    history.pushState(null, '', `#${id}`);
  };

  const renderItem = (item: NavItem, idx: number, prevKind?: NavItem['kind']) => {
    const showSeparator = prevKind && prevKind !== item.kind &&
      (prevKind === 'anchor' && item.kind === 'page' || prevKind === 'page' && item.kind === 'external');

    const liClass = showSeparator ? 'nav__sep-before' : '';

    if (item.kind === 'anchor') {
      return (
        <li key={`a-${item.id}`} className={liClass}>
          <Link
            href={{ pathname: '/', hash: item.id }}
            onClick={e => handleAnchorClick(e, item.id)}
          >
            {item.label}
          </Link>
        </li>
      );
    }
    if (item.kind === 'page') {
      const active = pathname === item.href;
      return (
        <li key={`p-${item.href}`} className={liClass}>
          <Link
            href={item.href}
            className={active ? 'is-active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        </li>
      );
    }
    return (
      <li key={`e-${idx}`} className={liClass}>
        <a href={item.href} target="_blank" rel="noopener" onClick={() => setMenuOpen(false)}>
          {item.label}<span className="ext">↗</span>
        </a>
      </li>
    );
  };

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__brand" aria-label="KVUM" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/brand/kvum_logo_simple.png"
            alt="KVUM"
            className="brand__logo"
            width={80}
            height={26}
            priority
          />
        </Link>

        <ul className={`nav__menu${menuOpen ? ' nav__menu--open' : ''}`}>
          {items.map((item, idx) =>
            renderItem(item, idx, idx > 0 ? items[idx - 1].kind : undefined),
          )}

          {menuOpen && (
            <li className="nav__lang nav__lang--mobile">
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
