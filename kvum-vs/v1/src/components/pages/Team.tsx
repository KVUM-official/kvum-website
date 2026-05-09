'use client';

import { useLocale } from 'next-intl';

type Member = {
  avatar: string;
  c1: string;
  c2: string;
  role: string;
  name: string;
  alias?: string;
  bio: React.ReactNode;
  links?: Array<{ href: string; label: string; external?: boolean }>;
  lead?: boolean;
};

type Content = {
  heroLabel: string;
  heroTitle: React.ReactNode;
  heroSub: string;
  members: Member[];
  staffTitle: string;
  staffDesc: string;
  ctaLabel: string;
  ctaTitle: string;
  ctaDesc: string;
};

const CONTENT: Record<string, Content> = {
  ko: {
    heroLabel: 'KVUM Team',
    heroTitle: <>KVUM을 만드는<br /><span className="grad">사람들.</span></>,
    heroSub: '국내 XR 사용자들이 중심이 되어 소통과 정보 교류를 활발히 할 수 있는 플랫폼을 만드는 팀. 다양한 배경의 전문가들이 각자의 경험을 바탕으로 KVUM을 이끌고 있습니다.',
    members: [
      {
        avatar: '쭘', c1: '#FF2D7D', c2: '#00E0FF',
        role: 'Host · 대표',
        name: '김정현', alias: '쭘쭘',
        bio: <>KVUM 호스트이자 VR Insight 블로그 운영자.<br />국내 XR 시장과 사용자를 잇는 플랫폼을 만들고 있습니다. 행사 기획 · 파트너십 · 전반 운영 총괄.</>,
        links: [
          { href: 'https://blog.naver.com/vr_insight', label: 'Blog', external: true },
          { href: 'mailto:future1070@naver.com', label: 'Email' },
        ],
        lead: true,
      },
      {
        avatar: '권', c1: '#7B2FF7', c2: '#00E0FF',
        role: 'Organizer',
        name: '권뺌',
        bio: 'KVUM 운영팀. 행사 기획과 현장 진행을 함께 맡고 있습니다.',
      },
      {
        avatar: '순', c1: '#FF2D7D', c2: '#FFB84D',
        role: 'Organizer',
        name: '순탄',
        bio: 'KVUM 운영팀. 행사 기획과 현장 진행을 함께 맡고 있습니다.',
      },
    ],
    staffTitle: 'Staff',
    staffDesc: 'KVUM은 운영팀 외에도 현장에서 함께해주시는 스태프분들의 손길로 만들어집니다. 행사 당일 수많은 작은 순간들이 스태프분들의 기여로 이어지고 있습니다.',
    ctaLabel: 'Join KVUM',
    ctaTitle: '함께할 분을 찾고 있어요.',
    ctaDesc: 'XR 커뮤니티를 함께 키우고 싶은 분, 행사 운영에 관심 있는 분이라면 언제든 연락 주세요.',
  },
  en: {
    heroLabel: 'KVUM Team',
    heroTitle: <>The people behind<br /><span className="grad">KVUM.</span></>,
    heroSub: 'A team building a platform where Korea\'s XR users can connect and exchange information actively. Professionals from diverse backgrounds lead KVUM with their own experience.',
    members: [
      {
        avatar: 'J', c1: '#FF2D7D', c2: '#00E0FF',
        role: 'Host · CEO',
        name: 'Kim Junghyun', alias: 'JJum',
        bio: <>KVUM host and VR Insight blog operator.<br />Building a platform that connects Korea&apos;s XR market with its users. Leads event planning, partnerships, and overall operations.</>,
        links: [
          { href: 'https://blog.naver.com/vr_insight', label: 'Blog', external: true },
          { href: 'mailto:future1070@naver.com', label: 'Email' },
        ],
        lead: true,
      },
      {
        avatar: 'K', c1: '#7B2FF7', c2: '#00E0FF',
        role: 'Organizer',
        name: 'Kwon-bbaem',
        bio: 'KVUM operations team. Helps with event planning and on-site execution.',
      },
      {
        avatar: 'S', c1: '#FF2D7D', c2: '#FFB84D',
        role: 'Organizer',
        name: 'Soontan',
        bio: 'KVUM operations team. Helps with event planning and on-site execution.',
      },
    ],
    staffTitle: 'Staff',
    staffDesc: 'Beyond the operations team, KVUM is made possible by staff who join us on-site. Countless small moments on event day come together through their contributions.',
    ctaLabel: 'Join KVUM',
    ctaTitle: 'We\'re looking for people to join us.',
    ctaDesc: 'If you want to help grow the XR community or are interested in event operations, reach out anytime.',
  },
  ja: {
    heroLabel: 'KVUM Team',
    heroTitle: <>KVUM を作る<br /><span className="grad">人々。</span></>,
    heroSub: '韓国の XR ユーザーが中心となって交流と情報交換を活発に行えるプラットフォームを作るチーム。多様なバックグラウンドの専門家が、それぞれの経験を基に KVUM を導いています。',
    members: [
      {
        avatar: 'J', c1: '#FF2D7D', c2: '#00E0FF',
        role: 'Host · 代表',
        name: 'キム・ジョンヒョン', alias: 'チュムチュム',
        bio: <>KVUM ホスト兼 VR Insight ブログ運営者。<br />韓国 XR 市場とユーザーをつなぐプラットフォームを構築中。イベント企画・パートナーシップ・全般運営を統括。</>,
        links: [
          { href: 'https://blog.naver.com/vr_insight', label: 'Blog', external: true },
          { href: 'mailto:future1070@naver.com', label: 'Email' },
        ],
        lead: true,
      },
      {
        avatar: 'K', c1: '#7B2FF7', c2: '#00E0FF',
        role: 'Organizer',
        name: 'クォンッペム',
        bio: 'KVUM 運営チーム。イベント企画と当日現場進行を担当。',
      },
      {
        avatar: 'S', c1: '#FF2D7D', c2: '#FFB84D',
        role: 'Organizer',
        name: 'スンタン',
        bio: 'KVUM 運営チーム。イベント企画と当日現場進行を担当。',
      },
    ],
    staffTitle: 'Staff',
    staffDesc: 'KVUM は運営チームだけでなく、現場で共にしてくださるスタッフの皆さんの手で作られています。イベント当日の数多くの小さな瞬間がスタッフの貢献によって繋がっています。',
    ctaLabel: 'Join KVUM',
    ctaTitle: '一緒に活動してくれる方を探しています。',
    ctaDesc: 'XR コミュニティを共に育てたい方、イベント運営に興味のある方は、いつでもご連絡ください。',
  },
};

