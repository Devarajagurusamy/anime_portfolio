import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#08080c',
};

export const metadata: Metadata = {
  title: 'Devaraj | Creative Developer & Anime Portfolio',
  description: 'Interactive cinematic anime portfolio featuring smooth scroll-driven canvas animations, creative coding, and modern web engineering.',
  keywords: ['Devaraj', 'Developer Portfolio', 'Anime Portfolio', 'Creative Developer', 'Next.js', 'Canvas Animation'],
  authors: [{ name: 'Devaraj' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
