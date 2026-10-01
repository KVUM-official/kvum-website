'use client';

import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const KAKAO_URL = 'https://open.kakao.com/me/smk7019';
const EMAIL = 'future1070@naver.com';

type Content = {
  badge: string;
  title: React.ReactNode;
  desc: string;
  kakaoLabel: string;
  emailLabel: string;
  closeLabel: string;
  emailCopiedLabel: string;
};

const CONTENT: Record<string, Content> = {
  ko: {
    badge: '공지',
    title: <>제 5회 KVUM 참가 신청 마감<br />10월 1일(목) 자정</>,
    desc: '추가 참가를 희망하실 경우 개인 연락 바랍니다.',
    kakaoLabel: '오픈 카카오톡',
    emailLabel: EMAIL,
    closeLabel: '닫기',
    emailCopiedLabel: '이메일이 복사되었습니다',
  },
  en: {
    badge: 'Notice',
    title: <>5th KVUM registration closes<br />midnight, Thu Oct 1</>,
    desc: "If you'd like to join after the deadline, please contact us directly.",
    kakaoLabel: 'Open KakaoTalk',
    emailLabel: EMAIL,
    closeLabel: 'Close',
    emailCopiedLabel: 'Email address copied',
  },
  ja: {
    badge: 'お知らせ',
    title: <>第5回 KVUM 参加申込締切<br />10月1日(木)24時</>,
    desc: '追加参加をご希望の場合は個別にご連絡ください。',
    kakaoLabel: 'オープンカカオトーク',
    emailLabel: EMAIL,
    closeLabel: '閉じる',
    emailCopiedLabel: 'メールアドレスをコピーしました',
  },
  zh: {
    badge: '通知',
    title: <>第5届 KVUM 报名截止<br />10月1日（周四）24点</>,
    desc: '如需追加参加，请直接联系我们。',
    kakaoLabel: 'Kakao 开放聊天',
    emailLabel: EMAIL,
    closeLabel: '关闭',
    emailCopiedLabel: '邮箱地址已复制',
  },
};

export function AnnouncementModal() {
  const locale = useLocale();
  const c = CONTENT[locale] ?? CONTENT.ko;
  const [open, setOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setOpen(true);
    return () => clearTimeout(toastTimerRef.current);
  }, []);

  const close = () => setOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard unavailable; still show the toast with the address to copy manually */
    }
    setToastVisible(true);
    clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastVisible(false), 2500);
  };

  if (!open && !toastVisible) return null;

  return (
    <>
      {open && (
        <div
          className="announcement-overlay"
          role="dialog"
          aria-modal="true"
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            background: 'rgba(10, 10, 20, 0.55)',
          }}
        >
          <div className="announcement-modal" onClick={e => e.stopPropagation()}>
            <button type="button" className="announcement-modal__close" aria-label={c.closeLabel} onClick={close}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>

            <div className="announcement-modal__badge">
              <span className="dot" />
              <span>{c.badge}</span>
            </div>

            <h2 className="announcement-modal__title">{c.title}</h2>
            <p className="announcement-modal__desc">{c.desc}</p>

            <div className="announcement-modal__actions">
              <a className="btn btn--gradient" href={KAKAO_URL} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 4C6.486 4 2 7.589 2 12.02c0 2.846 1.917 5.345 4.802 6.757L5.5 22.5l4.163-2.7c.76.114 1.543.22 2.337.22 5.514 0 10-3.589 10-8.02C22 7.589 17.514 4 12 4z" />
                </svg>
                <span>{c.kakaoLabel}</span>
              </a>
              <button type="button" className="btn btn--outline" onClick={copyEmail}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span>{c.emailLabel}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {toastVisible && (
        <div
          className="announcement-toast"
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            left: '50%',
            bottom: 32,
            transform: 'translateX(-50%)',
            zIndex: 1100,
          }}
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span>{c.emailCopiedLabel}</span>
        </div>
      )}
    </>
  );
}
