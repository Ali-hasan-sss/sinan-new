import {
  getSiteUrl,
  SEO_DESCRIPTION_AR,
  SEO_DESCRIPTION_EN,
  SITE_NAME_AR,
  SITE_NAME_EN,
} from "@/lib/seo/site-config";

export function SeoJsonLd() {
  const base = getSiteUrl();
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: SITE_NAME_EN,
        alternateName: [SITE_NAME_AR, "Sinan"],
        url: base,
        logo: `${base}/logo/black_corsur_logo.png`,
        image: `${base}/logo/logo_english_ondark.png`,
        description: SEO_DESCRIPTION_EN,
        areaServed: {
          "@type": "Country",
          name: "Oman",
        },
        knowsLanguage: ["en", "ar"],
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: SITE_NAME_EN,
        alternateName: SITE_NAME_AR,
        description: SEO_DESCRIPTION_AR,
        inLanguage: ["en", "ar"],
        publisher: { "@id": `${base}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
