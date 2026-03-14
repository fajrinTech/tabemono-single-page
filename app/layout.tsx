import type { Metadata } from 'next';
import { Space_Grotesk, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-noto-jp',
});

export const metadata: Metadata = {
  title: 'TabemonoSpace | Jajan Vibes Jepang di Rangkasbitung',
  description: 'Cafe ala Jepang pertama di Rangkasbitung. Nikmati Matcha, Onigiri, dan menu otentik lainnya mulai dari 10k. Lokasi: Kp. Pasir Ona, Rangkasbitung Timur, Lebak, Banten.',
  keywords: 'TabemonoSpace, Cafe Jepang Rangkasbitung, Kuliner Lebak, Matcha Rangkasbitung, Tempat Nongkrong Rangkasbitung, Cafe Hits Lebak',
  openGraph: {
    title: 'TabemonoSpace | Jajan Vibes Jepang di Rangkasbitung',
    description: 'Cafe ala Jepang pertama di Rangkasbitung. Nikmati Matcha, Onigiri, dan menu otentik lainnya mulai dari 10k.',
    url: 'https://tabemonospace.com',
    siteName: 'TabemonoSpace',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${notoSansJP.variable}`}>
      <body className="font-space bg-[#F4F0EA] text-black selection:bg-[#8A9A5B] selection:text-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
