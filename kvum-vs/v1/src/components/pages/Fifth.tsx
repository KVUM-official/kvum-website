'use client';

import { useLocale } from 'next-intl';

type Content = {
  heroLabel: string;
  heroTitle: React.ReactNode;
  heroSub: string;
  overviewItems: Array<{ dt: string; dd: string }>;
  overviewNote: string;
  overviewPlace: string;
  expectLabel: string;
  expectHeading: React.ReactNode;
  expectCards: Array<{ num: string; title: string; desc: string }>;
  tunedBadge: string;
  tunedTitle: React.ReactNode;
  tunedDesc: string;
  contactLabels: { kakao: string; kakaoSub: string; email: string; emailSub: string; x: string; xSub: string; blog: string; blogSub: string };
};

const CONTENT: Record<string, Content> = {
  ko: {
    heroLabel: '5th KVUM · Coming Soon',
    heroTitle: <>다시 돌아옵니다,<br /><span className="grad">다섯 번째 KVUM.</span></>,
    heroSub: '2026년 10월 3일, 국내 XR 유저 · 개발자 · 기업이 다시 한자리에 모입니다. 네 번째 밋업에서 쌓아온 노하우와 네트워크를 바탕으로, 더 넓고 깊은 XR 축제를 준비하고 있습니다.',
    overviewItems: [
      { dt: '일시', dd: '2026년 10월 3일' },
      { dt: '장소', dd: '서울 문래' },
      { dt: '대상', dd: 'XR 유저 · 개발자 · 업계 관계자 · 콘텐츠 제작자' },
      { dt: '모집 인원', dd: '추후 공지' },
      { dt: '참가 신청', dd: '커뮤니티 · SNS · 단톡방을 통해 공지' },
      { dt: '참가비', dd: '추후 공지' },
    ],
    overviewNote: '* 모든 일정과 세부 내용은 변경될 수 있으며, 최종 확정된 내용은 모집 시작 전 안내드립니다.',
    overviewPlace: '서울 문래',
    expectLabel: 'What to Expect',
    expectHeading: <>5th KVUM에서 <span className="grad">만날 것들</span></>,
    expectCards: [
      { num: '01', title: '확장된 XR 디바이스 체험존', desc: 'HMD · 트래커 · AR 글래스부터 하이엔드 장비까지, 평소 접하기 힘든 XR 기기를 한자리에서 직접 체험.' },
      { num: '02', title: '현직자 인사이트 세션', desc: '국내외 XR 업계 전문가와 기업 관계자의 현장 인사이트. 시장 전망과 개발 노하우를 직접 전달.' },
      { num: '03', title: '자유 토론 & 네트워킹', desc: '유저 · 개발자 · 업계 관계자 간 경계 없는 소통. 해외 게스트와도 통역 지원으로 막힘없이.' },
      { num: '04', title: '경품 & 깜짝 이벤트', desc: '파트너 기업과 함께하는 경품 이벤트. 매 회차 상상 이상의 스케일로 준비되는 추첨과 깜짝 이벤트.' },
    ],
    tunedBadge: 'STAY TUNED',
    tunedTitle: <>참가 소식<br /><span className="grad">가장 먼저 받기.</span></>,
    tunedDesc: '오픈채팅방과 이메일을 통해 일정과 장소, 참가 신청이 열리는 순간 가장 먼저 알려드립니다. 놓치지 마세요.',
    contactLabels: {
      kakao: '오픈 카카오톡', kakaoSub: '참가 소식 · 실시간 공지',
      email: 'future1070@naver.com', emailSub: '파트너십 · 일반 문의',
      x: '@vum_k67455', xSub: '공식 X (트위터)',
      blog: 'VR 인사이트', blogSub: '네이버 블로그',
    },
  },
  en: {
    heroLabel: '5th KVUM · Coming Soon',
    heroTitle: <>It returns —<br /><span className="grad">the fifth KVUM.</span></>,
    heroSub: 'On October 3, 2026, Korea\'s XR users, developers, and companies gather again. Building on the network and expertise from our fourth meetup, we\'re preparing a wider, deeper XR festival.',
    overviewItems: [
      { dt: 'Date', dd: 'October 3, 2026' },
      { dt: 'Venue', dd: 'Seoul Mullae' },
      { dt: 'Audience', dd: 'XR users · developers · industry · content creators' },
      { dt: 'Capacity', dd: 'TBA' },
      { dt: 'Registration', dd: 'Via community · SNS · group chats' },
      { dt: 'Fee', dd: 'TBA' },
    ],
    overviewNote: '* All schedules and details are subject to change. Final details will be announced before registration opens.',
    overviewPlace: 'Seoul Mullae',
    expectLabel: 'What to Expect',
    expectHeading: <>What you&apos;ll find at the <span className="grad">5th KVUM</span></>,
    expectCards: [
      { num: '01', title: 'Expanded XR device experience zone', desc: 'From HMDs, trackers, and AR glasses to high-end gear — try XR devices that are usually hard to access, all in one place.' },
      { num: '02', title: 'Industry insight sessions', desc: 'On-the-ground insights from XR experts and companies, both domestic and international — market outlook and development know-how.' },
      { num: '03', title: 'Open discussion & networking', desc: 'Borderless conversation between users, developers, and industry. Translation support available for international guests.' },
      { num: '04', title: 'Prize & surprise events', desc: 'Prize giveaways with our partners. Every round prepared at a scale beyond expectation — drawings and surprises.' },
    ],
    tunedBadge: 'STAY TUNED',
    tunedTitle: <>Get the news<br /><span className="grad">first.</span></>,
    tunedDesc: 'Through our open chat and email, we\'ll let you know the moment dates, venue, and registration go live. Don\'t miss it.',
    contactLabels: {
      kakao: 'Open KakaoTalk', kakaoSub: 'Updates · live announcements',
      email: 'future1070@naver.com', emailSub: 'Partnerships · general inquiries',
      x: '@vum_k67455', xSub: 'Official X (Twitter)',
      blog: 'VR Insight', blogSub: 'Naver Blog',
    },
  },
  ja: {
    heroLabel: '5th KVUM · Coming Soon',
    heroTitle: <>再び帰ってきます、<br /><span className="grad">第5回 KVUM。</span></>,
    heroSub: '2026年10月3日、韓国の XR ユーザー · 開発者 · 企業が再び一堂に集います。第4回ミートアップで培ったノウハウとネットワークを基盤に、より広く深い XR フェスティバルを準備中です。',
    overviewItems: [
      { dt: '日時', dd: '2026年10月3日' },
      { dt: '会場', dd: 'ソウル・ムルレ' },
      { dt: '対象', dd: 'XR ユーザー · 開発者 · 業界関係者 · コンテンツクリエイター' },
      { dt: '定員', dd: '後日公開' },
      { dt: '参加申込', dd: 'コミュニティ · SNS · グループチャットにて案内' },
      { dt: '参加費', dd: '後日公開' },
    ],
    overviewNote: '* 日程と詳細は変更される可能性があり、最終確定内容は募集開始前にお知らせします。',
    overviewPlace: 'ソウル・ムルレ',
    expectLabel: 'What to Expect',
    expectHeading: <>第5回 KVUM で <span className="grad">出会えるもの</span></>,
    expectCards: [
      { num: '01', title: '拡張された XR デバイス体験ゾーン', desc: 'HMD · トラッカー · AR グラスからハイエンド機器まで、普段触れにくい XR デバイスを一堂に体験。' },
      { num: '02', title: '現職者のインサイトセッション', desc: '国内外の XR 業界専門家と企業関係者による現場のインサイト。市場展望と開発ノウハウを直接届けます。' },
      { num: '03', title: '自由討論 & ネットワーキング', desc: 'ユーザー · 開発者 · 業界関係者の間の境界のない交流。海外ゲストとも通訳支援で滞りなく。' },
      { num: '04', title: 'プレゼント & サプライズイベント', desc: 'パートナー企業と共にするプレゼントイベント。毎回想像以上のスケールで準備される抽選とサプライズ。' },
    ],
    tunedBadge: 'STAY TUNED',
    tunedTitle: <>参加情報を<br /><span className="grad">いち早く。</span></>,
    tunedDesc: 'オープンチャットとメールを通じて、日程・会場・参加申込が開始される瞬間にいち早くお知らせします。お見逃しなく。',
    contactLabels: {
      kakao: 'オープンカカオトーク', kakaoSub: '参加情報 · リアルタイム通知',
      email: 'future1070@naver.com', emailSub: 'パートナーシップ · 一般お問い合わせ',
      x: '@vum_k67455', xSub: '公式 X (Twitter)',
      blog: 'VR インサイト', blogSub: 'ネイバーブログ',
    },
  },
};

