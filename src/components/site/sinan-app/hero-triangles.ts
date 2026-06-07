/** viewBox موحّد: hero-bg.svg و Assxet.svg */
export const HERO_VIEWBOX_WIDTH = 7872;
export const HERO_VIEWBOX_HEIGHT = 2368;
export const HERO_MOBILE_VIEWBOX_WIDTH = 1290;
export const HERO_MOBILE_VIEWBOX_HEIGHT = 2796;

export type HeroTriangle = {
  id: number;
  color: string;
  points: string;
  /** للاختبار والتوثيق */
  labelEn: string;
  labelAr: string;
  /** ربط القسم (المثلثات الأربعة الرئيسية فقط) */
  sectionId?: string;
  /** رقم المضلع في Assxet.svg (1–14) */
  assxetPolygon?: number;
};

/**
 * المثلثات الملونة الأربعة في خلفية الهيرو الحقيقية (hero-bg.svg / hero-bg.png).
 * هذه هي التي يجب أن تطابق طبقة التفاعل.
 */
export const HERO_BG_ACCENT_TRIANGLES: HeroTriangle[] = [
  {
    id: 1,
    color: "#009fe3",
    assxetPolygon: 4,
    sectionId: "sectors",
    labelEn: "Blue — Sinan Dynamics",
    labelAr: "أزرق — سنان داينمك",
    points:
      "2911.96 420.65 2727.7 227.05 1997.76 491.11 2001.28 499.48 2911.96 420.65",
  },
  {
    id: 2,
    color: "#312783",
    assxetPolygon: 12,
    sectionId: "marine",
    labelEn: "Purple — Sinan Marine",
    labelAr: "بنفسجي — سنان مارين",
    points: "4728.47 882.6 4501.24 1300.07 4284.58 1101.9 4728.47 882.6",
  },
  {
    id: 3,
    color: "#f39422",
    assxetPolygon: 1,
    sectionId: "frontiers",
    labelEn: "Orange — Sinan Frontiers",
    labelAr: "برتقالي — سنان فرونتيرز",
    points:
      "5760.31 914.31 6580.65 614.42 6609.71 609.13 6609.71 1138.89 5760.31 914.31",
  },
  {
    id: 4,
    color: "#000002",
    assxetPolygon: 13,
    sectionId: "aselsan",
    labelEn: "Black — Sinan Aselsan",
    labelAr: "أسود — سنان أسيلسان",
    points: "2001.28 499.48 3328.76 378.6 2944.99 898.45 2001.28 499.48",
  },
];

/**
 * المثلثات الأربعة في `hero-mobile.svg`.
 * ترتيب المعرّفات يتبع `rectangle_1..rectangle_4` داخل الملف.
 */
export const HERO_MOBILE_ACCENT_TRIANGLES: HeroTriangle[] = [
  {
    id: 1,
    color: "#009fe3",
    sectionId: "sectors",
    labelEn: "Blue — Sinan Dynamics (mobile)",
    labelAr: "أزرق — سنان داينمك (موبايل)",
    points: "680.46 1150.68 348.53 1427.54 82.43 879.34 680.46 1150.68",
  },
  {
    id: 2,
    color: "#312783",
    sectionId: "marine",
    labelEn: "Purple — Sinan Marine (mobile)",
    labelAr: "بنفسجي — سنان مارين (موبايل)",
    points: "645.91 1827.85 26.78 1899.92 347.76 1429.9 645.91 1827.85",
  },
  {
    id: 3,
    color: "#f39422",
    sectionId: "frontiers",
    labelEn: "Orange — Sinan Frontiers (mobile)",
    labelAr: "برتقالي — سنان فرونتيرز (موبايل)",
    points: "744.23 899.77 464.21 772.96 607.62 510.4 744.23 899.77",
  },
  {
    id: 4,
    color: "#000002",
    sectionId: "aselsan",
    labelEn: "Black — Sinan Aselsan (mobile)",
    labelAr: "أسود — سنان أسيلسان (موبايل)",
    points: "1174.7 1479.43 811.11 964.11 1069.68 850.21 1174.7 1479.43",
  },
];

