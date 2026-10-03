'use client';

import { useLocale } from 'next-intl';

const SURVEY_URL = 'https://forms.gle/sv8VVm2G9os5uNUf9';

const HERO_CONTENT: Record<string, {
  markLabel: string;
  markLoc: string;
  endedLabel: string;
  title: React.ReactNode;
  sub: string;
  cta: string;
}> = {
  ko: {
    markLabel: '다음 밋업',
    markLoc: '서울 문래',
    endedLabel: '성료',
    title: (
      <>
        <span className="word">함께해주셔서,</span>
        <br />
        <span className="word grad">감사합니다.</span>
      </>
    ),
    sub: '제 5회 KVUM이 많은 분들과 함께 성황리에 마무리됐습니다. 다음 밋업을 더 좋게 만들 수 있도록, 짧은 후기를 들려주세요.',
    cta: '만족도 조사 참여하기',
  },
  en: {
    markLabel: 'Next Meetup',
    markLoc: 'Seoul · Mullae',
    endedLabel: 'Wrapped',
    title: (
      <>
        <span className="word">Together,</span>
        <br />
        <span className="word grad">thank you.</span>
      </>
    ),
    sub: "The 5th KVUM wrapped up with a wonderful crowd. To make the next meetup even better, we'd love to hear your feedback — it only takes a moment.",
    cta: 'Take the Survey',
  },
  ja: {
    markLabel: '次回ミートアップ',
    markLoc: 'ソウル · 文來',
    endedLabel: '終了',
    title: (
      <>
        <span className="word">ご参加いただき、</span>
        <br />
        <span className="word grad">ありがとうございました。</span>
      </>
    ),
    sub: '第5回 KVUM は、多くの皆さまのご参加のもと、盛況のうちに幕を閉じました。次回のミートアップをより良いものにするため、ぜひ短いご感想をお聞かせください。',
    cta: 'アンケートに参加する',
  },
  zh: {
    markLabel: '下次聚会',
    markLoc: '首尔 · 文来',
    endedLabel: '圆满结束',
    title: (
      <>
        <span className="word">与你同行，</span>
        <br />
        <span className="word grad">感谢有你。</span>
      </>
    ),
    sub: '第5届 KVUM 在大家的陪伴下圆满落幕。为了让下一次聚会更精彩，请留下您的简短反馈。',
    cta: '参与满意度调查',
  },
};

export function Hero() {
  const locale = useLocale();
  const content = HERO_CONTENT[locale] ?? HERO_CONTENT.ko;

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
        <div className="hero__mark-dday">{content.endedLabel}</div>
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
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gradient"
          >
            <span>{content.cta}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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
