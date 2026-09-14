'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Partner = { id: number; name: string };
type PartnersByGeneration = Record<string, Partner[]>;

// 새 기수가 열리면 이 배열 끝에 추가하면 탭이 자동으로 늘어난다. (예: [..., '5th'])
const GENERATIONS = ['1st', '2nd', '3rd', '4th', '5th'] as const;
const DEFAULT_GENERATION = GENERATIONS[GENERATIONS.length - 1];

const ASSET_VERSION = process.env.NEXT_PUBLIC_ASSET_VERSION ?? '';

const CONTENT: Record<string, { title: React.ReactNode; lead: string }> = {
  ko: {
    title: <>함께 만든 <span className="grad">파트너들.</span></>,
    lead: 'KVUM을 함께 만든 XR 기업과 커뮤니티.\n유저 · 기업 · 현직자를 잇는 진정한 XR 축제의 주역입니다.',
  },
  en: {
    title: <>Our <span className="grad">partners</span></>,
    lead: "The XR companies and communities who made KVUM happen —\nthe true heroes of a festival that bridges users, companies, and practitioners.",
  },
  ja: {
    title: <>共に作った<span className="grad">パートナーたち。</span></>,
    lead: 'KVUM を共に作った XR 企業とコミュニティ。\nユーザー · 企業 · 現職者をつなぐ真の XR フェスティバルの主役たちです。',
  },
  zh: {
    title: <>共同打造的 <span className="grad">合作伙伴。</span></>,
    lead: '与 KVUM 共同打造的 XR 企业与社区。\n他们是连接用户 · 企业 · 从业者的真正 XR 节日的主角。',
  },
};

export function PartnersSection() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.ko;
  const [data, setData] = useState<PartnersByGeneration>({});
  const [active, setActive] = useState<string>(DEFAULT_GENERATION);

  useEffect(() => {
    fetch('/data/partners.json')
      .then(res => res.json())
      .then((json: PartnersByGeneration) => setData(json))
      .catch(() => {});
  }, []);

  const partners = data[active] ?? [];

  return (
    <section className="section section--partners" id="partners">
      <div className="container">
        <div className="section__label">
          <span className="label__dot" />
          <span className="label__text">Partners</span>
        </div>
        <h2 className="section__title">{c.title}</h2>
        <p className="section__lead" style={{ whiteSpace: 'pre-line' }}>{c.lead}</p>

        <div className="partners__tabs" role="tablist" aria-label="KVUM generation">
          {GENERATIONS.slice().reverse().map(gen => (
            <button
              key={gen}
              type="button"
              role="tab"
              aria-selected={active === gen}
              className={`partners__tab${active === gen ? ' is-active' : ''}`}
              onClick={() => setActive(gen)}
            >
              {gen.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="partners__grid" key={active}>
          {partners.map(p => (
            <div className="partner" key={p.id}>
              <Image
                src={`/images/partners/${active}/${p.id}.png?v=${ASSET_VERSION}`}
                alt={p.name}
                width={220}
                height={72}
                style={{ maxHeight: 72, width: 'auto', height: 'auto', objectFit: 'contain' }}
                loading="lazy"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
