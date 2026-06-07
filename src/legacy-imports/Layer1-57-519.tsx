import { staticImageSrc } from "@/lib/static-image-src";
import React, { useState } from "react";
import imgRectangle1 from "@/assets/6361bdb9bfba5f30f5c0c8a84044844a6e47b954.png";
import {
  HERO_TRIANGLES,
  HERO_VIEWBOX_HEIGHT,
  HERO_VIEWBOX_WIDTH,
  getAssxetSectionIdForTriangle,
  isInteractiveAssxetTriangle,
  type HeroTriangle,
} from "@/components/site/sinan-app/hero-triangles";

function Group1() {
  return (
    <div
      className="absolute contents inset-[53.65%_0.05%_0_1.65%]"
      data-name="Group"
    >
      <div className="absolute flex inset-[53.65%_0.05%_0_1.65%] items-center justify-center">
        <div className="flex-none h-[568.32px] min-h-[40vh] w-full max-w-[1889.28px] rotate-[180deg] shrink-0">
          <div
            className="relative size-full overflow-hidden"
            data-name="Rectangle"
          >
            <div className="absolute inset-0 pointer-events-none">
              <img
                alt=""
                className="absolute left-0 top-0 h-full w-auto min-w-full object-cover object-left"
                src={staticImageSrc(imgRectangle1)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute contents inset-[47.07%_0_11.93%_0.01%]"
      data-name="Clip path group"
    >
      <Group1 />
    </div>
  );
}

type Group2Props = {
  hideGrayRect?: boolean;
  hoveredId?: number | null;
  setHoveredId?: (id: number | null) => void;
  onTriangleClick?: (id: number) => void;
  onTriangleHoverChange?: (id: number | null, e?: React.MouseEvent) => void;
  /** على الموبايل: عرض المثلثات الظاهرة في الإطار فقط */
  visibleTriangleIds?: number[];
  /** مضلعات مخصّصة (مثلاً من أداة الاختيار A1–A14) */
  customTriangles?: HeroTriangle[];
  /** طبقة أزرار شبه شفافة فوق خلفية تحتوي نفس المثلثات */
  hitAreaOnly?: boolean;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  flipY?: boolean;
};

function Group2({
  hideGrayRect,
  hoveredId = null,
  setHoveredId,
  onTriangleClick,
  onTriangleHoverChange,
  visibleTriangleIds,
  customTriangles,
  hitAreaOnly,
  viewBoxWidth = HERO_VIEWBOX_WIDTH,
  viewBoxHeight = HERO_VIEWBOX_HEIGHT,
  flipY = true,
}: Group2Props) {
  const isHoverable = typeof setHoveredId === "function";
  const isClickable = typeof onTriangleClick === "function";
  const interactiveClass =
    isHoverable || isClickable
      ? "cursor-none transition-[filter,opacity] duration-300"
      : "";

  // مضلعات Assxet.svg — viewBox 0 0 7872 2368
  const assxetPolygons: HeroTriangle[] = customTriangles?.length
    ? customTriangles
    : visibleTriangleIds && visibleTriangleIds.length > 0
      ? HERO_TRIANGLES.filter((p) => visibleTriangleIds.includes(p.id))
      : HERO_TRIANGLES;

  return (
    <div
      className="absolute inset-0 w-full h-full"
      data-name="Group"
      style={{ transform: flipY ? "scaleY(-1)" : undefined }}
    >
      {!hideGrayRect && <ClipPathGroup />}
      {/* SVG واحد بنفس viewBox ومواضع Assxet.svg — المثلثات الملونة في أماكنها الأصلية */}
      <svg
        className={`block w-full h-full ${interactiveClass}`.trim()}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {assxetPolygons.map((poly) => {
          const interactive = isInteractiveAssxetTriangle(poly);
          const hoveredPoly =
            hoveredId != null
              ? assxetPolygons.find((p) => p.id === hoveredId)
              : null;
          const isGroupHovered =
            interactive &&
            hoveredPoly != null &&
            poly.color === hoveredPoly.color;
          const isBlack = poly.color === "#000002";
          const idleOpacity = hitAreaOnly
            ? isBlack
              ? 0.32
              : 0.2
            : isBlack
              ? 0.7
              : 0.5;
          const opacity = isGroupHovered ? 1 : idleOpacity;
          const stroke = hitAreaOnly
            ? isBlack
              ? "rgba(255,255,255,0.5)"
              : poly.color
            : undefined;
          const strokeOpacity = hitAreaOnly ? (isGroupHovered ? 0.95 : 0.55) : undefined;
          const strokeWidth = hitAreaOnly ? (isGroupHovered ? 12 : 6) : undefined;
          const filter = isBlack
            ? isGroupHovered
              ? "drop-shadow(0 0 12px rgba(255,255,255,0.35)) drop-shadow(0 0 24px rgba(255,255,255,0.2))"
              : hitAreaOnly
                ? "drop-shadow(0 0 8px rgba(255,255,255,0.2))"
                : "drop-shadow(0 0 6px rgba(255, 255, 255, 0.2))"
            : isGroupHovered
              ? `drop-shadow(0 0 12px ${poly.color}) drop-shadow(0 0 24px ${poly.color})`
              : hitAreaOnly
                ? `drop-shadow(0 0 8px ${poly.color}55)`
                : `drop-shadow(0 0 6px ${poly.color}40)`;
          const canHover = isHoverable && interactive;
          const canClick =
            isClickable && interactive && getAssxetSectionIdForTriangle(poly);
          return (
            <g
              key={poly.id}
              style={{ pointerEvents: interactive ? "auto" : "none" }}
              onMouseEnter={
                canHover
                  ? (e) => {
                      setHoveredId!(poly.id);
                      onTriangleHoverChange?.(poly.id, e);
                    }
                  : undefined
              }
              onMouseLeave={
                canHover
                  ? () => {
                      setHoveredId!(null);
                      onTriangleHoverChange?.(null);
                    }
                  : undefined
              }
              onClick={
                canClick ? () => onTriangleClick!(poly.id) : undefined
              }
            >
              <polygon
                points={poly.points}
                fill={poly.color}
                opacity={opacity}
                pointerEvents={interactive ? "all" : "none"}
                stroke={stroke}
                strokeOpacity={strokeOpacity}
                strokeWidth={strokeWidth}
                style={{ filter }}
              >
                {!isGroupHovered && interactive && (
                  <animate
                    attributeName="opacity"
                    values={
                      hitAreaOnly
                        ? isBlack
                          ? "0.22;0.55;0.22"
                          : "0.12;0.42;0.12"
                        : isBlack
                          ? "0.7;0.95;0.7"
                          : "0.5;0.85;0.5"
                    }
                    dur={hitAreaOnly ? "2.1s" : "2.5s"}
                    repeatCount="indefinite"
                  />
                )}
                {hitAreaOnly && !isGroupHovered && interactive && (
                  <animate
                    attributeName="stroke-opacity"
                    values={isBlack ? "0.35;0.9;0.35" : "0.35;0.85;0.35"}
                    dur="2.1s"
                    repeatCount="indefinite"
                  />
                )}
              </polygon>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

type LayerProps = {
  hideGrayRect?: boolean;
  trianglesOnly?: boolean;
  onTriangleClick?: (id: number) => void;
  onTriangleHoverChange?: (id: number | null, e?: React.MouseEvent) => void;
  visibleTriangleIds?: number[];
  customTriangles?: HeroTriangle[];
  hitAreaOnly?: boolean;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  flipY?: boolean;
};

/** ربط المثلثات الأربعة بأقسام الصفحة للانتقال عند النقر */
export { TRIANGLE_TO_SECTION } from "@/components/site/sinan-app/hero-triangles";

export default function Layer({
  hideGrayRect,
  trianglesOnly,
  onTriangleClick,
  onTriangleHoverChange,
  visibleTriangleIds,
  customTriangles,
  hitAreaOnly,
  viewBoxWidth,
  viewBoxHeight,
  flipY,
}: LayerProps = {}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div
      className="relative size-full min-w-full min-h-full"
      data-name="Layer_1"
    >
      {!trianglesOnly && (
        <div className="absolute inset-0" data-name="Vector">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1919.75 644"
          >
            <path d="M1919.75 0H0V644H1919.75V0Z" fill="#08080A" id="Vector" />
          </svg>
        </div>
      )}
      <Group2
        hideGrayRect={hideGrayRect}
        hoveredId={hoveredId}
        setHoveredId={trianglesOnly ? setHoveredId : undefined}
        onTriangleClick={trianglesOnly ? onTriangleClick : undefined}
        onTriangleHoverChange={onTriangleHoverChange}
        visibleTriangleIds={visibleTriangleIds}
        customTriangles={customTriangles}
        hitAreaOnly={hitAreaOnly}
        viewBoxWidth={viewBoxWidth}
        viewBoxHeight={viewBoxHeight}
        flipY={flipY}
      />
    </div>
  );
}
