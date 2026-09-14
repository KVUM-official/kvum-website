'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

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
  blocks: { fourth: Block; third: Block; second: Block; first: Block };
};

type GalleryPhoto = { n: string; mod?: 'tall' | 'wide'; ext?: 'jpg' | 'png' };

const FOURTH_PHOTOS: GalleryPhoto[] = [
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

const THIRD_PHOTOS: GalleryPhoto[] = [
  { n: '1' },
  { n: '2' },
  { n: '3' },
  { n: '4' },
  { n: '5' },
  { n: '6' },
  { n: '7' },
  { n: '8' },
  { n: '9' },
];

const SECOND_PHOTOS: GalleryPhoto[] = [
  { n: '1' },
  { n: '2' },
  { n: '3' },
  { n: '4' },
  { n: '5' },
  { n: '6' },
  { n: '7' },
  { n: '8' },
];

const FIRST_PHOTOS: GalleryPhoto[] = [
  { n: '1' },
  { n: '2' },
  { n: '3' },
  { n: '4' },
  { n: '5' },
  { n: '6' },
  { n: '7' },
  { n: '8' },
];

const PHOTOS_BY_TAB: Record<string, { folder: string; prefix: string; label: string; photos: GalleryPhoto[] }> = {
  'g-4th': { folder: '4th', prefix: 'photo-', label: '4th', photos: FOURTH_PHOTOS },
  'g-3rd': { folder: '3rd', prefix: '3rd_', label: '3rd', photos: THIRD_PHOTOS },
  'g-2nd': { folder: '2nd', prefix: '2nd_', label: '2nd', photos: SECOND_PHOTOS },
  'g-1st': { folder: '1st', prefix: '1st_', label: '1st', photos: FIRST_PHOTOS },
};

const BLOCK_KEY_BY_TAB: Record<string, keyof Content['blocks']> = {
  'g-4th': 'fourth',
  'g-3rd': 'third',
  'g-2nd': 'second',
  'g-1st': 'first',
};

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
    },
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
    },
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
    },
  },
  zh: {
    heroLabel: 'Gallery',
    heroTitle: <>KVUM 现场的<br /><span className="grad">瞬间。</span></>,
    heroSub: '从第1届到第4届 —— 从派对房间到大型展厅，KVUM 记录的 XR 社区轨迹。',
    tabs: [
      { id: 'g-4th', num: '04', label: '4th · 2025.10', active: true },
      { id: 'g-3rd', num: '03', label: '3rd · 2025.03' },
      { id: 'g-2nd', num: '02', label: '2nd · 2024.06' },
      { id: 'g-1st', num: '01', label: '1st · 2024.03' },
    ],
    blocks: {
      fourth: {
        id: 'g-4th', num: '04', date: '2025 · 10 · 03', place: '首尔 · 文来',
        title: <>首届 XR 节日，<span className="grad">座无虚席。</span></>,
        desc: '史上最大规模的聚会，众多合作伙伴与嘉宾共同参与。',
      },
      third: {
        id: 'g-3rd', num: '03', date: '2025 · 03',
        title: <>稳居 <span className="grad">韩国最大规模。</span></>,
        desc: '成长为韩国最大 XR 用户主导线下活动的一届。',
      },
      second: {
        id: 'g-2nd', num: '02', date: '2024 · 06',
        title: <>参与 <span className="grad">正式扩展。</span></>,
        desc: '企业与机构参与扩大的第2届聚会。',
      },
      first: {
        id: 'g-1st', num: '01', date: '2024 · 03',
        title: <>一切的 <span className="grad">开始。</span></>,
        desc: '在首尔舍堂的小派对房间举办的首届 VR 用户聚会。',
      },
    },
  },
};

export function Gallery() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.ko;
  const b = c.blocks;
  const [active, setActive] = useState('g-4th');

  const activeBlock = b[BLOCK_KEY_BY_TAB[active]];
  const activeTabPhotos = PHOTOS_BY_TAB[active];

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
          <nav className="gallery__tabs" role="tablist" aria-label="Gallery sections">
            {c.tabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={`gallery__tab${active === tab.id ? ' is-active' : ''}`}
              >
                <span className="tab__num">{tab.num}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          <article className="gallery__block" id={activeBlock.id}>
            <header className="gallery__block-head">
              <div className="gallery__block-meta">
                <span className="gallery__block-num">{activeBlock.num}</span>
                <span className="gallery__block-date">{activeBlock.date}</span>
                {activeBlock.place && <span className="gallery__block-place">{activeBlock.place}</span>}
              </div>
              <h2 className="gallery__block-title">{activeBlock.title}</h2>
              <p className="gallery__block-desc">{activeBlock.desc}</p>
            </header>

            <div className="masonry">
              {activeTabPhotos.photos.map(p => (
                <figure
                  key={p.n}
                  className={`masonry__item${p.mod ? ` masonry__item--${p.mod}` : ''}`}
                >
                  <Image
                    src={`/images/gallery/${activeTabPhotos.folder}/${activeTabPhotos.prefix}${p.n}.${p.ext ?? 'jpg'}`}
                    alt={`${activeTabPhotos.label} KVUM photo ${p.n}`}
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

        </div>
      </section>
    </>
  );
}
