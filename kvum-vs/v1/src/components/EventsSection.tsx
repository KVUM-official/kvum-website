'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

type HistoryCard = {
  tag: string;
  date: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  meta: React.ReactNode;
};

const CARDS: Record<string, HistoryCard[]> = {
  ko: [
    { tag: '1ST', date: '2024 · 03', imgSrc: '/images/photos/history-1st.jpg', imgAlt: '1st KVUM',
      title: '첫 VR 유저 밋업', desc: 'XR 커뮤니티 유저와 업계 관계자가 처음으로 한자리에 모인 KVUM의 시작.',
      meta: <><span><strong>30</strong> 명 참가</span><span>파티룸 규모</span></> },
    { tag: '2ND', date: '2024 · 06', imgSrc: '/images/photos/history-2nd.jpg', imgAlt: '2nd KVUM',
      title: '참여 확대', desc: '기업 및 기관 참여가 본격적으로 확장된 2회차 밋업.',
      meta: <><span><strong>60</strong> 명 참가</span><span>기업 참여 시작</span></> },
    { tag: '3RD', date: '2025 · 03', imgSrc: '/images/photos/history-3rd.jpg', imgAlt: '3rd KVUM',
      title: '국내 최대 규모로', desc: 'XR 기업 · 개발자 · 커뮤니티 유저가 모인 국내 최대 XR 유저 중심 오프라인 행사.',
      meta: <><span><strong>70+</strong> 명 참가</span><span>국내 최대 XR 밋업</span></> },
    { tag: '4TH', date: '2025 · 10 · 03', imgSrc: '/images/photos/history-4th.jpg', imgAlt: '4th KVUM',
      title: '첫 XR 축제', desc: '문래 전시장에서 열린 역대 최대 규모 밋업. 기업 · 유저 · 현직자를 잇는 진정한 XR 축제의 문을 열었습니다.',
      meta: <><span><strong>200+</strong> 명 참가</span><span>11 파트너 · 5 연사</span></> },
  ],
  en: [
    { tag: '1ST', date: '2024 · 03', imgSrc: '/images/photos/history-1st.jpg', imgAlt: '1st KVUM',
      title: 'The first VR user meetup', desc: 'Where XR community users and industry professionals first sat down together.',
      meta: <><span><strong>30</strong> attendees</span><span>Party room</span></> },
    { tag: '2ND', date: '2024 · 06', imgSrc: '/images/photos/history-2nd.jpg', imgAlt: '2nd KVUM',
      title: 'Wider participation', desc: 'Corporate and institutional participation began expanding in earnest.',
      meta: <><span><strong>60</strong> attendees</span><span>Company sponsors</span></> },
    { tag: '3RD', date: '2025 · 03', imgSrc: '/images/photos/history-3rd.jpg', imgAlt: '3rd KVUM',
      title: "Korea's largest XR meetup", desc: "XR companies, developers, and community users — the largest user-driven XR offline event in Korea.",
      meta: <><span><strong>70+</strong> attendees</span><span>Korea&apos;s largest</span></> },
    { tag: '4TH', date: '2025 · 10 · 03', imgSrc: '/images/photos/history-4th.jpg', imgAlt: '4th KVUM',
      title: 'The first XR festival', desc: "Our largest-ever meetup, held at the Mullae exhibition hall. A true XR festival connecting companies, users, and professionals.",
      meta: <><span><strong>200+</strong> attendees</span><span>11 partners · 5 speakers</span></> },
  ],
  ja: [
    { tag: '1ST', date: '2024 · 03', imgSrc: '/images/photos/history-1st.jpg', imgAlt: '1st KVUM',
      title: '第1回 VR ユーザーミートアップ', desc: 'XR コミュニティユーザーと業界関係者が初めて一堂に会した KVUM の始まり。',
      meta: <><span><strong>30</strong> 名参加</span><span>パーティールーム</span></> },
    { tag: '2ND', date: '2024 · 06', imgSrc: '/images/photos/history-2nd.jpg', imgAlt: '2nd KVUM',
      title: '参加者拡大', desc: '企業・機関の参加が本格的に拡大した第2回ミートアップ。',
      meta: <><span><strong>60</strong> 名参加</span><span>企業参加開始</span></> },
    { tag: '3RD', date: '2025 · 03', imgSrc: '/images/photos/history-3rd.jpg', imgAlt: '3rd KVUM',
      title: '韓国最大規模へ', desc: 'XR 企業・開発者・コミュニティユーザーが集まった韓国最大の XR ユーザー中心オフラインイベント。',
      meta: <><span><strong>70+</strong> 名参加</span><span>韓国最大 XR ミートアップ</span></> },
    { tag: '4TH', date: '2025 · 10 · 03', imgSrc: '/images/photos/history-4th.jpg', imgAlt: '4th KVUM',
      title: '初の XR フェスティバル', desc: '文來展示場で開催された史上最大規模のミートアップ。企業・ユーザー・現職者をつなぐ真の XR フェスティバルの幕を開けました。',
      meta: <><span><strong>200+</strong> 名参加</span><span>11 パートナー · 5 スピーカー</span></> },
  ],
};

