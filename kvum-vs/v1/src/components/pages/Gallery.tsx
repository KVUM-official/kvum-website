'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

type Block = {
  id: string;
  num: string;
  date: string;
  place?: string;
  title: React.ReactNode;
  desc: string;
};

type Content = {
  heroLabel: string;
  heroTitle: React.ReactNode;
  heroSub: string;
  tabs: Array<{ id: string; num: string; label: string; active?: boolean }>;
  blocks: { fourth: Block; third: Block; second: Block; first: Block; values: Block };
  quad: Array<{ src: string; alt: string; caption: string }>;
  footnote: string;
};

const FOURTH_PHOTOS: Array<{ n: string; mod?: 'tall' | 'wide'; ext?: 'jpg' | 'png' }> = [
  { n: '01', mod: 'tall' },
  { n: '02' },
  { n: '03' },
  { n: '04', mod: 'wide' },
  { n: '05' },
  { n: '06', mod: 'tall' },
  { n: '07' },
  { n: '08' },
  { n: '09' },
  { n: '10', mod: 'tall' },
  { n: '11' },
  { n: '12', mod: 'wide' },
  { n: '13' },
  { n: '14' },
  { n: '15', mod: 'tall' },
  { n: '16' },
  { n: '17' },
  { n: '18' },
  { n: '19', mod: 'wide' },
  { n: '20' },
  { n: '21', ext: 'png' },
];

