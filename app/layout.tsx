import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BUSINESS = {
  name: 'Bethel Stones',
  description: '4.9★ Premium Granite & Marble Installation in Chennai',
  phone: '+919884828642',
  email: 'info@bethelstones.com',
  address: '135 Lakshmi Nagar, Mudichur, Chennai, Tamil Nadu 600048',
  website: 'https://bethelstones.com',
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.website),
  title: {
    default: `${BUSINESS.name} | Premium Granite & Marble Installation in Chennai`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  keywords: [
    'granite supplier Chennai',
    'granite installation',
    'marble supplier',
    'granite countertops',
    'stone installation',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BUSINESS.website,
    siteName: BUSINESS.name,
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: BUSINESS.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: BUSINESS.website,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: BUSINESS.name,
              image: `${BUSINESS.website}/og-image.webp`,
              description: BUSINESS.description,
              telephone: BUSINESS.phone,
              email: BUSINESS.email,
              url: BUSINESS.website,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '135 Lakshmi Nagar',
                addressLocality: 'Mudichur',
                addressRegion: 'Tamil Nadu',
                postalCode: '600048',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '12.9271',
                longitude: '80.0825',
              },
              areaServed: ['Chennai', 'Chengalpattu', 'Kanchipuram'],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '41',
              },
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
