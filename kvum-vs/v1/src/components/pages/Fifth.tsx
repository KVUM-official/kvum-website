'use client';

import { useLocale } from 'next-intl';

const MAIN_FORM_URL = 'https://docs.google.com/forms/d/1FpqCY0crwd9q4_rpX0NcKX03ma3Dzyh92GFjI8Ff2Tg/viewform?pli=1&pli=1&edit_requested=true';
const AFTERPARTY_FORM_URL = 'https://docs.google.com/forms/d/1aM0iDMtavbHQ72RN-5nFOGCKgfguN7t9lfXQp8uylJk/viewform?pli=1&pli=1&edit_requested=true';
const GUIDE_NOTION_URL = 'https://onyx-digestion-95b.notion.site/KVUM-5th-39cf977d8b4880ba9df8e8fc043d2471';

type Content = {
  heroLabel: string;
  heroTitle: React.ReactNode;
  heroSub: string;
  overviewItems: Array<{ dt: string; dd: React.ReactNode }>;
  overviewNote: string;
  applyMain: string;
  applyAfterparty: string;
  guideLinkLabel: string;
  expectLabel: string;
  expectHeading: React.ReactNode;
  expectCards: Array<{ num: string; title: string; desc: string }>;
  tunedBadge: string;
  tunedTitle: React.ReactNode;
  tunedDesc: string;
  contactLabels: { kakao: string; kakaoSub: string; discord: string; discordSub: string; email: string; emailSub: string; x: string; xSub: string; blog: string; blogSub: string };
  deadlineNotice: React.ReactNode;
};

const VENUE_MAP_URL = 'https://naver.me/xY4sP1mO';
const DISCORD_URL = 'https://discord.gg/qm7uXSjBJZ';

