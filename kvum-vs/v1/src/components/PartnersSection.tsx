'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';

const PARTNER_IDS = [1, 2, 3, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

const CONTENT: Record<string, { title: React.ReactNode; lead: string }> = {
  ko: {
    title: <>함께 만든 <span className="grad">파트너들.</span></>,
    lead: '4회차 KVUM을 함께 만든 XR 기업과 커뮤니티.\n유저 · 기업 · 현직자를 잇는 진정한 XR 축제의 주역입니다.',
  },
  en: {
    title: <>Our <span className="grad">partners</span></>,
    lead: "The XR companies and communities who made the 4th KVUM happen —\nthe true heroes of a festival that bridges users, companies, and practitioners.",
  },
  ja: {
    title: <>共に作った<span className="grad">パートナーたち。</span></>,
    lead: '第4回 KVUM を共に作った XR 企業とコミュニティ。\nユーザー · 企業 · 現職者をつなぐ真の XR フェスティバルの主役たちです。',
  },
  zh: {
    title: <>共同打造的 <span className="grad">合作伙伴。</span></>,
    lead: '与第4届 KVUM 共同打造的 XR 企业与社区。\n他们是连接用户 · 企业 · 从业者的真正 XR 节日的主角。',
  },
};

export function PartnersSection() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.ko;

  return (
    <section className="section section--partners" id="partners">
      <div className="container">
        <div className="section__label">
          <span className="label__dot" />
          <span className="label__text">Partners</span>
        </div>
        <h2 className="section__title">{c.title}</h2>
        <p className="section__lead" style={{ whiteSpace: 'pre-line' }}>{c.lead}</p>

        <h3 className="partners__subtitle">— 4th KVUM Partners &amp; Communities</h3>
        <div className="partners__grid">
          {PARTNER_IDS.map(id => (
            <div className="partner" key={id}>
              <Image
                src={`/images/partners/${id}.png`}
                alt="Partner"
                width={220}
                height={72}
                style={{ maxHeight: 72, width: 'auto', height: 'auto', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
