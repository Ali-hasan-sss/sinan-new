import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${base}/`,
          ar: `${base}/`,
          "x-default": `${base}/`,
        },
      },
    },
  ];
}