const CONTENT: Record<string, Content> = {
  ko: {
    heroLabel: 'Gallery',
    heroTitle: <>KVUM 현장의<br /><span className="grad">순간들.</span></>,
    heroSub: '1회차부터 4회차까지 — 파티룸에서 시작해 대형 전시장까지, KVUM이 기록한 XR 커뮤니티의 발자취입니다.',
    tabs: [
      { id: 'g-4th', num: '04', label: '4th · 2025.10', active: true },
      { id: 'g-3rd', num: '03', label: '3rd · 2025.03' },
      { id: 'g-2nd', num: '02', label: '2nd · 2024.06' },
      { id: 'g-1st', num: '01', label: '1st · 2024.03' },
      { id: 'g-values', num: '★', label: 'Values' },
    ],
    blocks: {
      fourth: {
        id: 'g-4th', num: '04', date: '2025 · 10 · 03', place: '서울 문래',
        title: <>첫 XR 축제, <span className="grad">전시장을 가득 채우다.</span></>,
        desc: '역대 최대 규모로, 다수의 파트너사와 연사가 함께한 밋업.',
      },
      third: {
        id: 'g-3rd', num: '03', date: '2025 · 03',
        title: <>국내 최대 규모로 <span className="grad">자리잡다.</span></>,
        desc: '국내 최대 XR 유저 중심 오프라인 행사로 성장한 회차.',
      },
      second: {
        id: 'g-2nd', num: '02', date: '2024 · 06',
        title: <>참여가 <span className="grad">본격적으로 확대되다.</span></>,
        desc: '기업과 기관의 참여가 확장된 두 번째 밋업.',
      },
      first: {
        id: 'g-1st', num: '01', date: '2024 · 03',
        title: <>모든 것의 <span className="grad">시작.</span></>,
        desc: '서울 사당의 작은 파티룸에서 시작된 첫 VR 유저 밋업.',
      },
      values: {
        id: 'g-values', num: '★', date: 'KVUM의 장면들',
        title: <>KVUM이 그리는 <span className="grad">네 가지 장면.</span></>,
        desc: '체험 · 교류 · 커뮤니티 · 생태계 — KVUM이 만드는 순간들.',
      },
    },
    quad: [
      { src: '/images/photos/value-experience.jpg', alt: '체험', caption: 'Experience' },
      { src: '/images/photos/value-exchange.png',   alt: '교류', caption: 'Exchange' },
      { src: '/images/photos/value-community.jpg',  alt: '커뮤니티', caption: 'Community' },
      { src: '/images/photos/value-ecosystem.jpg',  alt: '생태계', caption: 'Ecosystem' },
    ],
    footnote: '* 1/2/3회차 사진은 아직 일부만 업로드되어 있습니다. 추가 사진은 순차적으로 공개 예정입니다.',
  },
  en: {
    heroLabel: 'Gallery',
    heroTitle: <>Moments from<br /><span className="grad">KVUM.</span></>,
    heroSub: 'From the 1st to the 4th — starting in a party room and growing to a full exhibition hall, the journey of Korea\'s XR community as recorded by KVUM.',
    tabs: [
      { id: 'g-4th', num: '04', label: '4th · 2025.10', active: true },
      { id: 'g-3rd', num: '03', label: '3rd · 2025.03' },
      { id: 'g-2nd', num: '02', label: '2nd · 2024.06' },
      { id: 'g-1st', num: '01', label: '1st · 2024.03' },
      { id: 'g-values', num: '★', label: 'Values' },
    ],
    blocks: {
      fourth: {
        id: 'g-4th', num: '04', date: '2025 · 10 · 03', place: 'Seoul Mullae',
        title: <>The first XR festival — <span className="grad">filling the hall.</span></>,
        desc: 'Our largest meetup ever, joined by many partners and speakers.',
      },
      third: {
        id: 'g-3rd', num: '03', date: '2025 · 03',
        title: <>Establishing as <span className="grad">Korea&apos;s largest.</span></>,
        desc: 'Grew into Korea\'s largest user-driven XR offline event.',
      },
      second: {
        id: 'g-2nd', num: '02', date: '2024 · 06',
        title: <>Participation <span className="grad">expands in earnest.</span></>,
        desc: 'The second meetup with broader participation from companies and institutions.',
      },
      first: {
        id: 'g-1st', num: '01', date: '2024 · 03',
        title: <>The start of <span className="grad">everything.</span></>,
        desc: 'Our first VR user meetup, started in a small party room in Sadang, Seoul.',
      },
      values: {
        id: 'g-values', num: '★', date: 'Scenes of KVUM',
        title: <>The four scenes <span className="grad">KVUM paints.</span></>,
        desc: 'Experience · Exchange · Community · Ecosystem — moments KVUM creates.',
      },
    },
    quad: [
      { src: '/images/photos/value-experience.jpg', alt: 'Experience', caption: 'Experience' },
      { src: '/images/photos/value-exchange.png',   alt: 'Exchange',   caption: 'Exchange' },
      { src: '/images/photos/value-community.jpg',  alt: 'Community',  caption: 'Community' },
      { src: '/images/photos/value-ecosystem.jpg',  alt: 'Ecosystem',  caption: 'Ecosystem' },
    ],
    footnote: '* Photos from the 1st/2nd/3rd events are partially uploaded. More will be added gradually.',
  },
  ja: {
    heroLabel: 'Gallery',
    heroTitle: <>KVUM 現場の<br /><span className="grad">瞬間たち。</span></>,
    heroSub: '第1回から第4回まで — パーティールームから大型展示場まで、KVUM が記録した XR コミュニティの軌跡です。',
    tabs: [
      { id: 'g-4th', num: '04', label: '4th · 2025.10', active: true },
      { id: 'g-3rd', num: '03', label: '3rd · 2025.03' },
      { id: 'g-2nd', num: '02', label: '2nd · 2024.06' },
      { id: 'g-1st', num: '01', label: '1st · 2024.03' },
      { id: 'g-values', num: '★', label: 'Values' },
    ],
    blocks: {
      fourth: {
        id: 'g-4th', num: '04', date: '2025 · 10 · 03', place: 'ソウル・ムルレ',
        title: <>初の XR フェスティバル、<span className="grad">展示場を満たす。</span></>,
        desc: '史上最大規模のミートアップ。多くのパートナー企業とスピーカーが共に参加。',
      },
      third: {
        id: 'g-3rd', num: '03', date: '2025 · 03',
        title: <>韓国最大規模として <span className="grad">確立する。</span></>,
        desc: '韓国最大の XR ユーザー中心オフラインイベントへと成長した回。',
      },
      second: {
        id: 'g-2nd', num: '02', date: '2024 · 06',
        title: <>参加が <span className="grad">本格的に拡大。</span></>,
        desc: '企業と機関の参加が広がった第2回ミートアップ。',
      },
      first: {
        id: 'g-1st', num: '01', date: '2024 · 03',
        title: <>すべての <span className="grad">始まり。</span></>,
        desc: 'ソウル・サダンの小さなパーティールームで始まった初の VR ユーザーミートアップ。',
      },
      values: {
        id: 'g-values', num: '★', date: 'KVUM のシーン',
        title: <>KVUM が描く <span className="grad">四つのシーン。</span></>,
        desc: '体験 · 交流 · コミュニティ · エコシステム — KVUM が創る瞬間。',
      },
    },
    quad: [
      { src: '/images/photos/value-experience.jpg', alt: '体験',         caption: 'Experience' },
      { src: '/images/photos/value-exchange.png',   alt: '交流',         caption: 'Exchange' },
      { src: '/images/photos/value-community.jpg',  alt: 'コミュニティ', caption: 'Community' },
      { src: '/images/photos/value-ecosystem.jpg',  alt: 'エコシステム', caption: 'Ecosystem' },
    ],
    footnote: '* 1/2/3回の写真は一部のみアップロードされています。追加写真は順次公開予定です。',
  },
};

