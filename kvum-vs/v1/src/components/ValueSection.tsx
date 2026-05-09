'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

type ValueItem = { num: string; title: string; desc: string; img: string; imgAlt: string; };

const VALUES: ValueItem[] = [
  { num: '01 — EXPERIENCE', img: '/images/photos/value-experience.jpg', imgAlt: '체험을 통한 기술 이해',
    title: '', desc: '' },
  { num: '02 — EXCHANGE', img: '/images/photos/value-exchange.png', imgAlt: '사용자와 현업자 간 정보 교류',
    title: '', desc: '' },
  { num: '03 — COMMUNITY', img: '/images/photos/value-community.jpg', imgAlt: 'XR 커뮤니티 문화 구축',
    title: '', desc: '' },
  { num: '04 — ECOSYSTEM', img: '/images/photos/value-ecosystem.jpg', imgAlt: '국내 XR 생태계 확대',
    title: '', desc: '' },
];

const TITLES: Record<string, { heading: React.ReactNode; items: Array<{ title: string; desc: string }> }> = {
  ko: {
    heading: <>KVUM을 움직이는<br /><span className="grad">네 가지 가치.</span></>,
    items: [
      { title: '체험을 통한 기술 이해', desc: 'XR 기술은 텍스트나 영상만으로는 완전히 이해하기 어렵습니다. KVUM은 다양한 기기와 콘텐츠를 직접 체험하고, 경험을 공유할 수 있는 공간을 제공합니다.' },
      { title: '사용자와 현업자 간 정보 교류', desc: 'KVUM은 XR 기기 사용자만을 위한 자리가 아닙니다. 콘텐츠·하드웨어 개발자, 업계 관계자들도 함께 최신 트렌드와 현실적인 피드백을 교환합니다.' },
      { title: 'XR 커뮤니티 문화 구축', desc: '단순한 기기 전시회가 아닌, 유저 주도로 만들어가는 커뮤니티 기반 행사. 서로의 장비와 생각을 존중하고 경험을 공유하며 커뮤니티 문화를 구축합니다.' },
      { title: '국내 XR 생태계 확대', desc: '전 세계 XR 시장이 빠르게 성장하는 지금, 국내 XR 유저 · 개발자 · 기업이 한자리에 모여 건강한 성장에 기여할 수 있는 공간을 만듭니다.' },
    ],
  },
  en: {
    heading: <>The four values<br /><span className="grad">that drive KVUM.</span></>,
    items: [
      { title: 'Understanding tech through hands-on', desc: 'XR technology cannot be fully understood through text or video alone. KVUM offers a space for direct experience with a wide range of devices and content.' },
      { title: 'Users meet practitioners', desc: 'KVUM isn\'t just for XR device users. Content and hardware developers, industry professionals all exchange the latest trends and real-world feedback.' },
      { title: 'Building XR community culture', desc: 'Not just a device expo — a user-led, community-based event. By respecting each other\'s gear and ideas, we build a culture together.' },
      { title: "Expanding Korea's XR ecosystem", desc: 'As the global XR market grows rapidly, we create space where Korean XR users, developers, and companies can contribute to healthy growth together.' },
    ],
  },
  ja: {
    heading: <>KVUM を動かす<br /><span className="grad">四つの価値観。</span></>,
    items: [
      { title: '体験を通じた技術理解', desc: 'XR 技術はテキストや映像だけでは完全に理解できません。KVUM は様々なデバイスとコンテンツを直接体験し、経験を共有できる場を提供します。' },
      { title: 'ユーザーと現場の交流', desc: 'KVUM は XR デバイスユーザーだけのための場ではありません。コンテンツ・ハードウェア開発者、業界関係者も共に最新トレンドと現実的なフィードバックを交換します。' },
      { title: 'XR コミュニティ文化の構築', desc: '単なるデバイス展示会ではなく、ユーザー主導のコミュニティ型イベント。互いの機材と考えを尊重し、経験を共有しながらコミュニティ文化を築きます。' },
      { title: '韓国 XR エコシステムの拡大', desc: 'グローバル XR 市場が急成長する今、韓国の XR ユーザー・開発者・企業が一堂に集い、健全な成長に貢献できる場を創ります。' },
    ],
  },
};

export function ValueSection() {
  const locale = useLocale();
  const t = TITLES[locale] ?? TITLES.ko;

  return (
    <section className="section section--values" id="values">
      <div className="container">
        <div className="section__label section__label--light">
          <span className="label__dot" />
          <span className="label__text">Our Values</span>
        </div>
        <h2 className="section__title section__title--light">{t.heading}</h2>

        <div className="values__grid">
          {VALUES.map((v, i) => (
            <article className="value" key={v.num}>
              <div className="value__media">
                <Image src={v.img} alt={v.imgAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="value__body">
                <div className="value__num">{v.num}</div>
                <h3 className="value__title">{t.items[i].title}</h3>
                <p className="value__desc">{t.items[i].desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
