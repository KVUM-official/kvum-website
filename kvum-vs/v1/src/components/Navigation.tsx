'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import Image from 'next/image';

const LOCALE_LABELS: Record<string, string> = { ko: 'KO', en: 'EN', ja: 'JP' };

type PageItem = { kind: 'page'; href: '/5th' | '/gallery' | '/team'; label: string };
type ExternalItem = { kind: 'external'; href: string; label: string };
type NavItem = PageItem | ExternalItem;

const NAV_ITEMS: NavItem[] = [
  { kind: 'page',     href: '/5th',     label: '5th KVUM' },
  { kind: 'page',     href: '/gallery', label: 'Gallery' },
  { kind: 'page',     href: '/team',    label: 'Team' },
  { kind: 'external', href: 'https://blog.naver.com/vr_insight', label: 'VR Insight' },
];

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const switchLocale = (next: Locale) => router.replace(pathname, { locale: next });

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
          {NAV_ITEMS.map((item, idx) => {
            if (item.kind === 'page') {
              const active = pathname === item.href;
              return (
                <li key={`p-${item.href}`}>
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
              <li key={`e-${idx}`}>
                <a href={item.href} target="_blank" rel="noopener" onClick={() => setMenuOpen(false)}>
                  {item.label}<span className="ext">↗</span>
                </a>
              </li>
            );
          })}

          {menuOpen && (
            <li className="nav__lang nav__lang--mobile">
              {routing.locales.map((loc, i) => (
                <span key={loc} className="lang-group">
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
            <span key={loc} className="lang-group">
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
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
