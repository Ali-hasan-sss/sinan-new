"use client";

import { type RefObject, useEffect, useState } from "react";
import { motion } from "motion/react";
import LayerHome from "@/legacy-imports/Layer1-57-519";
import {
  dynamicsMarineLogoTile,
  sinanDynamicsLogoPng,
  sinanMarineLogoPng,
  SINAN_SITE_PX,
} from "../constants";
import {
  getAssxetLogoKindForTriangle,
  getAssxetSectionIdForTriangle,
  HERO_MOBILE_ACCENT_TRIANGLES,
  HERO_MOBILE_VIEWBOX_HEIGHT,
  HERO_MOBILE_VIEWBOX_WIDTH,
  HERO_VIEWBOX_HEIGHT,
  HERO_VIEWBOX_WIDTH,
  HERO_ALL_ASSXET_IDS,
  assxetTrianglesByIds,
  heroTriangleScreenCenterForViewbox,
} from "../hero-triangles";
import type { AssignSectionRef, SectionRefs } from "../types";

const ALL_ASSXET_TRIANGLES = assxetTrianglesByIds(HERO_ALL_ASSXET_IDS);
const MOBILE_HERO_TRIANGLES = HERO_MOBILE_ACCENT_TRIANGLES;

export function HomeSection({
  assignSectionRef,
  heroSvgRef,
  heroHoveredTriangleId,
  setHeroHoveredTriangleId,
  sectionRefs,
  sectionInViewHome,
  locale,
}: {
  assignSectionRef: AssignSectionRef;
  heroSvgRef: RefObject<HTMLDivElement | null>;
  heroHoveredTriangleId: number | null;
  setHeroHoveredTriangleId: (id: number | null) => void;
  sectionRefs: SectionRefs;
  sectionInViewHome: boolean;
  locale: "en" | "ar";
}) {
  const [isMobileHero, setIsMobileHero] = useState(false);
  const activeTriangles = isMobileHero
    ? MOBILE_HERO_TRIANGLES
    : ALL_ASSXET_TRIANGLES;
  const activeViewBoxWidth = isMobileHero
    ? HERO_MOBILE_VIEWBOX_WIDTH
    : HERO_VIEWBOX_WIDTH;
  const activeViewBoxHeight = isMobileHero
    ? HERO_MOBILE_VIEWBOX_HEIGHT
    : HERO_VIEWBOX_HEIGHT;

  const hoveredTriangle =
    heroHoveredTriangleId != null
      ? activeTriangles.find((t) => t.id === heroHoveredTriangleId)
      : undefined;
  const hoverLogoKind = hoveredTriangle
    ? getAssxetLogoKindForTriangle(hoveredTriangle)
    : undefined;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const syncMobile = () => setIsMobileHero(media.matches);
    syncMobile();
    media.addEventListener("change", syncMobile);
    return () => media.removeEventListener("change", syncMobile);
  }, []);

  const scrollToSection = (assxetId: number) => {
    const tri = activeTriangles.find((t) => t.id === assxetId);
    const sectionId = tri ? getAssxetSectionIdForTriangle(tri) : undefined;
    if (!sectionId) return;
    const target =
      sectionRefs.current[sectionId] ??
      document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={assignSectionRef("home")}
      id="home"
      className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate bg-gray-950"
    >
      <div
        ref={heroSvgRef}
        className={
          isMobileHero
            ? "absolute inset-0 pointer-events-none"
            : "absolute inset-0 pointer-events-none md:inset-y-0 md:left-1/2 md:w-[110vw] md:max-w-none md:-translate-x-1/2"
        }
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 w-full h-full">
          {isMobileHero ? (
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src={`${"/"}hero-mobile.svg`}
                alt=""
                aria-hidden
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ) : (
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              aria-hidden
              style={{
                backgroundColor: "#08080A",
                backgroundImage: `url(${"/"}hero-bg.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transform: "scaleY(-1)",
              }}
            />
          )}

          <div
            className="absolute inset-0 z-[1] w-full h-full pointer-events-auto"
            onMouseLeave={() => setHeroHoveredTriangleId(null)}
          >
            {typeof LayerHome === "function" ? (
              <LayerHome
                hideGrayRect
                trianglesOnly
                customTriangles={activeTriangles}
                hitAreaOnly={isMobileHero}
                viewBoxWidth={activeViewBoxWidth}
                viewBoxHeight={activeViewBoxHeight}
                flipY={!isMobileHero}
                onTriangleHoverChange={setHeroHoveredTriangleId}
                onTriangleClick={scrollToSection}
              />
            ) : null}
          </div>
        </div>
      </div>

      {heroHoveredTriangleId !== null && hoverLogoKind && (() => {
        const svgEl = heroSvgRef.current;
        if (!svgEl) return null;
        const rect = svgEl.getBoundingClientRect();
        const pos = heroTriangleScreenCenterForViewbox(
          heroHoveredTriangleId,
          rect,
          activeTriangles,
          activeViewBoxWidth,
          activeViewBoxHeight,
          !isMobileHero,
        );
        if (!pos) return null;
        return (
          <div
            className="fixed flex flex-col items-center justify-center pointer-events-none z-[20]"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {hoverLogoKind === "dynamics" && (
              <div className={dynamicsMarineLogoTile}>
                <img
                  src={sinanDynamicsLogoPng}
                  alt="Sinan Dynamics"
                  className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                />
              </div>
            )}
            {hoverLogoKind === "marine" && (
              <div className={dynamicsMarineLogoTile}>
                <img
                  src={sinanMarineLogoPng}
                  alt="Sinan Marine"
                  className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                />
              </div>
            )}
            {hoverLogoKind === "frontiers" && (
              <img
                src={`${"/"}simnfor.png`}
                alt="SINAN FRONTIERS"
                className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              />
            )}
            {hoverLogoKind === "aselsan" && (
              <div className="flex flex-col items-center ">
                <img
                  src={`${"/"}logo-assislian.png`}
                  alt="Sinan Aselsan"
                  className="h-14 sm:h-16 md:h-20 w-auto max-w-[min(28vw,260px)] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                />
                <img
                  src={`${"/"}title-assislian.png`}
                  alt="Sinan Aselsan Title"
                  className="h-4 sm:h-5 md:h-6 w-auto max-w-[min(26vw,260px)] object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                />
              </div>
            )}
          </div>
        );
      })()}

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center ${SINAN_SITE_PX} min-h-0 pointer-events-none`}
        style={{ zIndex: 10 }}
      >
        <motion.div
          initial={false}
          className="pointer-events-auto flex flex-col items-center justify-center"
          animate={
            sectionInViewHome
              ? {
                  opacity: 1,
                  scale: [0.92, 1, 1.07, 1, 1.04, 1],
                }
              : { opacity: 0, scale: 0.92 }
          }
          transition={{
            opacity: { duration: 0.5 },
            scale: sectionInViewHome
              ? {
                  duration: 1.4,
                  times: [0, 0.35, 0.5, 0.65, 0.82, 1],
                  ease: "easeOut",
                }
              : { duration: 0.3 },
          }}
        >
          <div
            className="flex flex-col items-center justify-center"
            aria-hidden
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={`${"/"}logo/logo_${locale === "ar" ? "arabice" : "english"}_ondark.png`}
                alt="Sinan Advanced Industries"
                className="h-40 sm:h-52 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] 3xl:h-[34rem] 4xl:h-[36rem] w-auto max-h-[85dvh] select-none object-contain"
                draggable={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
