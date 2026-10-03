'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const SURVEY_URL = 'https://forms.gle/sv8VVm2G9os5uNUf9';
const DISCORD_URL = 'https://discord.gg/qm7uXSjBJZ';

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
      meta: <><span><strong>첫 시작</strong></span><span>파티룸 규모</span></> },
    { tag: '2ND', date: '2024 · 06', imgSrc: '/images/photos/history-2nd.jpg', imgAlt: '2nd KVUM',
      title: '참여 확대', desc: '기업 및 기관 참여가 본격적으로 확장된 2회차 밋업.',
      meta: <><span><strong>참여 확장</strong></span><span>기업 참여 시작</span></> },
    { tag: '3RD', date: '2025 · 03', imgSrc: '/images/photos/history-3rd.jpg', imgAlt: '3rd KVUM',
      title: '국내 최대 규모로', desc: 'XR 기업 · 개발자 · 커뮤니티 유저가 모인 국내 최대 XR 유저 중심 오프라인 행사.',
      meta: <><span><strong>유저 중심 행사</strong></span><span>국내 최대 XR 밋업</span></> },
    { tag: '4TH', date: '2025 · 10 · 03', imgSrc: '/images/photos/history-4th.jpg', imgAlt: '4th KVUM',
      title: '첫 XR 축제', desc: '문래 전시장에서 열린 역대 최대 규모 밋업. 기업 · 유저 · 현직자를 잇는 진정한 XR 축제의 문을 열었습니다.',
      meta: <><span><strong>역대 최대 규모</strong></span><span>문래 전시장 개최</span></> },
  ],
  en: [
    { tag: '1ST', date: '2024 · 03', imgSrc: '/images/photos/history-1st.jpg', imgAlt: '1st KVUM',
      title: 'The first VR user meetup', desc: 'Where XR community users and industry professionals first sat down together.',
      meta: <><span><strong>First gathering</strong></span><span>Party room</span></> },
    { tag: '2ND', date: '2024 · 06', imgSrc: '/images/photos/history-2nd.jpg', imgAlt: '2nd KVUM',
      title: 'Wider participation', desc: 'Corporate and institutional participation began expanding in earnest.',
      meta: <><span><strong>Wider reach</strong></span><span>Company sponsors</span></> },
    { tag: '3RD', date: '2025 · 03', imgSrc: '/images/photos/history-3rd.jpg', imgAlt: '3rd KVUM',
      title: "Korea's largest XR meetup", desc: "XR companies, developers, and community users — the largest user-driven XR offline event in Korea.",
      meta: <><span><strong>User-driven</strong></span><span>Korea&apos;s largest</span></> },
    { tag: '4TH', date: '2025 · 10 · 03', imgSrc: '/images/photos/history-4th.jpg', imgAlt: '4th KVUM',
      title: 'The first XR festival', desc: "Our largest-ever meetup, held at the Mullae exhibition hall. A true XR festival connecting companies, users, and professionals.",
      meta: <><span><strong>Largest ever</strong></span><span>Mullae exhibition hall</span></> },
  ],
  ja: [
    { tag: '1ST', date: '2024 · 03', imgSrc: '/images/photos/history-1st.jpg', imgAlt: '1st KVUM',
      title: '第1回 VR ユーザーミートアップ', desc: 'XR コミュニティユーザーと業界関係者が初めて一堂に会した KVUM の始まり。',
      meta: <><span><strong>初開催</strong></span><span>パーティールーム</span></> },
    { tag: '2ND', date: '2024 · 06', imgSrc: '/images/photos/history-2nd.jpg', imgAlt: '2nd KVUM',
      title: '参加者拡大', desc: '企業・機関の参加が本格的に拡大した第2回ミートアップ。',
      meta: <><span><strong>参加拡大</strong></span><span>企業参加開始</span></> },
    { tag: '3RD', date: '2025 · 03', imgSrc: '/images/photos/history-3rd.jpg', imgAlt: '3rd KVUM',
      title: '韓国最大規模へ', desc: 'XR 企業・開発者・コミュニティユーザーが集まった韓国最大の XR ユーザー中心オフラインイベント。',
      meta: <><span><strong>ユーザー中心</strong></span><span>韓国最大 XR ミートアップ</span></> },
    { tag: '4TH', date: '2025 · 10 · 03', imgSrc: '/images/photos/history-4th.jpg', imgAlt: '4th KVUM',
      title: '初の XR フェスティバル', desc: '文來展示場で開催された史上最大規模のミートアップ。企業・ユーザー・現職者をつなぐ真の XR フェスティバルの幕を開けました。',
      meta: <><span><strong>史上最大規模</strong></span><span>文來展示場</span></> },
  ],
  zh: [
    { tag: '1ST', date: '2024 · 03', imgSrc: '/images/photos/history-1st.jpg', imgAlt: '1st KVUM',
      title: '首届 VR 用户聚会', desc: 'XR 社区用户与业界人士首次齐聚一堂，KVUM 的起点。',
      meta: <><span><strong>首次启动</strong></span><span>派对房间规模</span></> },
    { tag: '2ND', date: '2024 · 06', imgSrc: '/images/photos/history-2nd.jpg', imgAlt: '2nd KVUM',
      title: '参与扩大', desc: '企业与机构参与正式扩展的第2届聚会。',
      meta: <><span><strong>参与扩展</strong></span><span>企业开始参与</span></> },
    { tag: '3RD', date: '2025 · 03', imgSrc: '/images/photos/history-3rd.jpg', imgAlt: '3rd KVUM',
      title: '成长为韩国最大规模', desc: 'XR 企业 · 开发者 · 社区用户齐聚的韩国最大 XR 用户主导线下活动。',
      meta: <><span><strong>用户为中心</strong></span><span>韩国最大 XR 聚会</span></> },
    { tag: '4TH', date: '2025 · 10 · 03', imgSrc: '/images/photos/history-4th.jpg', imgAlt: '4th KVUM',
      title: '首届 XR 节日', desc: '在文来展厅举行的史上最大规模聚会，开启了连接企业 · 用户 · 从业者的真正 XR 节日。',
      meta: <><span><strong>史上最大规模</strong></span><span>文来展厅举办</span></> },
  ],
};

