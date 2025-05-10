import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '모립',
  description: '당신을 위한 온전한 몰입 공간',
  icons: {
    icon: '/logo_icon_main.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-bg-00 text-white">{children}</body>
    </html>
  );
}
