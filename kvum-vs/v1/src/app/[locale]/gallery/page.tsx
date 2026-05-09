import { Gallery } from '@/components/pages/Gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery · KVUM',
  description: '지난 KVUM 현장의 순간들. 1회차부터 4회차까지의 사진 아카이브.',
  openGraph: {
    title: 'KVUM Gallery',
    images: ['/images/brand/kakao_profile.jpg'],
  },
};

export default function Page() {
  return <Gallery />;
}