const JOIN_CONTENT: Record<string, {
  heading: React.ReactNode;
  badge: string;
  title: string;
  dateLabel: string;
  dateValue: string;
  locationLabel: string;
  locationValue: string;
  cta: string;
  surveyCta: string;
  contactTitle: string;
}> = {
  ko: {
    heading: <><span className="grad">KVUM</span>이 걸어온 길.</>,
    badge: '5TH KVUM · 성료',
    title: '제 5회 KVUM',
    dateLabel: 'DATE',
    dateValue: '2026.10.03',
    locationLabel: 'LOCATION',
    locationValue: '서울 문래',
    cta: '상세페이지 바로가기',
    surveyCta: '만족도 조사 참여하기',
    contactTitle: 'Get in touch',
  },
  en: {
    heading: <><span className="grad">KVUM&apos;s</span> journey</>,
    badge: '5TH KVUM · WRAPPED',
    title: '5th KVUM',
    dateLabel: 'DATE',
    dateValue: '2026.10.03',
    locationLabel: 'LOCATION',
    locationValue: 'Seoul Mullae',
    cta: 'View details',
    surveyCta: 'Take the Survey',
    contactTitle: 'Get in touch',
  },
  ja: {
    heading: <><span className="grad">KVUM</span> の歩み</>,
    badge: '5TH KVUM · 開催終了',
    title: '第5回 KVUM',
    dateLabel: 'DATE',
    dateValue: '2026.10.03',
    locationLabel: 'LOCATION',
    locationValue: 'ソウル · 文來',
    cta: '詳細ページへ',
    surveyCta: 'アンケートに参加する',
    contactTitle: 'Get in touch',
  },
  zh: {
    heading: <><span className="grad">KVUM</span> 走过的路。</>,
    badge: '5TH KVUM · 圆满结束',
    title: '第5届 KVUM',
    dateLabel: 'DATE',
    dateValue: '2026.10.03',
    locationLabel: 'LOCATION',
    locationValue: '首尔 · 文来',
    cta: '查看详情页',
    surveyCta: '参与满意度调查',
    contactTitle: 'Get in touch',
  },
};

