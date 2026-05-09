import { Fifth } from '@/components/pages/Fifth';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5th KVUM · Korea VR User Meetup',
  description: '2026년 10월 3일, 다섯 번째 KVUM이 돌아옵니다. 국내 XR 유저 · 개발자 · 기업이 한자리에.',
  openGraph: {
    title: '5th KVUM · 2026.10.03',
    description: '다섯 번째 KVUM이 돌아옵니다. 2026년 10월 3일, 서울 문래.',
    images: ['/images/brand/kakao_profile.jpg'],
  },
};

export default function Page() {
  return <Fifth />;
}
