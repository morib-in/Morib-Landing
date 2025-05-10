import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '모립',
  description: '당신의 온전한 몰입을 위한 작업공간. 모립',
  icons: {
    icon: '/logo_icon_main.svg',
  },
  metadataBase: new URL('https://www.morib.in'),
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  openGraph: {
    locale: 'ko_KR',
    type: 'website',
    url: 'https://www.morib.in',
    title: 'Morib',
    description: '당신의 온전한 몰입을 위한 작업공간. 모립',
    siteName: 'Morib',
    images: [
      {
        url: 'https://www.morib.in/morib_miri.png',
        width: 1200,
        height: 630,
        alt: '모립 메인 이미지',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-bg-00 text-white">{children}</body>
    </html>
  );
}
