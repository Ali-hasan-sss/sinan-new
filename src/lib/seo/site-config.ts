export const PRODUCTION_SITE_URL = "https://sinan.om";

/** Base URL for canonical, Open Graph, sitemap, and JSON-LD. Override via NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  if (process.env.NODE_ENV === "production") return PRODUCTION_SITE_URL;
  return "http://localhost:3000";
}

export const SITE_NAME_EN = "Sinan Advanced Industries";
export const SITE_NAME_AR = "سنان للصناعات المتقدمة";

export const SEO_DESCRIPTION_EN =
  "Sinan Advanced Industries — Omani state-owned leader in defense products, unmanned aerial systems, maritime autonomy, AI, and advanced industrial capabilities across energy, minerals, and transport.";

export const SEO_DESCRIPTION_AR =
  "شركة سنان للصناعات المتقدمة — شركة عُمانية مملوكة للدولة، رائدة في منتجات الدفاع والأنظمة الجوية دون طيار والأنظمة البحرية المستقلة والذكاء الاصطناعي والقدرات الصناعية المتقدمة.";

export const SEO_KEYWORDS_EN = [
  "Sinan Advanced Industries",
  "Oman defense",
  "UAV",
  "drones",
  "maritime autonomy",
  "AI defense",
  "Sinan Dynamics",
  "Sinan Marine",
  "Sinan Frontiers",
  "Sinan Aselsan",
  "سلطنة عُمان",
];

export const SEO_KEYWORDS_AR = [
  "سنان للصناعات المتقدمة",
  "الدفاع في عُمان",
  "طائرات بدون طيار",
  "أنظمة بحرية",
  "ذكاء اصطناعي",
  "سنان ديناميكس",
  "سنان البحرية",
  "سنان فرونتيرز",
  "سنان أسيلسان",
];

export const OG_IMAGE_PATH = "/logo/logo_english_ondark.png";
/** أيقونة التبويب — ثيم فاتح */
export const FAVICON_LIGHT_PATH = "/logo/black_corsur_logo.png";
/** أيقونة التبويب — ثيم غامق */
export const FAVICON_DARK_PATH = "/logo/white_corsur_logo.png";
/** افتراضي للـ manifest وغيره */
export const FAVICON_PATH = FAVICON_LIGHT_PATH;
