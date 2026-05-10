'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

const FOOTER_DESC: Record<string, React.ReactNode> = {
  ko: <>국내 XR 유저 · 개발자 · 기업이 모이는<br />국내 최대 규모의 XR 유저 밋업.<br />2024년부터 지금까지, 그리고 앞으로도.</>,
  en: <>Korea&apos;s largest XR user meetup<br />where users · developers · companies come together.<br />Since 2024, and onwards.</>,
  ja: <>韓国最大規模の XR ユーザーミートアップ。<br />ユーザー · 開発者 · 企業が集う場所。<br />2024年から今まで、そしてこれからも。</>,
  zh: <>韩国最大规模的 XR 用户聚会，<br />汇聚用户 · 开发者 · 企业。<br />自2024年起，未来仍将继续。</>,
};

const REPRESENTATIVE: Record<string, string> = {
  ko: 'KVUM · VR Insight · 주최 김정현',
  en: 'KVUM · VR Insight · Host Kim Junghyun',
  ja: 'KVUM · VR Insight · 主催 キム・ジョンヒョン',
  zh: 'KVUM · VR Insight · 主办 金正贤',
};

export function Footer() {
  const locale = useLocale();

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
          <span>{REPRESENTATIVE[locale] ?? REPRESENTATIVE.ko} · future1070@naver.com</span>
          <span>© 2026 KVUM. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
