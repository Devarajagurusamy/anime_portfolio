import type { Metadata, Viewport } from 'next';
import { Outfit, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

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
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
