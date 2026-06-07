"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { staticImageSrc } from "@/lib/static-image-src";
import droneIcon from "@/assets/669a0ce404909f959cf5cefdfea8336d84b11a8f.png";
import pipelineIcon from "@/assets/dee5cc203bd2569e78692655ee29ae032620b066.png";
import powerlineIcon from "@/assets/bd4ab696d64d5f8cbdecca7eb47780f5a1387c77.png";
import oilFacilityIcon from "@/assets/ba1377289758df9486546693e914fc1ee925cbea.png";
import dataAnalyzedIcon from "@/assets/2d6e478796bc360c4c5104f57282306e31757ce6.png";
import flareTowerIcon from "@/assets/1f5088bdec50b1d8838c57ad94eaa181f8ee070d.png";
import inventionsIcon from "@/assets/a1025a1283a6fe7aa4bda70a6b45931d9d23b66b.png";
import patentsIcon from "@/assets/12d9ae57507c85b392c04f545d72420580f1b204.png";
import backgroundImage from "@/assets/a37931aa43a9c64a23c34e75353df33ea1586a68.png";

const LERP_FACTOR = 0.12;

// Scroll-based counter: increases as section fills viewport, decreases when scrolling away
function AnimatedCounter({
  targetValue,
  suffix = "",
  progress,
}: {
  targetValue: number;
  suffix?: string;
  progress: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const currentRef = useRef(0);

  useEffect(() => {
    const target = progress * targetValue;
    let rafId: number;

    const update = () => {
      const current = currentRef.current;
      const diff = target - current;
      if (Math.abs(diff) < 0.5) {
        currentRef.current = target;
        setDisplayValue(Math.round(target));
        return;
      }
      currentRef.current = current + diff * LERP_FACTOR;
      setDisplayValue(Math.round(currentRef.current));
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [progress, targetValue]);

  const formattedCount = Math.round(displayValue).toLocaleString();

  return (
    <span>
      {formattedCount}
      {suffix}
    </span>
  );
}

const FULL_THRESHOLD = 0.82;

function useAchievementsScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [effectiveProgress, setEffectiveProgress] = useState(0);
  const maxSeenRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // التمرير يحدث داخل app-scroll-container وليس في window
    const scrollContainer =
      (el.closest(".app-scroll-container") as HTMLElement | null) ?? undefined;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const top = Math.max(rect.top, 0);
      const bottom = Math.min(rect.bottom, vh);
      const visible = Math.max(0, bottom - top);
      const p = Math.min(1, Math.max(0, visible / vh));

      if (p > maxSeenRef.current) maxSeenRef.current = p;
      const hasFullyViewed = maxSeenRef.current >= FULL_THRESHOLD;

      const isBelowViewport = rect.top > vh;
      if (isBelowViewport && hasFullyViewed) {
        setEffectiveProgress(1);
      } else {
        const display = p >= FULL_THRESHOLD ? 1 : p;
        setEffectiveProgress(display);
      }
    };

    update();
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", update, { passive: true });
    } else {
      window.addEventListener("scroll", update, { passive: true });
    }
    window.addEventListener("resize", update);
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", update);
      } else {
        window.removeEventListener("scroll", update);
      }
      window.removeEventListener("resize", update);
    };
  }, []);

  return { ref, progress: effectiveProgress };
}

