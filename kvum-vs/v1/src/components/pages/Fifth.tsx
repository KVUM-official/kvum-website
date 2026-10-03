'use client';

import { useLocale } from 'next-intl';

const GUIDE_NOTION_URL = 'https://onyx-digestion-95b.notion.site/KVUM-5th-39cf977d8b4880ba9df8e8fc043d2471';

type Content = {
  heroLabel: string;
  heroTitle: React.ReactNode;
  heroSub: string;
  overviewItems: Array<{ dt: string; dd: React.ReactNode }>;
  overviewNote: string;
  afterEvent: { cta: string; url: string };
  guideLinkLabel: string;
  expectLabel: string;
  expectHeading: React.ReactNode;
  expectCards: Array<{ num: string; title: string; desc: string }>;
  tunedBadge: string;
  tunedTitle: React.ReactNode;
  tunedDesc: string;
  contactLabels: { kakao: string; kakaoSub: string; discord: string; discordSub: string; email: string; emailSub: string; x: string; xSub: string; blog: string; blogSub: string };
  guideLabel: string;
  guideHeading: React.ReactNode;
  guideBanner: string;
  guideCards: Array<{ num: string; title: string; body: string[] }>;
  scheduleTimeHeader: string;
  scheduleProgramHeader: string;
  scheduleRows: Array<{ time: string; desc: string }>;
  scheduleCaption: string;
  cautionTitle: string;
  cautionDesc: string;
  inquiryText: string;
};

const VENUE_MAP_URL = 'https://naver.me/xY4sP1mO';
const DISCORD_URL = 'https://discord.gg/qm7uXSjBJZ';

