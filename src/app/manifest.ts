import type { MetadataRoute } from "next";
import {
  FAVICON_PATH,
  SEO_DESCRIPTION_EN,
  SITE_NAME_AR,
  SITE_NAME_EN,
} from "@/lib/seo/site-config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME_EN} | ${SITE_NAME_AR}`,
    short_name: SITE_NAME_EN,
    description: SEO_DESCRIPTION_EN,
    start_url: "/",
    display: "browser",
    icons: [
      {
        src: FAVICON_PATH,
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