export function Fifth() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.ko;

  return (
    <>
      <header className="page-hero" id="top">
        <div className="container">
          <div className="page-hero__inner">
            <div className="section__label">
              <span className="label__dot" />
              <span className="label__text">{c.heroLabel}</span>
            </div>
            <h1 className="page-hero__title">{c.heroTitle}</h1>
            <p className="page-hero__sub">{c.heroSub}</p>
          </div>
        </div>
      </header>

      <section className="section section--overview">
        <div className="container">
          <div className="overview">
            <div className="overview__side">
              <div className="overview__num">05<span>.</span></div>
              <div className="overview__date">
                <span>2026</span>
                <span>10</span>
                <span>03</span>
              </div>
              <div className="overview__place">{c.overviewPlace}</div>
            </div>

            <div className="overview__main">
              <dl className="overview__list">
                {c.overviewItems.map((item, i) => (
                  <div className="overview__item" key={i}>
                    <dt>{item.dt}</dt>
                    <dd>{item.dd}</dd>
                  </div>
                ))}
              </dl>
              <p className="overview__note">{c.overviewNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--expect">
        <div className="container">
          <div className="section__label section__label--light">
            <span className="label__dot" />
            <span className="label__text">{c.expectLabel}</span>
          </div>
          <h2 className="section__title section__title--light">{c.expectHeading}</h2>

          <div className="expect__grid">
            {c.expectCards.map(card => (
              <article className="expect-card" key={card.num}>
                <div className="expect-card__num">{card.num}</div>
                <h3 className="expect-card__title">{card.title}</h3>
                <p className="expect-card__desc">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tuned__card">
            <div className="tuned__left">
              <div className="join__badge">
                <span className="dot" />
                <span>{c.tunedBadge}</span>
              </div>
              <h2 className="tuned__title">{c.tunedTitle}</h2>
              <p className="tuned__desc">{c.tunedDesc}</p>
            </div>

            <div className="tuned__right">
              <a className="contact contact--kakao" href="https://open.kakao.com/o/gfNFgQ9f" target="_blank" rel="noopener">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#3C1E1E" d="M12 4C6.486 4 2 7.589 2 12.02c0 2.846 1.917 5.345 4.802 6.757L5.5 22.5l4.163-2.7c.76.114 1.543.22 2.337.22 5.514 0 10-3.589 10-8.02C22 7.589 17.514 4 12 4z" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.kakao}</strong>
                  <small>{c.contactLabels.kakaoSub}</small>
                </span>
                <span className="contact__arrow">→</span>
              </a>
              <a className="contact contact--email" href="mailto:future1070@naver.com">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.email}</strong>
                  <small>{c.contactLabels.emailSub}</small>
                </span>
                <span className="contact__arrow">→</span>
              </a>
              <a className="contact contact--x" href="https://x.com/vum_k67455" target="_blank" rel="noopener">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.x}</strong>
                  <small>{c.contactLabels.xSub}</small>
                </span>
                <span className="contact__arrow">→</span>
              </a>
              <a className="contact contact--blog" href="https://blog.naver.com/vr_insight" target="_blank" rel="noopener">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#fff" d="M14.42 11.9L9.92 5H5v14h4.58v-6.9l4.5 6.9H19V5h-4.58z" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.blog}</strong>
                  <small>{c.contactLabels.blogSub}</small>
                </span>
                <span className="contact__arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
