'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import Image from 'next/image';

type FooterLink =
  | { kind: 'home'; label: string }
  | { kind: 'anchor'; id: string; label: string }
  | { kind: 'page'; href: '/5th' | '/gallery' | '/team'; label: string }
  | { kind: 'external'; href: string; label: string };

const NAV_LINKS: Record<string, FooterLink[]> = {
  ko: [
    { kind: 'home', label: '홈' },
    { kind: 'anchor', id: 'kvum',    label: 'KVUM이란?' },
    { kind: 'anchor', id: 'values',  label: '네 가지 가치' },
    { kind: 'anchor', id: 'history', label: 'KVUM 히스토리' },
    { kind: 'page', href: '/5th',     label: '5th KVUM' },
    { kind: 'page', href: '/gallery', label: 'Gallery' },
    { kind: 'page', href: '/team',    label: 'KVUM Team' },
    { kind: 'external', href: 'https://blog.naver.com/vr_insight', label: 'VR Insight ↗' },
  ],
  en: [
    { kind: 'home', label: 'Home' },
    { kind: 'anchor', id: 'kvum',    label: 'About KVUM' },
    { kind: 'anchor', id: 'values',  label: 'Four Values' },
    { kind: 'anchor', id: 'history', label: 'History' },
    { kind: 'page', href: '/5th',     label: '5th KVUM' },
    { kind: 'page', href: '/gallery', label: 'Gallery' },
    { kind: 'page', href: '/team',    label: 'KVUM Team' },
    { kind: 'external', href: 'https://blog.naver.com/vr_insight', label: 'VR Insight ↗' },
  ],
  ja: [
    { kind: 'home', label: 'ホーム' },
    { kind: 'anchor', id: 'kvum',    label: 'KVUMとは？' },
    { kind: 'anchor', id: 'values',  label: '四つの価値' },
    { kind: 'anchor', id: 'history', label: 'ヒストリー' },
    { kind: 'page', href: '/5th',     label: '第5回 KVUM' },
    { kind: 'page', href: '/gallery', label: 'ギャラリー' },
    { kind: 'page', href: '/team',    label: 'KVUM チーム' },
    { kind: 'external', href: 'https://blog.naver.com/vr_insight', label: 'VR Insight ↗' },
  ],
};

const FOOTER_DESC: Record<string, React.ReactNode> = {
  ko: <>국내 XR 유저 · 개발자 · 기업이 모이는<br />국내 최대 규모의 XR 유저 밋업.<br />2024년부터 지금까지, 그리고 앞으로도.</>,
  en: <>Korea&apos;s largest XR user meetup<br />where users · developers · companies come together.<br />Since 2024, and onwards.</>,
  ja: <>韓国最大規模の XR ユーザーミートアップ。<br />ユーザー · 開発者 · 企業が集う場所。<br />2024年から今まで、そしてこれからも。</>,
};

export function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  const links = NAV_LINKS[locale] ?? NAV_LINKS.ko;
  const isHome = pathname === '/';

  const handleAnchorClick = (e: React.MouseEvent, id: string) => {
    if (!isHome) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    history.pushState(null, '', `#${id}`);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-row">
              <Image
                src="/images/brand/kvum_logo_full_w.png"
                alt="KVUM · Korea VR User Meetup"
                className="footer__logo"
                width={160}
                height={56}
              />
            </div>
            <p className="footer__desc">{FOOTER_DESC[locale] ?? FOOTER_DESC.ko}</p>
          </div>

          <div>
            <div className="footer__col-title">Navigate</div>
            <ul className="footer__col-list">
              {links.map((link, i) => {
                if (link.kind === 'home') {
                  return <li key={`h-${i}`}><Link href="/">{link.label}</Link></li>;
                }
                if (link.kind === 'anchor') {
                  return (
                    <li key={`a-${link.id}`}>
                      <Link
                        href={{ pathname: '/', hash: link.id }}
                        onClick={e => handleAnchorClick(e, link.id)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }
                if (link.kind === 'page') {
                  return <li key={`p-${link.href}`}><Link href={link.href}>{link.label}</Link></li>;
                }
                return (
                  <li key={`e-${i}`}>
                    <a href={link.href} target="_blank" rel="noopener">{link.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Community</div>
            <ul className="footer__col-list">
              <li><a href="https://open.kakao.com/o/gfNFgQ9f" target="_blank" rel="noopener">KakaoTalk</a></li>
              <li><a href="https://x.com/vum_k67455" target="_blank" rel="noopener">X (Twitter)</a></li>
              <li><a href="https://blog.naver.com/vr_insight" target="_blank" rel="noopener">VR Insight</a></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Contact</div>
            <ul className="footer__col-list">
              <li><a href="mailto:future1070@naver.com">future1070@naver.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>KVUM · VR Insight · 대표 김정현</span>
          <span>© 2026 KVUM. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
