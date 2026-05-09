import { Team } from '@/components/pages/Team';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVUM Team · Korea VR User Meetup',
  description: 'KVUM을 만드는 사람들. 국내 XR 커뮤니티를 함께 키워가는 운영팀.',
  openGraph: {
    title: 'KVUM Team · 크붐을 만드는 사람들',
    images: ['/images/brand/kakao_profile.jpg'],
  },
};

export default function Page() {
  return <Team />;
}
