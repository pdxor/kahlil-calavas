import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({ weight: ['400', '700', '900'], subsets: ['latin'], display: 'swap', variable: '--font-lato' });
export const metadata: Metadata = {
  metadataBase: new URL('https://kahlilcalavas.dev'),
  title: 'Kahlil Calavas — Code, land & imagination',
  description: 'Digital twins, immersive worlds, and stories rooted in real places. The personal work of Kahlil Calavas, creator of The Spatial Network and CTO at TerraLux.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Kahlil Calavas — Code, land & imagination',
    description: 'I build tools and use them to tell stories. Explore digital twins, immersive worlds, and creative technology rooted in real places.',
    type: 'website',
    url: 'https://kahlilcalavas.dev/',
    siteName: 'Kahlil Calavas',
    locale: 'en_US',
    images: [{ url: '/social/portfolio-share-v1.png', width: 1200, height: 630, type: 'image/png', alt: 'Kahlil Calavas — Building tools. Telling stories. Digital twins, immersive worlds, and creative technology.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kahlil Calavas — Code, land & imagination',
    description: 'I build tools and use them to tell stories. Explore digital twins, immersive worlds, and creative technology rooted in real places.',
    images: ['/social/portfolio-share-v1.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={lato.variable}><body>{children}<script src="/contact-card.js" defer /></body></html>;
}
