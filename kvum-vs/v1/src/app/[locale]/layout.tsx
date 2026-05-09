import type { Metadata } from 'next';
import '../globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ScrollTopButton } from '@/components/ScrollTopButton';
import { PixelCat } from '@/components/PixelCat';
import { CustomCursor } from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'KVUM · Korea VR User Meetup',
  description: 'KVUM(크붐)은 Korea VR User Meetup의 약자로, 국내 XR 유저 · 개발자 · 업계 관계자가 함께하는 국내 최대 규모의 XR 유저 밋업입니다.',
  openGraph: {
    title: 'KVUM · Korea VR User Meetup',
    description: '국내 최대 규모 XR 유저 밋업. 체험하고, 소통하고, 함께 만드는 XR 무브먼트.',
    type: 'website',
    images: ['/images/brand/kakao_profile.jpg'],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/jpeg" href="/images/brand/kakao_profile.jpg" />
        <link rel="apple-touch-icon" href="/images/brand/kakao_profile.jpg" />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {/* Background orbs */}
          <div className="bg-orbs" aria-hidden="true">
            <span className="orb orb--1" />
            <span className="orb orb--2" />
            <span className="orb orb--3" />
            <span className="orb orb--4" />
            <span className="orb orb--5" />
          </div>
          <Navigation />
          {children}
          <Footer />
          <ScrollTopButton />
          <PixelCat />
          <CustomCursor />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