function MapLink({ label }: { label: string }) {
  return (
    <a href={VENUE_MAP_URL} target="_blank" rel="noopener noreferrer" className="overview__map-link">
      {label}
      <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

function ResourceLink({ href, label, variant }: { href: string; label: string; variant: 'intro' | 'guide' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`overview__cta overview__cta--${variant}`}>
      <span>{label}</span>
      <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

function VenueLine({ venue }: { venue: string }) {
  return (
    <span className="overview__venue">
      <svg className="overview__venue-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21s-7-6.4-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.6 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.3" />
      </svg>
      {venue}
    </span>
  );
}

const CONTENT: Record<string, Content> = {
  ko: {
    heroLabel: '5th KVUM · Coming Soon',
    heroTitle: <>10월 3일에 만나요,<br /><span className="grad">다섯 번째 KVUM.</span></>,
    heroSub: '2026년 10월 3일, 국내 XR 유저 · 개발자 · 기업이 다시 한자리에 모입니다. 네 번째 밋업에서 쌓아온 노하우와 네트워크를 바탕으로, 더 넓고 깊은 XR 축제를 준비하고 있습니다.',
    overviewItems: [
      { dt: '일시', dd: '2026년 10월 3일' },
      { dt: '장소', dd: <><VenueLine venue="올댓마인드 (서울 문래)" /><MapLink label="지도 보기" /></> },
      { dt: '대상', dd: 'XR 유저 · 개발자 · 업계 관계자 · 콘텐츠 제작자' },
      { dt: '모집 인원', dd: '추후 공지' },
      { dt: '참가 신청', dd: '커뮤니티 · SNS · 단톡방을 통해 공지' },
      { dt: '참가비', dd: '10,000원' },
    ],
    overviewNote: '* 세부 내용은 유동적으로 변경될 수 있습니다.',
    applyMain: '제 5회 KVUM 참가하기',
    applyAfterparty: '애프터파티 참가하기',
    guideLinkLabel: '5th KVUM 안내사항',
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
      discord: 'Discord', discordSub: '공식 디스코드 커뮤니티',
      email: 'future1070@naver.com', emailSub: '파트너십 · 일반 문의',
      x: '@vum_k67455', xSub: '공식 X (트위터)',
      blog: 'VR 인사이트', blogSub: '네이버 블로그',
    },
    deadlineNotice: <>제 5회 KVUM 참가 신청 마감: <strong>10월 1일(목) 자정</strong></>,
  },
  en: {
    heroLabel: '5th KVUM · Coming Soon',
    heroTitle: <>See you on Oct 3,<br /><span className="grad">the 5th KVUM.</span></>,
    heroSub: 'On October 3, 2026, Korea\'s XR users, developers, and companies gather again. Building on the network and expertise from our fourth meetup, we\'re preparing a wider, deeper XR festival.',
    overviewItems: [
      { dt: 'Date', dd: 'October 3, 2026' },
      { dt: 'Venue', dd: <><VenueLine venue="AllThatMind (Seoul Mullae)" /><MapLink label="View map" /></> },
      { dt: 'Audience', dd: 'XR users · developers · industry · content creators' },
      { dt: 'Capacity', dd: 'TBA' },
      { dt: 'Registration', dd: 'Via community · SNS · group chats' },
      { dt: 'Fee', dd: '₩10,000' },
    ],
    overviewNote: '* Details are subject to change.',
    applyMain: 'Join the 5th KVUM',
    applyAfterparty: 'Join the After Party',
    guideLinkLabel: '5th KVUM Guide',
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
      discord: 'Discord', discordSub: 'Official Discord community',
      email: 'future1070@naver.com', emailSub: 'Partnerships · general inquiries',
      x: '@vum_k67455', xSub: 'Official X (Twitter)',
      blog: 'VR Insight', blogSub: 'Naver Blog',
    },
    deadlineNotice: <>5th KVUM registration closes: <strong>midnight, Thu Oct 1</strong></>,
  },
  ja: {
    heroLabel: '5th KVUM · Coming Soon',
    heroTitle: <>10月3日に会いましょう、<br /><span className="grad">第5回 KVUM。</span></>,
    heroSub: '2026年10月3日、韓国の XR ユーザー · 開発者 · 企業が再び一堂に集います。第4回ミートアップで培ったノウハウとネットワークを基盤に、より広く深い XR フェスティバルを準備中です。',
    overviewItems: [
      { dt: '日時', dd: '2026年10月3日' },
      { dt: '会場', dd: <><VenueLine venue="オールザットマインド（ソウル・ムルレ）" /><MapLink label="地図を見る" /></> },
      { dt: '対象', dd: 'XR ユーザー · 開発者 · 業界関係者 · コンテンツクリエイター' },
      { dt: '定員', dd: '後日公開' },
      { dt: '参加申込', dd: 'コミュニティ · SNS · グループチャットにて案内' },
      { dt: '参加費', dd: '₩10,000' },
    ],
    overviewNote: '* 詳細は変更される場合があります。',
    applyMain: '第5回 KVUM に参加する',
    applyAfterparty: 'アフターパーティーに参加する',
    guideLinkLabel: '第5回 KVUM 案内',
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
      discord: 'Discord', discordSub: '公式 Discord コミュニティ',
      email: 'future1070@naver.com', emailSub: 'パートナーシップ · 一般お問い合わせ',
      x: '@vum_k67455', xSub: '公式 X (Twitter)',
      blog: 'VR インサイト', blogSub: 'ネイバーブログ',
    },
    deadlineNotice: <>第5回 KVUM 参加申込締切：<strong>10月1日(木)24時</strong></>,
  },
  zh: {
    heroLabel: '5th KVUM · Coming Soon',
    heroTitle: <>10月3日见，<br /><span className="grad">第5届 KVUM。</span></>,
    heroSub: '2026年10月3日，韩国 XR 用户 · 开发者 · 企业再次相聚一堂。我们以第4届聚会积累的经验与人脉为基础，正在筹备更广更深的 XR 节日。',
    overviewItems: [
      { dt: '日期', dd: '2026年10月3日' },
      { dt: '地点', dd: <><VenueLine venue="AllThatMind（首尔 · 文来）" /><MapLink label="查看地图" /></> },
      { dt: '对象', dd: 'XR 用户 · 开发者 · 业界人士 · 内容创作者' },
      { dt: '招募人数', dd: '稍后公布' },
      { dt: '报名方式', dd: '通过社区 · SNS · 群聊公告' },
      { dt: '参加费', dd: '₩10,000' },
    ],
    overviewNote: '* 详细内容可能会有变动。',
    applyMain: '参加第5届 KVUM',
    applyAfterparty: '参加派对',
    guideLinkLabel: '第5届 KVUM 须知',
    expectLabel: 'What to Expect',
    expectHeading: <>第5届 KVUM 的 <span className="grad">精彩内容</span></>,
    expectCards: [
      { num: '01', title: '扩展的 XR 设备体验区', desc: '从 HMD · 追踪器 · AR 眼镜到高端设备，平时难以接触的 XR 设备齐聚一堂，亲身体验。' },
      { num: '02', title: '从业者洞察分享', desc: '国内外 XR 业界专家与企业人士的现场洞察，直接分享市场展望与开发经验。' },
      { num: '03', title: '自由讨论 & 社交', desc: '用户 · 开发者 · 业界人士之间无界限的交流。提供翻译支持，与海外嘉宾畅谈无阻。' },
      { num: '04', title: '抽奖 & 惊喜活动', desc: '与合作企业共同打造的抽奖活动。每届都以超乎想象的规模准备抽奖与惊喜。' },
    ],
    tunedBadge: 'STAY TUNED',
    tunedTitle: <>第一时间<br /><span className="grad">获取活动信息。</span></>,
    tunedDesc: '我们将通过开放聊天室与电子邮件，第一时间告知您日程、地点与报名开启时间。请勿错过。',
    contactLabels: {
      kakao: 'Kakao 开放聊天', kakaoSub: '活动消息 · 实时通知',
      discord: 'Discord', discordSub: '官方 Discord 社区',
      email: 'future1070@naver.com', emailSub: '合作 · 一般咨询',
      x: '@vum_k67455', xSub: '官方 X (Twitter)',
      blog: 'VR Insight', blogSub: 'Naver 博客',
    },
    deadlineNotice: <>第5届 KVUM 报名截止：<strong>10月1日（周四）24点</strong></>,
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
            <div className="fifth-apply">
              <a className="fifth-apply__btn fifth-apply__btn--primary" href={MAIN_FORM_URL} target="_blank" rel="noopener noreferrer">
                <strong>{c.applyMain}</strong>
              </a>
              <a className="fifth-apply__btn fifth-apply__btn--outline" href={AFTERPARTY_FORM_URL} target="_blank" rel="noopener noreferrer">
                <strong>
                  {c.applyAfterparty}
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </strong>
              </a>
            </div>
            <p className="cta-notice">
              <span className="cta-notice__dot" />
              <span>{c.deadlineNotice}</span>
            </p>
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

              <div className="overview__cta-row overview__cta-row--side">
                <ResourceLink href={GUIDE_NOTION_URL} label={c.guideLinkLabel} variant="guide" />
              </div>
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
              <a className="contact contact--discord" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.discord}</strong>
                  <small>{c.contactLabels.discordSub}</small>
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