export function Gallery() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.ko;
  const b = c.blocks;

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

      <section className="section section--gallery">
        <div className="container">
          <nav className="gallery__tabs" aria-label="Gallery sections">
            {c.tabs.map(tab => (
              <a key={tab.id} href={`#${tab.id}`} className={`gallery__tab${tab.active ? ' is-active' : ''}`}>
                <span className="tab__num">{tab.num}</span>
                <span>{tab.label}</span>
              </a>
            ))}
          </nav>

          <article className="gallery__block" id={b.fourth.id}>
            <header className="gallery__block-head">
              <div className="gallery__block-meta">
                <span className="gallery__block-num">{b.fourth.num}</span>
                <span className="gallery__block-date">{b.fourth.date}</span>
                {b.fourth.place && <span className="gallery__block-place">{b.fourth.place}</span>}
              </div>
              <h2 className="gallery__block-title">{b.fourth.title}</h2>
              <p className="gallery__block-desc">{b.fourth.desc}</p>
            </header>

            <div className="masonry">
              {FOURTH_PHOTOS.map(p => (
                <figure
                  key={p.n}
                  className={`masonry__item${p.mod ? ` masonry__item--${p.mod}` : ''}`}
                >
                  <Image
                    src={`/images/gallery/4th/photo-${p.n}.${p.ext ?? 'jpg'}`}
                    alt={`4th KVUM photo ${p.n}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 760px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
              ))}
            </div>
          </article>

          {[b.third, b.second, b.first].map((block, i) => {
            const heroImg = ['/images/photos/history-3rd.jpg', '/images/photos/history-2nd.jpg', '/images/photos/history-1st.jpg'][i];
            const heroAlt = ['3rd KVUM', '2nd KVUM', '1st KVUM'][i];
            return (
              <article key={block.id} className="gallery__block" id={block.id}>
                <header className="gallery__block-head">
                  <div className="gallery__block-meta">
                    <span className="gallery__block-num">{block.num}</span>
                    <span className="gallery__block-date">{block.date}</span>
                  </div>
                  <h2 className="gallery__block-title">{block.title}</h2>
                  <p className="gallery__block-desc">{block.desc}</p>
                </header>
                <div className="gallery__single">
                  <figure className="gallery__hero-img">
                    <Image
                      src={heroImg}
                      alt={heroAlt}
                      width={1600}
                      height={900}
                      sizes="(max-width: 1100px) 100vw, 1100px"
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </figure>
                </div>
              </article>
            );
          })}

          <article className="gallery__block" id={b.values.id}>
            <header className="gallery__block-head">
              <div className="gallery__block-meta">
                <span className="gallery__block-num">{b.values.num}</span>
                <span className="gallery__block-date">{b.values.date}</span>
              </div>
              <h2 className="gallery__block-title">{b.values.title}</h2>
              <p className="gallery__block-desc">{b.values.desc}</p>
            </header>
            <div className="gallery__quad">
              {c.quad.map(item => (
                <figure key={item.caption} className="quad__item">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 760px) 100vw, 50vw"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </article>

          <p className="gallery__footnote">{c.footnote}</p>
        </div>
      </section>
    </>
  );
}
