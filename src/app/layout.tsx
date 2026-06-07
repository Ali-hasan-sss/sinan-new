import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { SeoJsonLd } from "./SeoJsonLd";
import {
  FAVICON_PATH,
  getSiteUrl,
  OG_IMAGE_PATH,
  SEO_DESCRIPTION_EN,
  SEO_KEYWORDS_AR,
  SEO_KEYWORDS_EN,
  SITE_NAME_AR,
  SITE_NAME_EN,
} from "@/lib/seo/site-config";

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_NAME_EN,
    template: `%s | ${SITE_NAME_EN}`,
  },
  description: SEO_DESCRIPTION_EN,
  applicationName: SITE_NAME_EN,
  keywords: [...SEO_KEYWORDS_EN, ...SEO_KEYWORDS_AR],
  authors: [{ name: SITE_NAME_EN, url: siteUrl }],
  creator: SITE_NAME_EN,
  publisher: SITE_NAME_EN,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/",
      "x-default": "/",
    },
  },
  icons: {
    icon: [
      { url: FAVICON_PATH, sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: FAVICON_PATH,
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA", "ar_OM"],
    url: siteUrl,
    siteName: SITE_NAME_EN,
    title: SITE_NAME_EN,
    description: SEO_DESCRIPTION_EN,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME_EN} — ${SITE_NAME_AR}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME_EN,
    description: SEO_DESCRIPTION_EN,
    images: [OG_IMAGE_PATH],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <SeoJsonLd />
        <div id="sinan-root" className="sinan-app-shell">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