export default function AchievementsPage() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: sectionRef, progress: scrollProgress } =
    useAchievementsScrollProgress();

  const achievements = [
    {
      icon: () => (
        <img
          src={staticImageSrc(droneIcon)}
          alt="Drone"
          className="w-auto h-auto max-w-20 max-h-20 md:max-w-24 md:max-h-24 object-contain"
        />
      ),
      targetNumber: 30000,
      suffix: "+",
      label: t.achievements.flights,
      noCircles: true,
    },
    {
      icon: () => (
        <img
          src={staticImageSrc(pipelineIcon)}
          alt="Pipeline"
          className="w-auto h-auto max-w-20 max-h-20 md:max-w-24 md:max-h-24 object-contain"
        />
      ),
      targetNumber: 15000,
      suffix: " KM+",
      label: t.achievements.pipeline,
      noCircles: true,
    },
    {
      icon: () => (
        <img
          src={staticImageSrc(powerlineIcon)}
          alt="Powerline"
          className="w-auto h-auto max-w-20 max-h-20 md:max-w-24 md:max-h-24 object-contain"
        />
      ),
      targetNumber: 30000,
      suffix: " KM+",
      label: t.achievements.powerline,
      noCircles: true,
    },
    {
      icon: () => (
        <img
          src={staticImageSrc(oilFacilityIcon)}
          alt="Oil Facility"
          className="w-auto h-auto max-w-20 max-h-20 md:max-w-24 md:max-h-24 object-contain"
        />
      ),
      targetNumber: 2400,
      suffix: "+",
      label: t.achievements.oilFacilities,
      noCircles: true,
    },
    {
      icon: () => (
        <img
          src={staticImageSrc(dataAnalyzedIcon)}
          alt="Data Analyzed"
          className="w-auto h-auto max-w-20 max-h-20 md:max-w-24 md:max-h-24 object-contain"
        />
      ),
      targetNumber: 550,
      suffix: " TB+",
      label: t.achievements.dataAnalyzed,
      noCircles: true,
    },
    {
      icon: () => (
        <img
          src={staticImageSrc(flareTowerIcon)}
          alt="Flare Tower"
          className="w-auto h-auto max-w-20 max-h-20 md:max-w-24 md:max-h-24 object-contain"
        />
      ),
      targetNumber: 500,
      suffix: "+",
      label: t.achievements.flareTowers,
      noCircles: true,
    },
    {
      icon: () => (
        <img
          src={staticImageSrc(inventionsIcon)}
          alt="Inventions"
          className="w-auto h-auto max-w-20 max-h-20 md:max-w-24 md:max-h-24 object-contain"
        />
      ),
      targetNumber: 8,
      suffix: "",
      label: t.achievements.inventions,
      noCircles: true,
    },
    {
      icon: () => (
        <img
          src={staticImageSrc(patentsIcon)}
          alt="Patents"
          className="w-auto h-auto max-w-20 max-h-20 md:max-w-24 md:max-h-24 object-contain"
        />
      ),
      targetNumber: 6,
      suffix: "",
      label: t.achievements.patents,
      noCircles: true,
    },
  ];

  const isInView = scrollProgress > 0.5;

  return (
    <div
      ref={sectionRef}
      className="w-full h-full min-h-0 relative overflow-hidden flex flex-col items-center px-4 md:px-8 lg:px-12"
      style={{ backgroundColor: "#F5F3EE" }}
    >
      {/* Background Image - Architectural Landmarks - Moving like News Ticker (as in old component) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-48 overflow-hidden" style={{ direction: "ltr" }}>
        <motion.div
          className="absolute bottom-0 left-0 h-32 md:h-40 lg:h-48 bg-no-repeat w-[300%]"
          style={{
            backgroundImage: `url(${staticImageSrc(backgroundImage)})`,
            backgroundSize: "auto 120%",
            backgroundPosition: "0 bottom",
            backgroundRepeat: "repeat-x",
            opacity: 0.6,
            direction: "ltr",
          }}
          animate={{ x: [0, "-33.333%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Title */}
      <motion.h1
        className="absolute top-4 left-4 md:top-6 md:left-8 text-gray-900 text-base md:text-lg lg:text-xl"
        style={{
          fontFamily: "DIN Arabic, sans-serif",
          fontWeight: 500,
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t.achievements.title}
      </motion.h1>

      {/* Achievements */}
      <div
        className="relative w-full flex flex-col items-center pt-12 md:pt-14 lg:pt-16 flex-1 min-h-0"
        style={{ zIndex: 10 }}
      >
        {/* Desktop: horizontal row with wave pattern */}
        <div className="hidden md:flex relative w-full gap-0 justify-between items-end px-20 mb-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const shouldMoveDown = index % 2 === 1;

            return (
              <motion.div
                key={index}
                className={`flex flex-col items-center w-[100px] lg:w-[110px] ${shouldMoveDown ? "mt-[45px]" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon with Concentric Circles */}
                <motion.div
                  className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center mb-3 md:mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Concentric Circles */}
                  {!achievement.noCircles && (
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 96 96"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="46"
                        fill="none"
                        stroke="#D1D5DB"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        fill="none"
                        stroke="#D1D5DB"
                        strokeWidth="0.5"
                        opacity="0.35"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="38"
                        fill="none"
                        stroke="#D1D5DB"
                        strokeWidth="0.5"
                        opacity="0.4"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="34"
                        fill="none"
                        stroke="#D1D5DB"
                        strokeWidth="0.5"
                        opacity="0.45"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="30"
                        fill="none"
                        stroke="#D1D5DB"
                        strokeWidth="0.5"
                        opacity="0.5"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="26"
                        fill="none"
                        stroke="#D1D5DB"
                        strokeWidth="0.5"
                        opacity="0.55"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="22"
                        fill="none"
                        stroke="#D1D5DB"
                        strokeWidth="0.5"
                        opacity="0.6"
                      />
                    </svg>
                  )}
                  {/* Icon */}
                  <div className="relative z-10 flex h-7 w-7 items-center justify-center text-gray-700 md:h-8 md:w-8">
                    <Icon />
                  </div>
                </motion.div>

                {/* Number */}
                <div
                  className="text-gray-700 text-center mb-4 md:mb-6 text-base md:text-lg lg:text-[20pt]"
                  style={{ fontWeight: 600 }}
                >
                  <AnimatedCounter
                    targetValue={achievement.targetNumber}
                    suffix={achievement.suffix}
                    progress={scrollProgress}
                  />
                </div>

                {/* Vertical Dotted Line with Drawing Animation */}
                <motion.svg
                  width="2"
                  height={shouldMoveDown ? "55" : "100"}
                  viewBox={`0 0 2 ${shouldMoveDown ? 55 : 100}`}
                  className="overflow-visible"
                >
                  <motion.line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2={shouldMoveDown ? 55 : 100}
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeDashoffset={
                      hoveredIndex === index || isInView
                        ? 0
                        : shouldMoveDown
                          ? 58
                          : 104
                    }
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: isInView ? 1.8 + index * 0.15 : 0,
                    }}
                  />
                </motion.svg>

                {/* Dot at bottom of line */}
                <motion.div
                  className="w-2.5 h-2.5 bg-gray-800 rounded-full my-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 + index * 0.15 }}
                />

                {/* Label */}
                <div
                  className="text-gray-800 text-center leading-tight whitespace-pre-line text-[10px] md:text-xs"
                  style={{
                    fontWeight: 500,
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {achievement.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: 2-column grid, no horizontal scroll, same counter & style */}
        <div className="md:hidden grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-y-5 px-2 sm:px-4 mb-4 w-full max-w-lg mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.08 }}
              >
                <motion.div
                  className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-2 [&_img]:max-w-full [&_img]:max-h-full [&_img]:object-contain"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon />
                </motion.div>
                <div
                  className="text-gray-700 text-center mb-2 text-sm sm:text-base"
                  style={{ fontWeight: 600, fontFamily: "DIN Arabic, sans-serif" }}
                >
                  <AnimatedCounter
                    targetValue={achievement.targetNumber}
                    suffix={achievement.suffix}
                    progress={scrollProgress}
                  />
                </div>
                <motion.svg
                  width="2"
                  height="40"
                  viewBox="0 0 2 40"
                  className="overflow-visible"
                >
                  <motion.line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="40"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeDashoffset={isInView ? 0 : 44}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: isInView ? 1.2 + index * 0.1 : 0,
                    }}
                  />
                </motion.svg>
                <motion.div
                  className="w-2.5 h-2.5 bg-gray-800 rounded-full my-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.08 }}
                />
                <div
                  className="text-gray-800 text-center leading-tight whitespace-pre-line text-[10px] sm:text-xs"
                  style={{
                    fontWeight: 500,
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {achievement.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Spacer: pushes timeline to bottom on desktop */}
        <div className="hidden md:block flex-1 min-h-4 w-full" aria-hidden="true" />

        {/* Horizontal Timeline */}
        <div className="w-full px-4 md:px-20 mt-4 md:mt-6 flex-shrink-0 pb-6 md:pb-8">
          <motion.div
            className="h-0.5 bg-gray-900 relative"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ transformOrigin: "left" }}
          >
            {/* Timeline Dots */}
            {achievements.map((_, index) => (
              <motion.div
                key={index}
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-gray-900 rounded-full"
                style={{
                  left: `${(index / (achievements.length - 1)) * 100}%`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
