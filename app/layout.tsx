import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({ weight: ['400', '700', '900'], subsets: ['latin'], display: 'swap', variable: '--font-lato' });
export const metadata: Metadata = {
  metadataBase: new URL('https://kahlilcalavas.netlify.app'),
  title: 'Kahlil Calavas — Code, land & imagination',
  description: 'Digital twins, immersive worlds, and stories rooted in real places. The personal work of Kahlil Calavas, creator of The Spatial Network and CTO at TerraLux.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'Kahlil Calavas', description: 'Somewhere between code, the land, and imagination.', type: 'website', url: 'https://kahlilcalavas.netlify.app' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={lato.variable}><body>{children}</body></html>;
}
