'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';

const HERO_CONTENT: Record<string, {
  markLabel: string;
  markLoc: string;
  title: React.ReactNode;
  sub: React.ReactNode;
  cta: string;
}> = {
  ko: {
    markLabel: '다음 밋업',
    markLoc: '서울 문래',
    title: (
      <>
        <span className="word">체험하고,</span>{' '}
        <span className="word">소통하고,</span>
        <br />
        <span className="word">함께 만드는</span>{' '}
        <span className="word grad">XR 무브먼트.</span>
      </>
    ),
    sub: (
      <>
        KVUM (크붐)은 국내 XR 유저 · 개발자 · 업계 관계자가 한자리에 모이는{' '}
        <strong>국내 최대 규모의 XR 유저 밋업</strong>입니다.
      </>
    ),
    cta: '5th KVUM 자세히 보기',
  },
  en: {
    markLabel: 'Next Meetup',
    markLoc: 'Seoul · Mullae',
    title: (
      <>
        <span className="word">Experience,</span>{' '}
        <span className="word">connect,</span>
        <br />
        <span className="word">and build the</span>{' '}
        <span className="word grad">XR movement.</span>
      </>
    ),
    sub: (
      <>
        KVUM is a place where Korea&apos;s XR users, developers, and industry professionals gather in one room —{' '}
        <strong>the country&apos;s largest XR user meetup</strong>.
      </>
    ),
    cta: 'Join 5th KVUM',
  },
  ja: {
    markLabel: '次回ミートアップ',
    markLoc: 'ソウル · 文來',
    title: (
      <>
        <span className="word">体験し、</span>
        <span className="word">つながり、</span>
        <br />
        <span className="word">共に創る</span>{' '}
        <span className="word grad">XRムーブメント。</span>
      </>
    ),
    sub: (
      <>
        KVUM は韓国の XR ユーザー、開発者、業界関係者が一つの空間に集う — <strong>国内最大規模の XR ユーザーミートアップ</strong>です。
      </>
    ),
    cta: '第5回 KVUM に参加する',
  },
};

export function Hero() {
  const locale = useLocale();
  const content = HERO_CONTENT[locale] ?? HERO_CONTENT.ko;
  const [dday, setDday] = useState('D-—');

  useEffect(() => {
    const target = new Date('2026-10-03T00:00:00');
    const day = 1000 * 60 * 60 * 24;
    const diff = Math.ceil((target.getTime() - new Date(new Date().toDateString()).getTime()) / day);
    if (diff > 0) setDday(`D-${diff}`);
    else if (diff === 0) setDday('D-DAY');
    else setDday(`D+${Math.abs(diff)}`);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <header className="hero" id="top">
      {/* Editorial 5TH mark */}
      <aside className="hero__mark">
        <div className="hero__mark-line" />
        <div className="hero__mark-label">{content.markLabel}</div>
        <div className="hero__mark-headline">
          <span className="hero__mark-num">05<em>TH</em></span>
          <span className="hero__mark-brand">KVUM</span>
        </div>
        <div className="hero__mark-meta">
          <span>2026</span>
          <span>10</span>
          <span>03</span>
        </div>
        <div className="hero__mark-loc">{content.markLoc}</div>
        <div className="hero__mark-dday">{dday}</div>
      </aside>

      <div className="hero__inner">
        <div className="hero__badge">
          <span className="dot" />
          <span>KOREA · VR · USER · MEETUP</span>
        </div>
        <h1 className="hero__title">{content.title}</h1>
        <p className="hero__sub">{content.sub}</p>
        <div className="hero__cta">
          <a
            href="#join"
            className="btn btn--primary"
            onClick={e => { e.preventDefault(); scrollTo('join'); }}
          >
            <span>{content.cta}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <a
        className="hero__scroll"
        href="#next-event"
        aria-label="scroll"
        onClick={e => { e.preventDefault(); scrollTo('next-event'); }}
      />
    </header>
  );
}
