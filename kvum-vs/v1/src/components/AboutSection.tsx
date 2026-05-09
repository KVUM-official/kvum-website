'use client';

import { useLocale } from 'next-intl';

const CONTENT: Record<string, {
  titleH2: React.ReactNode;
  lead: React.ReactNode;
  body1: React.ReactNode;
  body2: string;
  items: string[];
}> = {
  ko: {
    titleH2: <><span className="grad">KVUM</span>이란?</>,
    lead: (
      <><span className="grad">KVUM</span>은 <strong>Korea VR User Meetup</strong>의 약자로,
      국내 XR 유저들을 중심으로 소통과 정보 교류를 위한 오프라인 모임입니다.</>
    ),
    body1: (
      <>2024년 3월 첫 모임을 시작으로, 유저 · 개발자 · 창업가 · XR 업계 관계자들이 함께 모여{' '}
      <strong>디바이스 체험</strong>, <strong>정보 공유</strong>,{' '}
      <strong>업계 트렌드에 대한 다양한 의견 교환</strong>을 통해 성장해 나가고 있습니다.</>
    ),
    body2: 'VR · AR · MR을 포함한 XR 전반을 다루며, 누구나 참여할 수 있는 열린 커뮤니티를 지향합니다. 국내 XR 시장의 건강하고 개방적인 생태계를 조성하는 것이 우리의 목표입니다.',
    items: [
      '국내 최대 규모 XR 유저 밋업',
      'VR · AR · MR 전반 커버',
      '유저 · 개발자 · 기업 오프라인 교류',
      '꾸준히 성장한 커뮤니티',
      '2024년 3월 첫 개최, 4회차 진행',
    ],
  },
  en: {
    titleH2: <>What is <span className="grad">KVUM</span>?</>,
    lead: (
      <><span className="grad">KVUM</span> stands for <strong>Korea VR User Meetup</strong> —
      an offline gathering for domestic XR users to connect and exchange information.</>
    ),
    body1: (
      <>Since our first meetup in March 2024, users, developers, entrepreneurs, and XR industry professionals
      have grown together through <strong>hands-on device experiences</strong>, <strong>information sharing</strong>,
      and <strong>open discussions on industry trends</strong>.</>
    ),
    body2: "We cover the entire XR spectrum including VR, AR, and MR, and we aim to be an open community anyone can join. Our goal is to foster a healthy and open ecosystem for Korea's XR market.",
    items: [
      "Korea's largest XR user meetup",
      'Covers VR · AR · MR in full',
      'Offline exchange for users · devs · companies',
      'A community that keeps growing',
      'Launched March 2024 · 4 meetups held',
    ],
  },
  ja: {
    titleH2: <><span className="grad">KVUM</span>とは？</>,
    lead: (
      <><span className="grad">KVUM</span>は <strong>Korea VR User Meetup</strong> の略で、
      韓国の XR ユーザーを中心とした情報交流のためのオフラインコミュニティです。</>
    ),
    body1: (
      <>2024年3月の第1回から、ユーザー・開発者・スタートアップ・XR業界関係者が集まり{' '}
      <strong>デバイス体験</strong>、<strong>情報共有</strong>、<strong>業界トレンドの意見交換</strong>を通じて成長しています。</>
    ),
    body2: 'VR · AR · MR を含む XR 全般を扱い、誰でも参加できるオープンなコミュニティを目指します。韓国の XR 市場における健全でオープンなエコシステムの構築が私たちの目標です。',
    items: [
      '韓国最大規模の XR ユーザーミートアップ',
      'VR · AR · MR 全般をカバー',
      'ユーザー · 開発者 · 企業のオフライン交流',
      '着実に成長するコミュニティ',
      '2024年3月初開催 · 4回実施',
    ],
  },
};

export function AboutSection() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.ko;

  return (
    <section className="section section--about" id="kvum">
      <div className="container">
        <div className="section__label">
          <span className="label__dot" />
          <span className="label__text">About KVUM</span>
        </div>
        <h2 className="section__title">{c.titleH2}</h2>

        <div className="about__grid">
          <div>
            <p className="about__lead-text">{c.lead}</p>
            <p className="about__body">{c.body1}</p>
            <p className="about__body">{c.body2}</p>
          </div>

          <aside className="about__side">
            <div className="side__label">At a glance</div>
            <div className="side__list">
              {c.items.map((item, i) => (
                <div className="side__item" key={i}>
                  <span className="side__item-dot" />
                  <div className="side__item-text">{item}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