/** كل المضلعات الملونة في Assxet.svg (للاختبار والمرجع) */
export const HERO_ASSXET_ALL_TRIANGLES: HeroTriangle[] = [
  {
    id: 1,
    color: "#f39422",
    labelEn: "Orange (large, upper-right)",
    labelAr: "برتقالي (كبير، أعلى اليمين)",
    points:
      "5760.31 914.31 6580.65 614.42 6609.71 609.13 6609.71 1138.89 5760.31 914.31",
  },
  {
    id: 2,
    color: "#312783",
    labelEn: "Purple (lower-right)",
    labelAr: "بنفسجي (أسفل اليمين)",
    points:
      "5813.15 1543.15 5300.56 1263.08 5126.18 1220.8 5511.94 1448.03 5813.15 1543.15",
  },
  {
    id: 3,
    color: "#312783",
    labelEn: "Purple (upper-center)",
    labelAr: "بنفسجي (أعلى الوسط)",
    points:
      "4153.85 523.26 3419.32 676.51 3328.76 378.6 4168.98 518.31 4153.85 523.26",
  },
  {
    id: 4,
    color: "#009fe3",
    labelEn: "Blue (upper-left) — Dynamics",
    labelAr: "أزرق (أعلى اليسار) — داينمك",
    points:
      "2911.96 420.65 2727.7 227.05 1997.76 491.11 2001.28 499.48 2911.96 420.65",
  },
  {
    id: 5,
    color: "#f39422",
    labelEn: "Orange (large, left)",
    labelAr: "برتقالي (كبير، يسار)",
    points:
      "1506.37 1146.82 1453.53 1469.17 306.81 428.14 1506.37 1146.82",
  },
  {
    id: 6,
    color: "#312783",
    labelEn: "Purple (bottom-center)",
    labelAr: "بنفسجي (أسفل الوسط)",
    points:
      "4260.8 1514.08 4200.03 1631.66 4069.24 1564.29 4260.8 1514.08",
  },
  {
    id: 7,
    color: "#009fe3",
    labelEn: "Blue (bottom-left)",
    labelAr: "أزرق (أسفل اليسار)",
    points:
      "2224.99 1438.78 2070.42 1672.62 1967.37 1601.28 2224.99 1438.78",
  },
  {
    id: 8,
    color: "#312783",
    labelEn: "Purple (far left)",
    labelAr: "بنفسجي (أقصى اليسار)",
    points: "509.54 1143.52 280.99 866.75 364.88 1157.39 509.54 1143.52",
  },
  {
    id: 9,
    color: "#009fe3",
    labelEn: "Blue (center) — duplicate small",
    labelAr: "أزرق (وسط) — نسخة صغيرة",
    points: "3378.31 1347.63 3136.54 1003.48 3219.77 1347.63 3378.31 1347.63",
  },
  {
    id: 10,
    color: "#009fe3",
    labelEn: "Blue (bottom-right)",
    labelAr: "أزرق (أسفل اليمين)",
    points:
      "5510.56 2064.98 5469.66 1811.33 5692.87 1981.75 5510.56 2064.98",
  },
  {
    id: 11,
    color: "#f39422",
    labelEn: "Orange (center-left)",
    labelAr: "برتقالي (وسط اليسار)",
    points: "2355.78 1220.8 1967.37 911.66 2395.41 1381.97 2355.78 1220.8",
  },
  {
    id: 12,
    color: "#312783",
    labelEn: "Purple (center-right) — Marine",
    labelAr: "بنفسجي (وسط اليمين) — مارين",
    points: "4728.47 882.6 4501.24 1300.07 4284.58 1101.9 4728.47 882.6",
  },
  {
    id: 13,
    color: "#000002",
    labelEn: "Black (center) — Aselsan",
    labelAr: "أسود (وسط) — أسيلسان",
    points: "2001.28 499.48 3328.76 378.6 2944.99 898.45 2001.28 499.48",
  },
  {
    id: 14,
    color: "#6b7280",
    labelEn: "Neutral (far right, no fill class)",
    labelAr: "محايد (أقصى اليمين)",
    points:
      "6936.02 116.36 7550.33 0 7461.82 76.73 6983.58 391.15 6936.02 116.36",
  },
];

