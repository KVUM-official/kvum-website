'use client';

import { useLocale } from 'next-intl';

type ProgramItem = { num: string; title: string; desc: React.ReactNode; cls: string; };

const PROGRAMS: Record<string, ProgramItem[]> = {
  ko: [
    { cls: 'program--1', num: '01 — XR DEVICES', title: 'XR 디바이스 체험존',
      desc: <>참가자와 기업이 가져온 다양한 HMD · 트래커 · AR 글래스 등을 <strong>직접 체험</strong>. Quest · PICO · VIVE · Play For Dream · MeganeX · 빅스크린 비욘드 등 평소 접하기 힘든 하이엔드 장비까지 모두 한자리에.</> },
    { cls: 'program--2', num: '02 — SPEAKER SESSIONS', title: '연사 초청 세션',
      desc: <>XR 업계 전문가와 기업 관계자의 <strong>현장 인사이트</strong>. SKT · 어반울프게임즈 · HTC · Shiftall · Play For Dream 등 국내외 연사들이 시장 전망과 개발 노하우를 직접 전합니다.</> },
    { cls: 'program--3', num: '03 — NETWORKING', title: '자유 토론 & 네트워킹',
      desc: <>유저 · 개발자 · 업계 관계자 간 <strong>자유로운 소통</strong> 시간. 장비를 체험하며 서로의 경험을 나누고, 전문 통역가 지원으로 해외 게스트와도 막힘없이 대화할 수 있습니다.</> },
    { cls: 'program--4', num: '04 — PRIZES', title: '경품 & 깜짝 이벤트',
      desc: <>참가자와 후원 기업이 함께하는 이벤트. 4회차엔 <strong>PICO 4 Ultra</strong> · 뮤토크 2 · bHaptics 스타터 번들 · AMVR 세트 등 <strong>11종 21명 추첨</strong>이 진행되었습니다.</> },
  ],
  en: [
    { cls: 'program--1', num: '01 — XR DEVICES', title: 'XR device hands-on zone',
      desc: <>HMDs, trackers, AR glasses — <strong>all hands-on</strong>, brought by participants and partner companies. Quest · PICO · VIVE · Play For Dream · MeganeX · Bigscreen Beyond — even high-end devices rarely seen in public.</> },
    { cls: 'program--2', num: '02 — SPEAKER SESSIONS', title: 'Invited speaker sessions',
      desc: <><strong>On-the-ground insights</strong> from XR industry experts and company leaders. SKT · Urban Wolf Games · HTC · Shiftall · Play For Dream and other speakers from home and abroad.</> },
    { cls: 'program--3', num: '03 — NETWORKING', title: 'Open discussion & networking',
      desc: <>Free <strong>cross-communication</strong> among users, developers, and industry folks. Try the gear, share your story, and chat smoothly with international guests via professional interpreters.</> },
    { cls: 'program--4', num: '04 — PRIZES', title: 'Prizes & surprise events',
      desc: <>Co-hosted raffle events with sponsor companies. At the 4th KVUM, <strong>PICO 4 Ultra</strong>, mutalk 2, bHaptics Starter Bundle, AMVR Set and more — <strong>11 prizes for 21 winners</strong>.</> },
  ],
  ja: [
    { cls: 'program--1', num: '01 — XR DEVICES', title: 'XR デバイス体験ゾーン',
      desc: <>参加者と企業が持参した様々な HMD · トラッカー · AR グラスを <strong>直接体験</strong>。Quest · PICO · VIVE · Play For Dream · MeganeX · Bigscreen Beyond など普段なかなか触れないハイエンド機器まで一堂に。</> },
    { cls: 'program--2', num: '02 — SPEAKER SESSIONS', title: 'スピーカー招待セッション',
      desc: <>XR 業界専門家と企業関係者による <strong>現場インサイト</strong>。SKT · Urban Wolf Games · HTC · Shiftall · Play For Dream など国内外のスピーカーが市場展望と開発ノウハウを直接伝えます。</> },
    { cls: 'program--3', num: '03 — NETWORKING', title: '自由討論 & ネットワーキング',
      desc: <>ユーザー · 開発者 · 業界関係者間の <strong>自由なコミュニケーション</strong>時間。機器を体験しながら経験を共有し、専門通訳のサポートで海外ゲストとも会話が弾みます。</> },
    { cls: 'program--4', num: '04 — PRIZES', title: '景品 & サプライズイベント',
      desc: <>参加者と後援企業が共に楽しむイベント。第4回では <strong>PICO 4 Ultra</strong> · mutalk 2 · bHaptics スターターバンドル · AMVR セットなど <strong>11種21名抽選</strong>が行われました。</> },
  ],
};

const HEADING: Record<string, React.ReactNode> = {
  ko: <>KVUM의 <span className="grad">프로그램.</span></>,
  en: <>KVUM&apos;s <span className="grad">core programs</span></>,
  ja: <>KVUM の <span className="grad">プログラム。</span></>,
};

const LEAD: Record<string, string> = {
  ko: '네 가지 축으로 구성된 KVUM의 핵심 프로그램.\n체험부터 네트워킹까지 온전히 즐길 수 있는 하루.',
  en: 'Four pillars that make KVUM — a full day to enjoy from hands-on to networking.',
  ja: '4つの柱で構成された KVUM のコアプログラム。\n体験からネットワーキングまで満喫できる一日。',
};

export function CTASection() {
  const locale = useLocale();
  const programs = PROGRAMS[locale] ?? PROGRAMS.ko;

  return (
    <section className="section section--programs" id="programs">
      <div className="container">
        <div className="section__label section__label--light">
          <span className="label__dot" />
          <span className="label__text">Programs</span>
          <span className="programs__status">SESSION · ACTIVE</span>
        </div>
        <h2 className="section__title section__title--light">
          {HEADING[locale] ?? HEADING.ko}
        </h2>
        <p className="section__lead" style={{ color: 'rgba(255,255,255,.6)', whiteSpace: 'pre-line' }}>
          {LEAD[locale] ?? LEAD.ko}
        </p>

        <div className="programs">
          {programs.map(p => (
            <article className={`program ${p.cls}`} key={p.num}>
              <div className="program__num">{p.num}</div>
              <h3 className="program__title">{p.title}</h3>
              <p className="program__desc">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