const SECTION_LABELS: Record<string, string> = { ko: 'History', en: 'History', ja: 'History', zh: 'History' };

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
          {locale === 'ko' && '파티룸에서 시작해 대형 전시장까지 — 규모와 영향력을 함께 키워온 네 번의 밋업, 그리고 앞으로.'}
          {locale === 'en' && 'From a party room to a full exhibition hall. Four meetups we\'ve grown through — and what\'s coming next.'}
          {locale === 'ja' && 'パーティルームから大型展示会場まで — 規模と影響力を共に拡大してきた4回のミートアップ、そしてこれから。'}
          {locale === 'zh' && '从派对房间到大型展厅 —— 规模与影响力共同成长的四届聚会，以及未来。'}
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

            <div className="join__infocards">
              <div className="join__infocard">
                <span className="join__infocard-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="16" rx="2"/>
                    <path d="M3 10h18M8 3v4M16 3v4"/>
                  </svg>
                </span>
                <div>
                  <div className="join__infocard-label">{jc.dateLabel}</div>
                  <div className="join__infocard-value">{jc.dateValue}</div>
                </div>
              </div>
              <div className="join__infocard">
                <span className="join__infocard-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-6.4-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.6 12 21 12 21z"/>
                    <circle cx="12" cy="9.5" r="2.3"/>
                  </svg>
                </span>
                <div>
                  <div className="join__infocard-label">{jc.locationLabel}</div>
                  <div className="join__infocard-value">{jc.locationValue}</div>
                </div>
              </div>
            </div>

            <div className="join__cta-stack">
              <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="join__cta join__cta--primary">
                {jc.surveyCta}
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="join__links">
              <Link href="/5th" className="join__cta join__cta--text">
                {jc.cta}
                <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
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
                <strong>{locale === 'ko' ? '오픈 카카오톡' : locale === 'ja' ? 'オープンカカオトーク' : locale === 'zh' ? 'Kakao 开放聊天' : 'Open KakaoTalk'}</strong>
                <small>{locale === 'ko' ? '참가 소식 · 실시간 공지' : locale === 'ja' ? 'お知らせ · リアルタイム案内' : locale === 'zh' ? '活动消息 · 实时通知' : 'Updates · live announcements'}</small>
              </span>
              <span className="contact__arrow">→</span>
            </a>
            <a className="contact contact--discord" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </span>
              <span className="contact__text">
                <strong>Discord</strong>
                <small>{locale === 'ko' ? '공식 디스코드 커뮤니티' : locale === 'ja' ? '公式 Discord コミュニティ' : locale === 'zh' ? '官方 Discord 社区' : 'Official Discord community'}</small>
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
                <small>{locale === 'ko' ? '파트너십 · 일반 문의' : locale === 'ja' ? 'パートナーシップ · 一般お問い合わせ' : locale === 'zh' ? '合作 · 一般咨询' : 'Partnerships · general inquiries'}</small>
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
                <small>{locale === 'ko' ? '공식 X (트위터)' : locale === 'ja' ? '公式 X (Twitter)' : locale === 'zh' ? '官方 X (Twitter)' : 'Official X (Twitter)'}</small>
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
                <small>{locale === 'ko' ? '네이버 블로그' : locale === 'ja' ? 'Naver ブログ' : locale === 'zh' ? 'Naver 博客' : 'Naver Blog'}</small>
              </span>
              <span className="contact__arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
