export const NAV_IDS = [
  "home",
  "about",
  "vision-mission",
  "values",
  "sectors",
  "marine",
  "frontiers",
  "aselsan",
  "solutions",
  "achievements",
  "contact",
] as const;

export const HEADER_NAV_IDS = ["home", "about", "vision-mission", "values"] as const;

/** هامش أفقي موحّد مع النافبار — يُعرَّف في globals.css */
export const SINAN_SITE_PX = "sinan-site-px";
export const SINAN_SITE_PL = "sinan-site-pl";
export const SINAN_SITE_PR = "sinan-site-pr";

export type NavSectionId = (typeof NAV_IDS)[number];

/** لوجو PNG (بدل طبقات فيجما) */
export const sinanDynamicsLogoPng = "/sinandynamic.png";
export const sinanMarineLogoPng = "/sinanmarine.png";

/** لوغو المؤشر — أبيض على الخلفيات الداكنة، أسود على الفاتحة */
export const sinanCursorLogoOnDark = "/logo/white_corsur_logo.png";
export const sinanCursorLogoOnLight = "/logo/black_corsur_logo.png";

/** لوغو Dynamics/Marine داخل الهيرو (هوفر) والأقسام */
export const dynamicsMarineLogoTile =
  "relative flex shrink-0 min-h-0 min-w-0 items-center justify-center overflow-hidden w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 [&_svg]:h-full [&_svg]:w-full [&_svg]:text-white [&_img]:h-full [&_img]:w-full [&_img]:object-contain";

export const dynamicsMarineLogoTileSection = `${dynamicsMarineLogoTile} mb-3 md:mb-4`;

/** لوجو الديناميك/البحرية داخل الصفحة (أكبر قليلاً من الهيرو) */
export const dynamicsMarineLogoTileSectionLarge =
  "relative flex shrink-0 min-h-0 min-w-0 items-center justify-center overflow-hidden w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 [&_svg]:h-full [&_svg]:w-full [&_svg]:text-white [&_img]:h-full [&_img]:w-full [&_img]:object-contain mb-3 md:mb-4";

export const heroDiamondLogoInner =
  "relative z-10 flex h-8 w-8 shrink-0 min-h-0 min-w-0 items-center justify-center overflow-hidden [&_svg]:h-full [&_svg]:w-full [&_svg]:text-white [&_img]:h-full [&_img]:w-full [&_img]:object-contain";

/** مراكز المثلثات في viewBox (7872 × 2368) */
export const triangleCenters: Record<number, { x: number; y: number }> = {
  1: { x: 2410, y: 409 },
  2: { x: 4504, y: 1094 },
  3: { x: 3245, y: 1233 },
  4: { x: 2758, y: 592 },
};
