'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

const NAV_LINKS: Record<string, Array<{ label: string; href: string; external?: boolean }>> = {
  ko: [
    { label: '홈', href: '#top' },
    { label: '5th KVUM', href: '#join' },
    { label: 'KVUM Team', href: '#about' },
    { label: 'Gallery', href: '#history' },
    { label: 'VR Insight ↗', href: 'https://blog.naver.com/vr_insight', external: true },
  ],
  en: [
    { label: 'Home', href: '#top' },
    { label: '5th KVUM', href: '#join' },
    { label: 'KVUM Team', href: '#about' },
    { label: 'Gallery', href: '#history' },
    { label: 'VR Insight ↗', href: 'https://blog.naver.com/vr_insight', external: true },
  ],
  ja: [
    { label: 'ホーム', href: '#top' },
    { label: '第5回 KVUM', href: '#join' },
    { label: 'KVUM チーム', href: '#about' },
    { label: 'ギャラリー', href: '#history' },
    { label: 'VR Insight ↗', href: 'https://blog.naver.com/vr_insight', external: true },
  ],
};

const FOOTER_DESC: Record<string, React.ReactNode> = {
  ko: <>국내 XR 유저 · 개발자 · 기업이 모이는<br />국내 최대 규모의 XR 유저 밋업.<br />2024년부터 지금까지, 그리고 앞으로도.</>,
  en: <>Korea&apos;s largest XR user meetup<br />where users · developers · companies come together.<br />Since 2024, and onwards.</>,
  ja: <>韓国最大規模の XR ユーザーミートアップ。<br />ユーザー · 開発者 · 企業が集う場所。<br />2024年から今まで、そしてこれからも。</>,
};

const CONTACT_LABEL: Record<string, string> = { ko: '참가 신청', en: 'Join 5th KVUM', ja: '参加申込' };

export function Footer() {
  const locale = useLocale();
  const links = NAV_LINKS[locale] ?? NAV_LINKS.ko;

  const scrollTo = (id: string) => {
    const hash = id.startsWith('#') ? id.slice(1) : id;
    const el = document.getElementById(hash);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
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
              {links.map(link => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener">{link.label}</a>
                  ) : (
                    <a href={link.href} onClick={e => { e.preventDefault(); scrollTo(link.href); }}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
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
              <li>
                <a href="#join" onClick={e => { e.preventDefault(); scrollTo('join'); }}>
                  {CONTACT_LABEL[locale] ?? CONTACT_LABEL.ko}
                </a>
              </li>
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