export function Team() {
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

      <section className="section section--team">
        <div className="container">
          <div className="team__grid">
            {c.members.map((m, i) => (
              <article
                key={i}
                className={`team-card${m.lead ? ' team-card--lead' : ''}`}
              >
                <div
                  className="team-card__avatar"
                  style={{ '--c1': m.c1, '--c2': m.c2 } as React.CSSProperties}
                >
                  {m.avatar}
                </div>
                <div className="team-card__role">{m.role}</div>
                <h2 className="team-card__name">
                  {m.name}
                  {m.alias && <span className="team-card__alias">{m.alias}</span>}
                </h2>
                <p className="team-card__bio">{m.bio}</p>
                {m.links && (
                  <div className="team-card__links">
                    {m.links.map(link => (
                      <a
                        key={link.label}
                        href={link.href}
                        {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="team__staff">
            <div className="team__staff-title">{c.staffTitle}</div>
            <p className="team__staff-desc">{c.staffDesc}</p>
          </div>

          <div className="team__cta">
            <div className="team__cta-label">{c.ctaLabel}</div>
            <h3 className="team__cta-title">{c.ctaTitle}</h3>
            <p className="team__cta-desc">{c.ctaDesc}</p>
            <a className="btn btn--primary" href="mailto:future1070@naver.com">
              <span>future1070@naver.com</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
