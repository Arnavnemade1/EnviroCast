import React from 'react';
import './globals.css';

export const metadata = {
  title: 'EnviroCast - Quantum Environmental Monitoring',
  description: 'Revolutionary environmental monitoring through quantum-enhanced predictions. Saving our planet with cutting-edge quantum computing technology.',
  keywords: 'environmental monitoring, quantum computing, air quality, IBM Quantum, pollution prediction, climate science',
  authors: [{ name: 'EnviroCast Team' }],
  openGraph: {
    title: 'EnviroCast - Quantum Environmental Monitoring',
    description: 'Revolutionary environmental monitoring through quantum-enhanced predictions.',
    url: 'https://envirocast.github.io',
    siteName: 'EnviroCast',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EnviroCast Quantum Environmental Monitoring'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnviroCast - Quantum Environmental Monitoring',
    description: 'Revolutionary environmental monitoring through quantum-enhanced predictions.',
    site: '@envirocast_tech',
    creator: '@envirocast_tech',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        
        {/* Structured data for SEO */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EnviroCast",
              "description": "Quantum-powered environmental monitoring for a sustainable future",
              "url": "https://envirocast.github.io",
              "logo": "https://envirocast.github.io/logo.png",
              "sameAs": [
                "https://instagram.com/envirocast_tech",
                "https://github.com/envirocast",
                "https://linkedin.com/company/envirocast"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer support",
                "email": "hello@envirocast.tech"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Quantum Drive",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94105",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <div id="root" className="min-h-screen">
          {children}
        </div>
        
        {/* Analytics and tracking scripts would go here */}
        {/* Google Analytics, Hotjar, etc. */}
        
        {/* Performance monitoring */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              // Basic performance monitoring
              window.addEventListener('load', function() {
                if ('performance' in window) {
                  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                  console.log('Page load time:', loadTime + 'ms');
                }
              });
            `
          }}
        />
      </body>
    </html>
  );
}