/** المثلثات التفاعلية (4) — من hero-bg */
export const HERO_TRIANGLES = HERO_BG_ACCENT_TRIANGLES;

/** أقسام الموقع عند النقر (معرّفات H1–H4) */
export const TRIANGLE_TO_SECTION: Record<number, string> = {
  1: "sectors",
  2: "marine",
  3: "frontiers",
  4: "aselsan",
};

/** كل مضلعات Assxet (1–14) */
export const HERO_ALL_ASSXET_IDS: number[] = HERO_ASSXET_ALL_TRIANGLES.map(
  (t) => t.id,
);

/** ألوان العلامة → القسم */
export const HERO_COLOR_TO_SECTION: Record<string, string> = {
  "#009fe3": "sectors",
  "#312783": "marine",
  "#f39422": "frontiers",
  "#000002": "aselsan",
};

export type AssxetLogoKind = "dynamics" | "marine" | "frontiers" | "aselsan";

export const HERO_COLOR_TO_LOGO: Record<string, AssxetLogoKind> = {
  "#009fe3": "dynamics",
  "#312783": "marine",
  "#f39422": "frontiers",
  "#000002": "aselsan",
};

export function normalizeHeroColor(color: string): string {
  return color.trim().toLowerCase();
}

export function getAssxetSectionIdForTriangle(tri: HeroTriangle): string | undefined {
  return HERO_COLOR_TO_SECTION[normalizeHeroColor(tri.color)];
}

export function getAssxetLogoKindForTriangle(
  tri: HeroTriangle,
): AssxetLogoKind | undefined {
  return HERO_COLOR_TO_LOGO[normalizeHeroColor(tri.color)];
}

export function isInteractiveAssxetTriangle(tri: HeroTriangle): boolean {
  return getAssxetSectionIdForTriangle(tri) !== undefined;
}

/** انتقال للقسم — كل مضلع بلون العلامة */
export const ASSXET_TO_SECTION: Record<number, string> = Object.fromEntries(
  HERO_ASSXET_ALL_TRIANGLES.map((t) => [
    t.id,
    getAssxetSectionIdForTriangle(t),
  ]).filter((entry): entry is [number, string] => Boolean(entry[1])),
);

export const ASSXET_LOGO_KIND: Partial<Record<number, AssxetLogoKind>> =
  Object.fromEntries(
    HERO_ASSXET_ALL_TRIANGLES.map((t) => [
      t.id,
      getAssxetLogoKindForTriangle(t),
    ]).filter((entry): entry is [number, AssxetLogoKind] => Boolean(entry[1])),
  );

export function assxetTrianglesByIds(ids: number[]): HeroTriangle[] {
  const set = new Set(ids);
  return HERO_ASSXET_ALL_TRIANGLES.filter((t) => set.has(t.id));
}

export function parsePolygonPoints(points: string): { x: number; y: number }[] {
  const nums = points.trim().split(/[\s,]+/).map(Number);
  const verts: { x: number; y: number }[] = [];
  for (let i = 0; i + 1 < nums.length; i += 2) {
    verts.push({ x: nums[i], y: nums[i + 1] });
  }
  return verts;
}

export function heroTriangleCentroid(points: string): { x: number; y: number } {
  const verts = parsePolygonPoints(points);
  return {
    x: verts.reduce((s, v) => s + v.x, 0) / verts.length,
    y: verts.reduce((s, v) => s + v.y, 0) / verts.length,
  };
}

export function getHeroSliceTransform(
  containerWidth: number,
  containerHeight: number,
) {
  return getHeroSliceTransformForViewbox(
    containerWidth,
    containerHeight,
    HERO_VIEWBOX_WIDTH,
    HERO_VIEWBOX_HEIGHT,
  );
}