function MapLink({ label }: { label: string }) {
  return (
    <a href={VENUE_MAP_URL} target="_blank" rel="noopener noreferrer" className="overview__map-link">
      {label}
      <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

function ResourceLink({ href, label, variant }: { href: string; label: string; variant: 'intro' | 'guide' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`overview__cta overview__cta--${variant}`}>
      <span>{label}</span>
      <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

function VenueLine({ venue }: { venue: string }) {
  return (
    <span className="overview__venue">
      <svg className="overview__venue-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21s-7-6.4-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.6 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.3" />
      </svg>
      {venue}
    </span>
  );
}

const CONTENT: Record<string, Content> = {
  ko: {
    heroLabel: '5th KVUM · 성료',
    heroTitle: <>성황리에 마무리됐습니다,<br /><span className="grad">다섯 번째 KVUM.</span></>,
    heroSub: '많은 분들이 함께해주신 덕분에 제 5회 KVUM이 성공적으로 마무리됐습니다. 다음 밋업을 더 좋게 만들 수 있도록, 짧은 후기를 들려주세요.',
    afterEvent: {
      cta: '만족도 조사 참여하기',
      url: 'https://forms.gle/sv8VVm2G9os5uNUf9',
    },
    overviewItems: [
      { dt: '일시', dd: '2026년 10월 3일' },
      { dt: '장소', dd: <><VenueLine venue="올댓마인드 (서울 문래)" /><MapLink label="지도 보기" /></> },
      { dt: '대상', dd: 'XR 유저 · 개발자 · 업계 관계자 · 콘텐츠 제작자' },
      { dt: '모집 인원', dd: '모집 마감' },
      { dt: '참가 신청', dd: '신청 마감' },
      { dt: '참가비', dd: '10,000원' },
    ],
    overviewNote: '* 제 5회 KVUM은 성황리에 종료되었습니다.',
    guideLinkLabel: '5th KVUM 안내사항',
    expectLabel: 'What to Expect',
    expectHeading: <>5th KVUM에서 <span className="grad">만날 것들</span></>,
    expectCards: [
      { num: '01', title: '확장된 XR 디바이스 체험존', desc: 'HMD · 트래커 · AR 글래스부터 하이엔드 장비까지, 평소 접하기 힘든 XR 기기를 한자리에서 직접 체험.' },
      { num: '02', title: '현직자 인사이트 세션', desc: '국내외 XR 업계 전문가와 기업 관계자의 현장 인사이트. 시장 전망과 개발 노하우를 직접 전달.' },
      { num: '03', title: '자유 토론 & 네트워킹', desc: '유저 · 개발자 · 업계 관계자 간 경계 없는 소통. 해외 게스트와도 통역 지원으로 막힘없이.' },
      { num: '04', title: '경품 & 깜짝 이벤트', desc: '파트너 기업과 함께하는 경품 이벤트. 매 회차 상상 이상의 스케일로 준비되는 추첨과 깜짝 이벤트.' },
    ],
    tunedBadge: 'STAY TUNED',
    tunedTitle: <>참가 소식<br /><span className="grad">가장 먼저 받기.</span></>,
    tunedDesc: '오픈채팅방과 이메일을 통해 일정과 장소, 참가 신청이 열리는 순간 가장 먼저 알려드립니다. 놓치지 마세요.',
    contactLabels: {
      kakao: '오픈 카카오톡', kakaoSub: '참가 소식 · 실시간 공지',
      discord: 'Discord', discordSub: '공식 디스코드 커뮤니티',
      email: 'future1070@naver.com', emailSub: '파트너십 · 일반 문의',
      x: '@vum_k67455', xSub: '공식 X (트위터)',
      blog: 'VR 인사이트', blogSub: '네이버 블로그',
    },
    guideLabel: 'Visit Guide',
    guideHeading: <>방문 전 <span className="grad">꼭 확인해 주세요.</span></>,
    guideBanner: '10:30 입장 확인 · 11:00 본 행사 시작',
    guideCards: [
      { num: '01', title: '입장 시간과 장소', body: [
        '서울 영등포구 문래로 55, 2층',
        '일찍 도착하시면 로비에서 잠시 대기하실 수 있어요.',
        '본 행사 11:00~17:00',
        '행사 중 자유롭게 입퇴장 가능합니다.',
        '주차는 인근 공영주차장을 이용해 주세요.',
      ] },
      { num: '02', title: '입장 확인과 명찰', body: [
        '입금자 이름과 전화번호를 확인한 뒤 명찰을 드립니다. 사용할 닉네임을 명찰에 자유롭게 적어 주세요.',
        '행사장 안에서는 명찰이 항상 보이도록 착용해 주세요.',
      ] },
      { num: '03', title: '참가 신청과 굿즈', body: [
        '참가 신청은 10월 1일 자정 마감입니다.',
        '현장 참가는 제한됩니다.',
        '굿즈는 입장 확인을 마친 참가자 선착순 200명에게 제공됩니다.',
      ] },
      { num: '04', title: '음식과 음료는 로비에서', body: [
        '다과와 음료는 로비에서 제공됩니다.',
        '음식·음료 취식은 로비에서만 부탁드립니다.',
        '전자기기 보호와 안전을 위한 안내입니다.',
        '다과는 선착순으로 제공됩니다.',
      ] },
      { num: '05', title: '장비 지참과 체험', body: [
        '장비 없이도 참여할 수 있어요.',
        '개인 장비 지참은 자유입니다.',
        '사용할 책상도 준비됩니다.',
        '다른 사람의 장비는 반드시 소유자의 허락을 받고 사용해 주세요.',
        '개인 장비와 소지품은 잘 챙겨 주세요.',
      ] },
      { num: '06', title: '촬영과 SNS 공유', body: [
        '다른 참가자의 얼굴이 나온 사진은 얼굴을 가리고 공유해 주세요.',
        '이름표나 화면에 개인 정보가 있는지 게시 전에 한 번 더 확인해 주세요.',
      ] },
      { num: '07', title: '애프터파티', body: [
        '18:00~21:00 · 본 행사와 같은 장소',
        '별도로 신청한 본 행사 참가자만 참여 가능합니다.',
        '미성년자는 참여할 수 없습니다.',
        '현재 신청 마감 · 추가 참가 문의는 운영진에게',
      ] },
    ],
    scheduleTimeHeader: '시간',
    scheduleProgramHeader: '프로그램',
    scheduleRows: [
      { time: '10:30', desc: '입장 확인 시작' },
      { time: '11:00~12:00', desc: '행사 시작 · 연사 발표' },
      { time: '12:00~16:30', desc: '자유 교류 · 기기 체험 · 콘텐츠 플레이' },
      { time: '16:30~17:00', desc: '경품 행사' },
      { time: '17:00~17:30', desc: '본 행사 정리 · 기념사진 촬영' },
      { time: '17:30~18:00', desc: '애프터파티 준비' },
      { time: '18:00~21:00', desc: '애프터파티 · 식사 및 자유 교류' },
    ],
    scheduleCaption: '현장 진행에 따라 순서와 시간이 변경될 수 있습니다.',
    cautionTitle: '쾌적한 행사 운영을 위한 안내',
    cautionDesc: '타인에게 불쾌감을 주는 행위를 하거나 스태프의 지시에 따르지 않을 경우, 퇴장 조치될 수 있습니다.',
    inquiryText: '문의나 도움이 필요하면 현장 스태프에게 말씀해 주세요.',
  },
  en: {
    heroLabel: '5th KVUM · Wrapped',
    heroTitle: <>That&apos;s a wrap<br /><span className="grad">on the 5th KVUM.</span></>,
    heroSub: "Thanks to everyone who joined, the 5th KVUM wrapped up with a full house. To make the next meetup even better, we'd love to hear your feedback.",
    afterEvent: {
      cta: 'Take the Survey',
      url: 'https://forms.gle/sv8VVm2G9os5uNUf9',
    },
    overviewItems: [
      { dt: 'Date', dd: 'October 3, 2026' },
      { dt: 'Venue', dd: <><VenueLine venue="AllThatMind (Seoul Mullae)" /><MapLink label="View map" /></> },
      { dt: 'Audience', dd: 'XR users · developers · industry · content creators' },
      { dt: 'Capacity', dd: 'Closed' },
      { dt: 'Registration', dd: 'Closed' },
      { dt: 'Fee', dd: '₩10,000' },
    ],
    overviewNote: '* The 5th KVUM has concluded successfully.',
    guideLinkLabel: '5th KVUM Guide',
    expectLabel: 'What to Expect',
    expectHeading: <>What you&apos;ll find at the <span className="grad">5th KVUM</span></>,
    expectCards: [
      { num: '01', title: 'Expanded XR device experience zone', desc: 'From HMDs, trackers, and AR glasses to high-end gear — try XR devices that are usually hard to access, all in one place.' },
      { num: '02', title: 'Industry insight sessions', desc: 'On-the-ground insights from XR experts and companies, both domestic and international — market outlook and development know-how.' },
      { num: '03', title: 'Open discussion & networking', desc: 'Borderless conversation between users, developers, and industry. Translation support available for international guests.' },
      { num: '04', title: 'Prize & surprise events', desc: 'Prize giveaways with our partners. Every round prepared at a scale beyond expectation — drawings and surprises.' },
    ],
    tunedBadge: 'STAY TUNED',
    tunedTitle: <>Get the news<br /><span className="grad">first.</span></>,
    tunedDesc: 'Through our open chat and email, we\'ll let you know the moment dates, venue, and registration go live. Don\'t miss it.',
    contactLabels: {
      kakao: 'Open KakaoTalk', kakaoSub: 'Updates · live announcements',
      discord: 'Discord', discordSub: 'Official Discord community',
      email: 'future1070@naver.com', emailSub: 'Partnerships · general inquiries',
      x: '@vum_k67455', xSub: 'Official X (Twitter)',
      blog: 'VR Insight', blogSub: 'Naver Blog',
    },
    guideLabel: 'Visit Guide',
    guideHeading: <>What to check <span className="grad">before you visit.</span></>,
    guideBanner: '10:30 Check-in opens · 11:00 Program begins',
    guideCards: [
      { num: '01', title: 'Entry Time & Venue', body: [
        '55 Munnae-ro, Yeongdeungpo-gu, Seoul, 2F',
        "If you arrive early, you're welcome to wait in the lobby.",
        'Main program runs 11:00–17:00.',
        'Feel free to come and go during the event.',
        'Please use the nearby public parking lot.',
      ] },
      { num: '02', title: 'Check-in & Name Badge', body: [
        "We'll verify the name and phone number used for payment, then hand you a badge — feel free to write the nickname you'd like to use on it.",
        'Please keep your badge visible at all times inside the venue.',
      ] },
      { num: '03', title: 'Registration & Goods', body: [
        'Registration closes at midnight on October 1.',
        'On-site registration will be limited.',
        'Goods will be given to the first 200 checked-in attendees.',
      ] },
      { num: '04', title: 'Food & Drinks in the Lobby', body: [
        'Snacks and drinks are provided in the lobby.',
        'Please eat and drink only in the lobby.',
        'This is to protect electronic equipment and keep everyone safe.',
        'Snacks are offered on a first-come, first-served basis.',
      ] },
      { num: '05', title: 'Bringing Gear & Trying It Out', body: [
        "You're welcome to join even without your own gear.",
        'Bringing personal devices is entirely optional.',
        'Desks will be available for use.',
        "Please always get the owner's permission before using someone else's gear.",
        'Please keep an eye on your personal belongings.',
      ] },
      { num: '06', title: 'Photos & Social Sharing', body: [
        "If a photo shows another attendee's face, please blur it before sharing.",
        'Double-check for personal info on name tags or screens before posting.',
      ] },
      { num: '07', title: 'After Party', body: [
        '18:00–21:00 · Same venue as the main program',
        'Open only to main-program attendees who registered separately.',
        'Minors cannot attend.',
        'Registration is currently closed — for additional spots, please contact the organizers.',
      ] },
    ],
    scheduleTimeHeader: 'Time',
    scheduleProgramHeader: 'Program',
    scheduleRows: [
      { time: '10:30', desc: 'Check-in opens' },
      { time: '11:00–12:00', desc: 'Program begins · Speaker talks' },
      { time: '12:00–16:30', desc: 'Open networking · device demos · content play' },
      { time: '16:30–17:00', desc: 'Prize events' },
      { time: '17:00–17:30', desc: 'Wrap-up · group photo' },
      { time: '17:30–18:00', desc: 'After-party setup' },
      { time: '18:00–21:00', desc: 'After party · dinner & open networking' },
    ],
    scheduleCaption: 'Order and timing may change depending on how the day unfolds.',
    cautionTitle: 'A note for a smooth event',
    cautionDesc: 'Anyone causing discomfort to other attendees or not following staff instructions may be asked to leave.',
    inquiryText: 'If you need help or have questions, please speak to our on-site staff.',
  },
  ja: {
    heroLabel: '5th KVUM · 開催終了',
    heroTitle: <>盛況のうちに幕を閉じました、<br /><span className="grad">第5回 KVUM。</span></>,
    heroSub: '多くの皆さまにご参加いただき、第5回 KVUM は盛況のうちに終了しました。次回のミートアップをより良くするため、ぜひ短いご感想をお聞かせください。',
    afterEvent: {
      cta: 'アンケートに参加する',
      url: 'https://forms.gle/sv8VVm2G9os5uNUf9',
    },
    overviewItems: [
      { dt: '日時', dd: '2026年10月3日' },
      { dt: '会場', dd: <><VenueLine venue="オールザットマインド（ソウル・ムルレ）" /><MapLink label="地図を見る" /></> },
      { dt: '対象', dd: 'XR ユーザー · 開発者 · 業界関係者 · コンテンツクリエイター' },
      { dt: '定員', dd: '募集終了' },
      { dt: '参加申込', dd: '受付終了' },
      { dt: '参加費', dd: '₩10,000' },
    ],
    overviewNote: '* 第5回 KVUM は盛況のうちに終了しました。',
    guideLinkLabel: '第5回 KVUM 案内',
    expectLabel: 'What to Expect',
    expectHeading: <>第5回 KVUM で <span className="grad">出会えるもの</span></>,
    expectCards: [
      { num: '01', title: '拡張された XR デバイス体験ゾーン', desc: 'HMD · トラッカー · AR グラスからハイエンド機器まで、普段触れにくい XR デバイスを一堂に体験。' },
      { num: '02', title: '現職者のインサイトセッション', desc: '国内外の XR 業界専門家と企業関係者による現場のインサイト。市場展望と開発ノウハウを直接届けます。' },
      { num: '03', title: '自由討論 & ネットワーキング', desc: 'ユーザー · 開発者 · 業界関係者の間の境界のない交流。海外ゲストとも通訳支援で滞りなく。' },
      { num: '04', title: 'プレゼント & サプライズイベント', desc: 'パートナー企業と共にするプレゼントイベント。毎回想像以上のスケールで準備される抽選とサプライズ。' },
    ],
    tunedBadge: 'STAY TUNED',
    tunedTitle: <>参加情報を<br /><span className="grad">いち早く。</span></>,
    tunedDesc: 'オープンチャットとメールを通じて、日程・会場・参加申込が開始される瞬間にいち早くお知らせします。お見逃しなく。',
    contactLabels: {
      kakao: 'オープンカカオトーク', kakaoSub: '参加情報 · リアルタイム通知',
      discord: 'Discord', discordSub: '公式 Discord コミュニティ',
      email: 'future1070@naver.com', emailSub: 'パートナーシップ · 一般お問い合わせ',
      x: '@vum_k67455', xSub: '公式 X (Twitter)',
      blog: 'VR インサイト', blogSub: 'ネイバーブログ',
    },
    guideLabel: 'Visit Guide',
    guideHeading: <>来場前に<span className="grad">必ずご確認ください。</span></>,
    guideBanner: '10:30 受付開始 · 11:00 本編スタート',
    guideCards: [
      { num: '01', title: '入場時間と場所', body: [
        'ソウル市永登浦区文来路55、2階',
        '早めに到着された場合は、ロビーで少しお待ちいただけます。',
        '本編は11:00〜17:00です。',
        'イベント中は自由に入退場いただけます。',
        '駐車は近隣の公共駐車場をご利用ください。',
      ] },
      { num: '02', title: '受付と名札', body: [
        'お振込みのお名前とお電話番号を確認した後、名札をお渡しします。使用されるニックネームを名札にご自由にご記入ください。',
        '会場内では名札が常に見えるように着用してください。',
      ] },
      { num: '03', title: '参加申込とグッズ', body: [
        '参加申込は10月1日24時に締め切ります。',
        '当日参加は制限されます。',
        'グッズは受付を済ませた先着200名様にお渡しします。',
      ] },
      { num: '04', title: '飲食はロビーで', body: [
        'お茶菓子とお飲み物はロビーでご提供します。',
        '飲食はロビーでのみお願いいたします。',
        '電子機器の保護と安全のためのご案内です。',
        'お茶菓子は先着順でご提供します。',
      ] },
      { num: '05', title: '機材の持参と体験', body: [
        '機材をお持ちでなくてもご参加いただけます。',
        '個人機材の持参は自由です。',
        '使用できる机もご用意しています。',
        '他の方の機材は必ず所有者の許可を得てからご使用ください。',
        '個人の機材・持ち物は各自でしっかり管理してください。',
      ] },
      { num: '06', title: '撮影とSNS共有', body: [
        '他の参加者の顔が写った写真は、顔を隠してから共有してください。',
        '名札や画面に個人情報が写っていないか、投稿前にもう一度ご確認ください。',
      ] },
      { num: '07', title: 'アフターパーティー', body: [
        '18:00〜21:00 · 本編と同じ会場',
        '別途申込をした本編参加者のみご参加いただけます。',
        '未成年の方はご参加いただけません。',
        '現在申込締切 · 追加参加に関するお問い合わせは運営までお願いします。',
      ] },
    ],
    scheduleTimeHeader: '時間',
    scheduleProgramHeader: 'プログラム',
    scheduleRows: [
      { time: '10:30', desc: '受付開始' },
      { time: '11:00〜12:00', desc: '本編スタート · 登壇者発表' },
      { time: '12:00〜16:30', desc: '自由交流 · 機材体験 · コンテンツプレイ' },
      { time: '16:30〜17:00', desc: 'プレゼント抽選' },
      { time: '17:00〜17:30', desc: '本編終了 · 記念撮影' },
      { time: '17:30〜18:00', desc: 'アフターパーティー準備' },
      { time: '18:00〜21:00', desc: 'アフターパーティー · 食事 & 自由交流' },
    ],
    scheduleCaption: '当日の進行により順序や時間が変更される場合があります。',
    cautionTitle: '快適な運営のためのお願い',
    cautionDesc: '他の参加者に不快感を与える行為、またはスタッフの指示に従わない場合、退場をお願いすることがあります。',
    inquiryText: 'ご不明な点やお困りのことがございましたら、会場スタッフまでお気軽にお声がけください。',
  },
  zh: {
    heroLabel: '5th KVUM · 圆满结束',
    heroTitle: <>圆满落幕，<br /><span className="grad">第5届 KVUM。</span></>,
    heroSub: '感谢大家的参与，第5届 KVUM 圆满结束。为了让下一次聚会更精彩，请留下您的简短反馈。',
    afterEvent: {
      cta: '参与满意度调查',
      url: 'https://forms.gle/sv8VVm2G9os5uNUf9',
    },
    overviewItems: [
      { dt: '日期', dd: '2026年10月3日' },
      { dt: '地点', dd: <><VenueLine venue="AllThatMind（首尔 · 文来）" /><MapLink label="查看地图" /></> },
      { dt: '对象', dd: 'XR 用户 · 开发者 · 业界人士 · 内容创作者' },
      { dt: '招募人数', dd: '招募结束' },
      { dt: '报名方式', dd: '报名已截止' },
      { dt: '参加费', dd: '₩10,000' },
    ],
    overviewNote: '* 第5届 KVUM 已圆满结束。',
    guideLinkLabel: '第5届 KVUM 须知',
    expectLabel: 'What to Expect',
    expectHeading: <>第5届 KVUM 的 <span className="grad">精彩内容</span></>,
    expectCards: [
      { num: '01', title: '扩展的 XR 设备体验区', desc: '从 HMD · 追踪器 · AR 眼镜到高端设备，平时难以接触的 XR 设备齐聚一堂，亲身体验。' },
      { num: '02', title: '从业者洞察分享', desc: '国内外 XR 业界专家与企业人士的现场洞察，直接分享市场展望与开发经验。' },
      { num: '03', title: '自由讨论 & 社交', desc: '用户 · 开发者 · 业界人士之间无界限的交流。提供翻译支持，与海外嘉宾畅谈无阻。' },
      { num: '04', title: '抽奖 & 惊喜活动', desc: '与合作企业共同打造的抽奖活动。每届都以超乎想象的规模准备抽奖与惊喜。' },
    ],
    tunedBadge: 'STAY TUNED',
    tunedTitle: <>第一时间<br /><span className="grad">获取活动信息。</span></>,
    tunedDesc: '我们将通过开放聊天室与电子邮件，第一时间告知您日程、地点与报名开启时间。请勿错过。',
    contactLabels: {
      kakao: 'Kakao 开放聊天', kakaoSub: '活动消息 · 实时通知',
      discord: 'Discord', discordSub: '官方 Discord 社区',
      email: 'future1070@naver.com', emailSub: '合作 · 一般咨询',
      x: '@vum_k67455', xSub: '官方 X (Twitter)',
      blog: 'VR Insight', blogSub: 'Naver 博客',
    },
    guideLabel: 'Visit Guide',
    guideHeading: <>到场前<span className="grad">请务必确认。</span></>,
    guideBanner: '10:30 开始签到 · 11:00 正式开始',
    guideCards: [
      { num: '01', title: '入场时间与地点', body: [
        '首尔永登浦区文来路55号 2楼',
        '如提前到达，可在大厅稍作等候。',
        '正式活动时间为11:00~17:00。',
        '活动期间可自由进出。',
        '停车请使用附近的公共停车场。',
      ] },
      { num: '02', title: '签到与姓名牌', body: [
        '核实汇款人姓名与电话号码后将为您发放姓名牌，可在姓名牌上自由填写想使用的昵称。',
        '在会场内请始终佩戴姓名牌，确保清晰可见。',
      ] },
      { num: '03', title: '报名与周边', body: [
        '报名将于10月1日午夜截止。',
        '现场报名名额有限。',
        '周边将提供给完成签到的前200名参加者。',
      ] },
      { num: '04', title: '餐饮请在大厅内食用', body: [
        '茶点与饮品将在大厅提供。',
        '请仅在大厅内用餐饮水。',
        '此举是为保护电子设备并确保安全。',
        '茶点按先到先得原则提供。',
      ] },
      { num: '05', title: '设备携带与体验', body: [
        '即使没有设备也可以参加。',
        '是否携带个人设备完全自愿。',
        '现场将提供可使用的桌子。',
        '使用他人设备前请务必征得对方同意。',
        '请妥善保管好个人设备与随身物品。',
      ] },
      { num: '06', title: '拍照与社交媒体分享', body: [
        '若照片中出现其他参加者的脸部，分享前请先打码遮挡。',
        '发布前请再次确认姓名牌或屏幕上是否包含个人信息。',
      ] },
      { num: '07', title: '派对（After Party）', body: [
        '18:00~21:00 · 与正式活动同一地点',
        '仅限另外报名的正式活动参加者参与。',
        '未成年人不可参加。',
        '目前报名已截止 · 如需追加参加请联系主办方。',
      ] },
    ],
    scheduleTimeHeader: '时间',
    scheduleProgramHeader: '内容',
    scheduleRows: [
      { time: '10:30', desc: '开始签到' },
      { time: '11:00~12:00', desc: '正式开始 · 嘉宾演讲' },
      { time: '12:00~16:30', desc: '自由交流 · 设备体验 · 内容试玩' },
      { time: '16:30~17:00', desc: '抽奖活动' },
      { time: '17:00~17:30', desc: '活动收尾 · 合影留念' },
      { time: '17:30~18:00', desc: '准备派对' },
      { time: '18:00~21:00', desc: '派对 · 用餐与自由交流' },
    ],
    scheduleCaption: '具体顺序与时间可能根据现场情况有所调整。',
    cautionTitle: '为了活动顺利进行的提醒',
    cautionDesc: '如有对他人造成不适的行为，或不遵从工作人员指示，可能会被请出场。',
    inquiryText: '如需咨询或帮助，请随时联系现场工作人员。',
  },
};

export function Fifth() {
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
            <div className="fifth-apply">
              <a className="fifth-apply__btn fifth-apply__btn--primary" href={c.afterEvent.url} target="_blank" rel="noopener noreferrer">
                <strong>{c.afterEvent.cta}</strong>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section section--overview">
        <div className="container">
          <div className="overview">
            <div className="overview__side">
              <div className="overview__num">05<span>.</span></div>
              <div className="overview__date">
                <span>2026</span>
                <span>10</span>
                <span>03</span>
              </div>

              <div className="overview__cta-row overview__cta-row--side">
                <ResourceLink href={GUIDE_NOTION_URL} label={c.guideLinkLabel} variant="guide" />
              </div>
            </div>

            <div className="overview__main">
              <dl className="overview__list">
                {c.overviewItems.map((item, i) => (
                  <div className="overview__item" key={i}>
                    <dt>{item.dt}</dt>
                    <dd>{item.dd}</dd>
                  </div>
                ))}
              </dl>

              <p className="overview__note">{c.overviewNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--guide">
        <div className="container">
          <div className="section__label">
            <span className="label__dot" />
            <span className="label__text">{c.guideLabel}</span>
          </div>
          <h2 className="section__title">{c.guideHeading}</h2>

          <div className="guide-banner">{c.guideBanner}</div>

          <div className="guide__grid">
            {c.guideCards.map(card => (
              <article
                className={`guide-card${card.num === '07' ? ' guide-card--wide' : ''}`}
                key={card.num}
              >
                <div className="guide-card__num">{card.num}</div>
                <h3 className="guide-card__title">{card.title}</h3>
                <div className="guide-card__body">
                  {card.body.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="guide-table-wrap">
            <table className="guide-table">
              <thead>
                <tr>
                  <th>{c.scheduleTimeHeader}</th>
                  <th>{c.scheduleProgramHeader}</th>
                </tr>
              </thead>
              <tbody>
                {c.scheduleRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.time}</td>
                    <td>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="guide-table-caption">{c.scheduleCaption}</p>

          <div className="guide-caution">
            <div className="guide-caution__title">{c.cautionTitle}</div>
            <p className="guide-caution__desc">{c.cautionDesc}</p>
          </div>

          <p className="guide-inquiry">{c.inquiryText}</p>
        </div>
      </section>

      <section className="section section--expect">
        <div className="container">
          <div className="section__label section__label--light">
            <span className="label__dot" />
            <span className="label__text">{c.expectLabel}</span>
          </div>
          <h2 className="section__title section__title--light">{c.expectHeading}</h2>

          <div className="expect__grid">
            {c.expectCards.map(card => (
              <article className="expect-card" key={card.num}>
                <div className="expect-card__num">{card.num}</div>
                <h3 className="expect-card__title">{card.title}</h3>
                <p className="expect-card__desc">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tuned__card">
            <div className="tuned__left">
              <div className="join__badge">
                <span className="dot" />
                <span>{c.tunedBadge}</span>
              </div>
              <h2 className="tuned__title">{c.tunedTitle}</h2>
              <p className="tuned__desc">{c.tunedDesc}</p>
            </div>

            <div className="tuned__right">
              <a className="contact contact--kakao" href="https://open.kakao.com/o/gfNFgQ9f" target="_blank" rel="noopener">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#3C1E1E" d="M12 4C6.486 4 2 7.589 2 12.02c0 2.846 1.917 5.345 4.802 6.757L5.5 22.5l4.163-2.7c.76.114 1.543.22 2.337.22 5.514 0 10-3.589 10-8.02C22 7.589 17.514 4 12 4z" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.kakao}</strong>
                  <small>{c.contactLabels.kakaoSub}</small>
                </span>
                <span className="contact__arrow">→</span>
              </a>
              <a className="contact contact--discord" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.discord}</strong>
                  <small>{c.contactLabels.discordSub}</small>
                </span>
                <span className="contact__arrow">→</span>
              </a>
              <a className="contact contact--email" href="mailto:future1070@naver.com">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.email}</strong>
                  <small>{c.contactLabels.emailSub}</small>
                </span>
                <span className="contact__arrow">→</span>
              </a>
              <a className="contact contact--x" href="https://x.com/vum_k67455" target="_blank" rel="noopener">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.x}</strong>
                  <small>{c.contactLabels.xSub}</small>
                </span>
                <span className="contact__arrow">→</span>
              </a>
              <a className="contact contact--blog" href="https://blog.naver.com/vr_insight" target="_blank" rel="noopener">
                <span className="contact__icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#fff" d="M14.42 11.9L9.92 5H5v14h4.58v-6.9l4.5 6.9H19V5h-4.58z" />
                  </svg>
                </span>
                <span className="contact__text">
                  <strong>{c.contactLabels.blog}</strong>
                  <small>{c.contactLabels.blogSub}</small>
                </span>
                <span className="contact__arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