const JOIN_CONTENT: Record<string, {
  heading: React.ReactNode;
  badge: string;
  title: React.ReactNode;
  cta: string;
  contactTitle: string;
}> = {
  ko: {
    heading: <><span className="grad">KVUM</span>이 걸어온 길.</>,
    badge: '5TH · COMING SOON',
    title: <>2026. 10. 03<span>서울 문래 · 참가 신청 곧 오픈</span></>,
    cta: '상세페이지 바로가기',
    contactTitle: 'Get in touch',
  },
  en: {
    heading: <><span className="grad">KVUM&apos;s</span> journey</>,
    badge: '5TH · COMING SOON',
    title: <>2026. 10. 03<span>Seoul Mullae · Registration opens soon</span></>,
    cta: 'View details',
    contactTitle: 'Get in touch',
  },
  ja: {
    heading: <><span className="grad">KVUM</span> の歩み</>,
    badge: '5TH · COMING SOON',
    title: <>2026. 10. 03<span>ソウル · 文來 · 参加申込 近日公開</span></>,
    cta: '詳細ページへ',
    contactTitle: 'Get in touch',
  },
};

const SECTION_LABELS: Record<string, string> = { ko: 'History', en: 'History', ja: 'History' };

export function EventsSection() {
  const locale = useLocale();
  const cards = CARDS[locale] ?? CARDS.ko;
  const jc = JOIN_CONTENT[locale] ?? JOIN_CONTENT.ko;

  return (
    <section className="section section--history" id="history">
      <div className="container">
        <div className="section__label">
          <span className="label__dot" />
          <span className="label__text">{SECTION_LABELS[locale] ?? 'History'}</span>
        </div>
        <h2 className="section__title">{jc.heading}</h2>
        <p className="section__lead">
          {locale === 'ko' && '파티룸에서 시작해 250평 전시장까지 — 규모와 영향력을 함께 키워온 네 번의 밋업, 그리고 앞으로.'}
          {locale === 'en' && 'From a party room to a full exhibition hall. Four meetups we\'ve grown through — and what\'s coming next.'}
          {locale === 'ja' && 'パーティルームから250坪の展示会場まで — 規模と影響力を共に拡大してきた4回のミートアップ、そしてこれから。'}
        </p>

        <div className="history__grid">
          {cards.map(card => (
            <article className="history-card" key={card.tag}>
              <div className="history-card__media">
                <Image src={card.imgSrc} alt={card.imgAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1100px) 50vw, 25vw" loading="lazy" />
                <span className="history-card__tag">{card.tag}</span>
              </div>
              <div className="history-card__body">
                <div className="history-card__date">{card.date}</div>
                <h3 className="history-card__title">{card.title}</h3>
                <p className="history-card__desc">{card.desc}</p>
                <div className="history-card__meta">{card.meta}</div>
              </div>
            </article>
          ))}
        </div>

        {/* 5th KVUM teaser / join card */}
        <div className="join__card history__next-card" id="join">
          <div className="join__left">
            <div className="join__badge">
              <span className="dot" />
              <span>{jc.badge}</span>
            </div>
            <h3 className="join__title">{jc.title}</h3>
            <Link href="/5th" className="join__cta">
              {jc.cta}
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="join__right">
            <div className="join__contact-title">{jc.contactTitle}</div>
            <a className="contact contact--kakao" href="https://open.kakao.com/o/gfNFgQ9f" target="_blank" rel="noopener">
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#3C1E1E" d="M12 4C6.486 4 2 7.589 2 12.02c0 2.846 1.917 5.345 4.802 6.757L5.5 22.5l4.163-2.7c.76.114 1.543.22 2.337.22 5.514 0 10-3.589 10-8.02C22 7.589 17.514 4 12 4z"/>
                </svg>
              </span>
              <span className="contact__text">
                <strong>{locale === 'ko' ? '오픈 카카오톡' : locale === 'ja' ? 'オープンカカオトーク' : 'Open KakaoTalk'}</strong>
                <small>{locale === 'ko' ? '참가 소식 · 실시간 공지' : locale === 'ja' ? 'お知らせ · リアルタイム案内' : 'Updates · live announcements'}</small>
              </span>
              <span className="contact__arrow">→</span>
            </a>
            <a className="contact contact--email" href="mailto:future1070@naver.com">
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="M3 7l9 6 9-6"/>
                </svg>
              </span>
              <span className="contact__text">
                <strong>future1070@naver.com</strong>
                <small>{locale === 'ko' ? '파트너십 · 일반 문의' : locale === 'ja' ? 'パートナーシップ · 一般お問い合わせ' : 'Partnerships · general inquiries'}</small>
              </span>
              <span className="contact__arrow">→</span>
            </a>
            <a className="contact contact--x" href="https://x.com/vum_k67455" target="_blank" rel="noopener">
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </span>
              <span className="contact__text">
                <strong>@vum_k67455</strong>
                <small>{locale === 'ko' ? '공식 X (트위터)' : locale === 'ja' ? '公式 X (Twitter)' : 'Official X (Twitter)'}</small>
              </span>
              <span className="contact__arrow">→</span>
            </a>
            <a className="contact contact--blog" href="https://blog.naver.com/vr_insight" target="_blank" rel="noopener">
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#fff" d="M14.42 11.9L9.92 5H5v14h4.58v-6.9l4.5 6.9H19V5h-4.58z"/>
                </svg>
              </span>
              <span className="contact__text">
                <strong>{locale === 'ko' ? 'VR 인사이트' : 'VR Insight'}</strong>
                <small>{locale === 'ko' ? '네이버 블로그' : locale === 'ja' ? 'Naver ブログ' : 'Naver Blog'}</small>
              </span>
              <span className="contact__arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