export function getHeroSliceTransformForViewbox(
  containerWidth: number,
  containerHeight: number,
  viewboxWidth: number,
  viewboxHeight: number,
) {
  const scale = Math.max(
    containerWidth / viewboxWidth,
    containerHeight / viewboxHeight,
  );
  const offsetX = (containerWidth - viewboxWidth * scale) / 2;
  const offsetY = (containerHeight - viewboxHeight * scale) / 2;
  return { scale, offsetX, offsetY };
}

function bboxIntersects(
  a: { minX: number; minY: number; maxX: number; maxY: number },
  b: { minX: number; minY: number; maxX: number; maxY: number },
) {
  return (
    a.minX <= b.maxX &&
    a.maxX >= b.minX &&
    a.minY <= b.maxY &&
    a.maxY >= b.minY
  );
}

export function getVisibleHeroTriangleIds(
  containerWidth: number,
  containerHeight: number,
  triangles: HeroTriangle[] = HERO_TRIANGLES,
): number[] {
  if (containerWidth <= 0 || containerHeight <= 0) {
    return triangles.map((t) => t.id);
  }

  const { scale, offsetX, offsetY } = getHeroSliceTransform(
    containerWidth,
    containerHeight,
  );

  const visibleRegion = {
    minX: Math.max(0, -offsetX),
    minY: Math.max(0, -offsetY),
    maxX: Math.min(HERO_VIEWBOX_WIDTH * scale, containerWidth - offsetX),
    maxY: Math.min(HERO_VIEWBOX_HEIGHT * scale, containerHeight - offsetY),
  };

  const viewVisible = {
    minX: visibleRegion.minX / scale,
    minY: visibleRegion.minY / scale,
    maxX: visibleRegion.maxX / scale,
    maxY: visibleRegion.maxY / scale,
  };

  return triangles.filter((tri) => {
    const verts = parsePolygonPoints(tri.points);
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const v of verts) {
      minX = Math.min(minX, v.x);
      minY = Math.min(minY, v.y);
      maxX = Math.max(maxX, v.x);
      maxY = Math.max(maxY, v.y);
    }
    return bboxIntersects({ minX, minY, maxX, maxY }, viewVisible);
  }).map((t) => t.id);
}

export function heroTriangleScreenCenter(
  triangleId: number,
  containerRect: DOMRect,
  triangles: HeroTriangle[] = HERO_TRIANGLES,
): { x: number; y: number } | null {
  return heroTriangleScreenCenterForViewbox(
    triangleId,
    containerRect,
    triangles,
    HERO_VIEWBOX_WIDTH,
    HERO_VIEWBOX_HEIGHT,
    true,
  );
}

export function heroTriangleScreenCenterForViewbox(
  triangleId: number,
  containerRect: DOMRect,
  triangles: HeroTriangle[],
  viewboxWidth: number,
  viewboxHeight: number,
  flipY: boolean,
): { x: number; y: number } | null {
  const tri = triangles.find((t) => t.id === triangleId);
  if (!tri) return null;

  const center = heroTriangleCentroid(tri.points);
  const { scale, offsetX, offsetY } = getHeroSliceTransformForViewbox(
    containerRect.width,
    containerRect.height,
    viewboxWidth,
    viewboxHeight,
  );

  return {
    x: containerRect.left + offsetX + center.x * scale,
    y: flipY
      ? containerRect.top + containerRect.height - offsetY - center.y * scale
      : containerRect.top + offsetY + center.y * scale,
  };
}

/** موضع رقم الترقيم على الشاشة */
export function heroTriangleLabelScreenPosition(
  tri: HeroTriangle,
  containerRect: DOMRect,
): { x: number; y: number } {
  const center = heroTriangleCentroid(tri.points);
  const { scale, offsetX, offsetY } = getHeroSliceTransform(
    containerRect.width,
    containerRect.height,
  );
  return {
    x: containerRect.left + offsetX + center.x * scale,
    y: containerRect.top + containerRect.height - offsetY - center.y * scale,
  };
}
