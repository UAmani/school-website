// import "./globals.css";

import siteConfig from "../data/siteConfig";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
export const metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.schoolName,
    template: `%s | ${siteConfig.schoolName}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  applicationName: siteConfig.schoolName,

  authors: [
    {
      name: siteConfig.schoolName,
    },
  ],

  creator: siteConfig.schoolName,

  publisher: siteConfig.schoolName,

  robots: {
    index: true,
    follow: true,
  },

 icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],

  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180" },
  ],

  shortcut: "/favicon.ico",
},
  openGraph: {
    type: "website",

    locale: "en_IN",

    url: siteConfig.url,

    title: siteConfig.schoolName,

    description: siteConfig.description,

    siteName: siteConfig.schoolName,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.schoolName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",

    title: siteConfig.schoolName,

    description: siteConfig.description,

    images: [siteConfig.ogImage],

    creator: siteConfig.twitterHandle,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: siteConfig.schoolName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: siteConfig.logo,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
    ].filter(Boolean),
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <TopBar />
        <Header />
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}