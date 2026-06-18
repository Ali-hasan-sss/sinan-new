"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import solutionsBg from "@/assets/3004dc5a5d12ee327e0bb3709f487de52a320930.png";
import connectingLines from "@/assets/f4a4b0ebdb8ac529a76b1ee55f33b820ca3ff3ba.png";
import cyberLogo from "@/assets/6dcb2184ab0b8f46c9fb262f728e15f319f393da.png";
import maritimeLogo from "@/assets/c1ac93a6c938a74dea95a6ec8d8ef43174627311.png";
import landLogo from "@/assets/e148e8f3ba9387c1003e8bf5da1696c2cf8435d8.png";
import airLogo from "@/assets/cd1779045309571142b8f0a31bf6fab645307577.png";
import spaceLogo from "@/assets/9dd7749060815e64b5bacb0298a6f6e916d93f98.png";
import { staticImageSrc } from "@/lib/static-image-src";
import { GraduationCap, Radar, Shield, type LucideIcon } from "lucide-react";
import { SINAN_SITE_PL, SINAN_SITE_PX } from "@/components/site/sinan-app/constants";
const CENTER_LOGO_URL = `/logo/logo_english_onlight.png`;
const ROTATING_CIRCLE_URL = `/cercle.png`;
const ROTATING_CIRCLE_WITHOUT_URL = `/circle_without.png`;

/** مدة دوران الدائرتين الرئيسيتين (ثانية — أكبر = أبطأ) */
const MAIN_RING_DURATION = 56;
/** مدد دوائر الحلول الدوارة على سطح المكتب */
const ORBIT_RING_DURATION_DESKTOP = {
  space: 17,
  air: 24,
  land: 31,
  maritime: 21,
  cyber: 28,
} as const;
/** مدد دوائر الحلول الدوارة على الموبايل */
const ORBIT_RING_DURATION_MOBILE = {
  space: 14,
  air: 17,
  land: 21,
  maritime: 19,
  cyber: 16,
} as const;

const CANVAS_W = 1300;
const CANVAS_H = 900;

function SolutionOptionIcon({
  icon: Icon,
  variant = "desktop",
}: {
  icon: LucideIcon;
  variant?: "desktop" | "mobile";
}) {
  const boxClass =
    variant === "desktop" ? "w-12 h-12" : "w-8 h-8 sm:w-9 sm:h-9";
  const iconClass =
    variant === "desktop" ? "w-7 h-7" : "w-5 h-5 sm:w-5 sm:h-5";

  return (
    <div
      className={`${boxClass} flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-100 text-gray-900`}
    >
      <Icon className={iconClass} strokeWidth={1.75} aria-hidden />
    </div>
  );
}

/** تأخير ظهور الدوائر بعد خط الربط عند تفعيل Defense */
const CIRCLES_REVEAL_DELAY_MS = 450;
const CIRCLES_FADE_IN_TRANSITION = {
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function SolutionsPage() {
  const { t } = useLanguage();
  const lines =
    (t.about as { empoweringLines?: string }).empoweringLines?.split("\n") ??
    [];
  const [defenseHovered, setDefenseHovered] = useState(false);
  const [circlesRevealed, setCirclesRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [fitScale, setFitScale] = useState(1);

  const activateDefense = () => setDefenseHovered(true);
  const showConnectingLines = defenseHovered || circlesRevealed;

  useEffect(() => {
    if (!defenseHovered) return;
    const timer = window.setTimeout(
      () => setCirclesRevealed(true),
      CIRCLES_REVEAL_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [defenseHovered]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setDefenseHovered(false);
          setCirclesRevealed(false);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight - 50;
      const s = Math.min(w / CANVAS_W, h / CANVAS_H);
      setFitScale(Math.max(0.3, s));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div
      ref={rootRef}
      dir="ltr"
      className="w-full h-full min-h-0 relative overflow-hidden flex flex-col"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img src={staticImageSrc(solutionsBg)} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Desktop: لوحة ثابتة بأبعاد دقيقة — نفس التموضع على جميع الشاشات الكبيرة */}
      <div
        ref={sectionRef}
        className="hidden md:flex absolute inset-0 items-center justify-center overflow-hidden"
        style={{ zIndex: 5 }}
      >
        <div
          className="relative flex-shrink-0 overflow-hidden"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${fitScale})`,
            transformOrigin: "center center",
          }}
        >
          {/* خلفية اللوحة — مفعّلة مسبقاً داخل الكانفس، تم تعطيلها الآن حتى لا تتكرر خلفية المضلعات
          <div className="absolute inset-0">
            <img
              src={staticImageSrc(solutionsBg)}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          */}
          {/* نص خلفية كبير في الجهة اليسرى — يظهر مع الدوائر */}
          <motion.div
            className={`absolute inset-y-0 left-0 flex items-center pointer-events-none ${SINAN_SITE_PL}`}
            style={{ zIndex: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: circlesRevealed ? 1 : 0 }}
            transition={CIRCLES_FADE_IN_TRANSITION}
          >
            <div className="space-y-0.5 lg:space-y-1 max-w-md lg:max-w-xl xl:max-w-2xl">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className="text-white/10 text-left font-bold leading-[0.95] text-[clamp(2.5rem,4vw,4rem)] lg:text-[clamp(3.5rem,4.8vw,6.5rem)] xl:text-[clamp(4rem,5.2vw,7.5rem)] 2xl:text-[clamp(4.25rem,5.5vw,8.25rem)] tracking-tight"
                  style={{ fontFamily: "DIN Arabic, sans-serif" }}
                >
                  {line}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: circlesRevealed ? 1 : 0 }}
            transition={CIRCLES_FADE_IN_TRANSITION}
            style={{ pointerEvents: circlesRevealed ? "auto" : "none" }}
          >
          {/* Rotating Circle 1 - Clockwise — موضع ثابت بالبكسل */}
          <motion.div
            className="absolute"
            style={{
              left: 640,
              top: 225,
              width: 400,
              height: 400,
              zIndex: 5,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: MAIN_RING_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src={ROTATING_CIRCLE_URL}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Rotating Circle 2 - Counter Clockwise - Same Position */}
          <motion.div
            className="absolute"
            style={{
              right: "20%",
              top: "25%",
              width: "400px",
              height: "400px",
              zIndex: 5,
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: MAIN_RING_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src={ROTATING_CIRCLE_WITHOUT_URL}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Static Logo in Center */}
          <div
            className="absolute"
            style={{
              left: 640,
              top: 225,
              width: 400,
              height: 400,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={CENTER_LOGO_URL}
              alt="Center Logo"
              style={{ width: "180px", height: "180px", objectFit: "contain" }}
            />
          </div>

          {/* Orbiting Circles Container */}
          <div
            className="absolute"
            style={{
              right: "20%",
              top: "25%",
              width: "400px",
              height: "400px",
              zIndex: 15,
            }}
          >
            {/* Space Defense Systems - Top Center */}
            <div
              className="absolute flex flex-col items-center gap-2.5"
              style={{
                left: "50%",
                top: "-195px",
                marginLeft: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              <div className="relative w-[140px] h-[140px] flex-shrink-0">
                <motion.svg
                  width="140"
                  height="140"
                  style={{ position: "absolute" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: ORBIT_RING_DURATION_DESKTOP.space,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="65"
                    fill="transparent"
                    stroke="#9CA3AF"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />
                </motion.svg>
                <div
                  style={{
                    position: "absolute",
                    width: "140px",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 20,
                  }}
                >
                  <img
                    src={staticImageSrc(spaceLogo)}
                    alt="Space Defense Logo"
                    style={{
                      width: "280px",
                      height: "280px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <span
                className="inline-block px-2.5 py-1.5 rounded bg-white/95 text-gray-900 text-sm font-bold text-center whitespace-nowrap shadow-sm"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.solutions.spaceDefense}
              </span>
            </div>

            {/* Air Defense Systems - Right */}
            <div
              className="absolute flex flex-col items-center gap-2.5"
              style={{
                left: "calc(50% + 350px)",
                top: "50%",
                marginLeft: "-70px",
                marginTop: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              <div className="relative w-[140px] h-[140px] flex-shrink-0">
                <motion.svg
                  width="140"
                  height="140"
                  style={{ position: "absolute" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: ORBIT_RING_DURATION_DESKTOP.air,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="65"
                    fill="transparent"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />
                </motion.svg>
                <div
                  style={{
                    position: "absolute",
                    width: "140px",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 20,
                  }}
                >
                  <img
                    src={staticImageSrc(airLogo)}
                    alt="Air Defense Logo"
                    style={{
                      width: "280px",
                      height: "280px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <span
                className="inline-block px-2.5 py-1.5 rounded bg-white/95 text-gray-900 text-sm font-bold text-center whitespace-nowrap shadow-sm"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.solutions.airDefense}
              </span>
            </div>

            {/* Land Defense Systems - Bottom Right */}
            <div
              className="absolute flex flex-col items-center gap-2.5"
              style={{
                left: "calc(50% + 275px)",
                top: "calc(50% + 275px)",
                marginLeft: "-70px",
                marginTop: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              <div className="relative w-[140px] h-[140px] flex-shrink-0">
                <motion.svg
                  width="140"
                  height="140"
                  style={{ position: "absolute" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: ORBIT_RING_DURATION_DESKTOP.land,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="65"
                    fill="transparent"
                    stroke="#9CA3AF"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />
                </motion.svg>
                <div
                  style={{
                    position: "absolute",
                    width: "140px",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 20,
                  }}
                >
                  <img
                    src={staticImageSrc(landLogo)}
                    alt="Land Defense Logo"
                    style={{
                      width: "280px",
                      height: "280px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <span
                className="inline-block px-2.5 py-1.5 rounded bg-white/95 text-gray-900 text-sm font-bold text-center whitespace-nowrap shadow-sm"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.solutions.landDefense}
              </span>
            </div>

            {/* Maritime Defense Systems - Bottom Left */}
            <div
              className="absolute flex flex-col items-center gap-2.5"
              style={{
                left: "calc(50% - 275px)",
                top: "calc(50% + 275px)",
                marginLeft: "-70px",
                marginTop: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              <div className="relative w-[140px] h-[140px] flex-shrink-0">
                <motion.svg
                  width="140"
                  height="140"
                  style={{ position: "absolute" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: ORBIT_RING_DURATION_DESKTOP.maritime,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="65"
                    fill="transparent"
                    stroke="#9333EA"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />
                </motion.svg>
                <div
                  style={{
                    position: "absolute",
                    width: "140px",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 20,
                  }}
                >
                  <img
                    src={staticImageSrc(maritimeLogo)}
                    alt="Maritime Defense Logo"
                    style={{
                      width: "280px",
                      height: "280px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <span
                className="inline-block px-2.5 py-1.5 rounded bg-white/95 text-gray-900 text-sm font-bold text-center whitespace-nowrap shadow-sm"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.solutions.maritimeDefense}
              </span>
            </div>

            {/* Cyber Defense Systems - Left */}
            <div
              className="absolute flex flex-col items-center gap-2.5"
              style={{
                left: "calc(50% - 350px)",
                top: "50%",
                marginLeft: "-70px",
                marginTop: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              <div className="relative w-[140px] h-[140px] flex-shrink-0">
                <motion.svg
                  width="140"
                  height="140"
                  style={{ position: "absolute" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: ORBIT_RING_DURATION_DESKTOP.cyber,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="65"
                    fill="transparent"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />
                </motion.svg>
                <div
                  style={{
                    position: "absolute",
                    width: "140px",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 20,
                  }}
                >
                  <img
                    src={staticImageSrc(cyberLogo)}
                    alt="Cyber Defense Logo"
                    style={{
                      width: "280px",
                      height: "280px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <span
                className="inline-block px-2.5 py-1.5 rounded bg-white/95 text-gray-900 text-sm font-bold text-center whitespace-nowrap shadow-sm"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.solutions.cyberDefense}
              </span>
            </div>
          </div>
          </motion.div>

          {/* Connecting Lines — يظهر عند الهوفر على Defense ثم تظهر الدوائر */}
          <img
            src={staticImageSrc(connectingLines)}
            alt=""
            className="absolute z-[7] transition-opacity duration-500 object-left pointer-events-none"
            style={{
              left: 104,
              top: 368,
              width: 536,
              height: "auto",
              opacity: showConnectingLines ? 1 : 0,
            }}
          />

          {/* النصوص يسار — أبعاد ومواضع ثابتة بالبكسل */}
          <div
            className="absolute z-20 text-left"
            style={{
              left: 40,
              top: 180,
              width: 260,
              fontFamily: "DIN Arabic, sans-serif",
            }}
          >
            <h2
              className="text-black font-bold mb-4"
              style={{
                fontSize: 22,
                letterSpacing: "0.5px",
              }}
            >
              {t.solutions.ourSolutions}
            </h2>
            <div
              className="flex flex-col gap-3 text-black"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              <div className="flex items-center gap-4 py-2">
                <SolutionOptionIcon icon={Radar} />
                <div className="text-black leading-tight">
                  <div
                    className="font-bold text-black"
                    style={{ fontSize: 16 }}
                  >
                    {t.solutions.communication}
                  </div>
                  <div className="text-black mt-0.5" style={{ fontSize: 14 }}>
                    {t.solutions.communicationSystems}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-2">
                <SolutionOptionIcon icon={GraduationCap} />
                <div className="text-black leading-tight">
                  <div
                    className="font-bold text-black"
                    style={{ fontSize: 16 }}
                  >
                    {t.solutions.training}
                  </div>
                  <div className="text-black mt-0.5" style={{ fontSize: 14 }}>
                    {t.solutions.trainingAndServices}
                  </div>
                </div>
              </div>
              <motion.div
                className="relative flex items-center gap-4 py-2 px-2 cursor-pointer rounded-md transition-colors duration-200 hover:bg-gray-100/50 hover:scale-105 origin-left"
                onMouseEnter={activateDefense}
                onClick={activateDefense}
                animate={
                  circlesRevealed
                    ? { scale: 1 }
                    : { scale: [1, 1.035, 1] }
                }
                transition={
                  circlesRevealed
                    ? { duration: 0.25 }
                    : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                }
              >
                {!circlesRevealed && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-md border-2 border-amber-500/50 pointer-events-none"
                    animate={{ opacity: [0.25, 0.75, 0.25] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <div className="relative z-[1]">
                  <SolutionOptionIcon icon={Shield} />
                </div>
                <div className="relative z-[1] text-black leading-tight">
                  <div
                    className="font-bold text-black"
                    style={{ fontSize: 16 }}
                  >
                    {t.solutions.defense}
                  </div>
                  <div className="text-black mt-0.5" style={{ fontSize: 14 }}>
                    {t.solutions.defenseSystems}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: الحلول الثلاثة الرئيسية أولاً ثم الدوائر الدوارة */}
      <div className="md:hidden relative z-20 w-full flex-1 min-h-0 overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center">
        <div
          className={`relative flex flex-col items-center w-full ${SINAN_SITE_PX} py-4 sm:py-5 overflow-visible`}
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          <h2 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center flex-shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {t.solutions.ourSolutions}
          </h2>
          {/* حاوية النصوص — صغيرة وخلفية بيضاء */}
          <div className="w-full max-w-xs sm:max-w-sm mx-auto mb-3 sm:mb-4 flex-shrink-0">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-xl bg-white shadow-lg">
              {/* Communication */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center gap-1 p-2 sm:p-2.5 rounded-lg text-black"
              >
                <SolutionOptionIcon icon={Radar} variant="mobile" />
                <div className="min-w-0">
                  <div className="font-bold text-[10px] sm:text-xs leading-tight text-black truncate">
                    {t.solutions.communication}
                  </div>
                  <div className="text-black text-[9px] sm:text-[10px] leading-tight truncate">
                    {t.solutions.communicationSystems}
                  </div>
                </div>
              </motion.div>
              {/* Training */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="flex flex-col items-center text-center gap-1 p-2 sm:p-2.5 rounded-lg text-black"
              >
                <SolutionOptionIcon icon={GraduationCap} variant="mobile" />
                <div className="min-w-0">
                  <div className="font-bold text-[10px] sm:text-xs leading-tight text-black truncate">
                    {t.solutions.training}
                  </div>
                  <div className="text-black text-[9px] sm:text-[10px] leading-tight truncate">
                    {t.solutions.trainingAndServices}
                  </div>
                </div>
              </motion.div>
              {/* Defense */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                className="relative flex flex-col items-center text-center gap-1 p-2 sm:p-2.5 rounded-lg text-black cursor-pointer active:scale-95"
                onClick={activateDefense}
                animate={
                  circlesRevealed
                    ? { scale: 1 }
                    : { scale: [1, 1.06, 1] }
                }
                transition={
                  circlesRevealed
                    ? { duration: 0.25 }
                    : {
                        opacity: { duration: 0.35, delay: 0.1 },
                        y: { duration: 0.35, delay: 0.1 },
                        scale: {
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                }
              >
                {!circlesRevealed && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-lg border-2 border-amber-400/55 pointer-events-none"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <div className="relative z-[1]">
                  <SolutionOptionIcon icon={Shield} variant="mobile" />
                </div>
                <div className="relative z-[1] min-w-0">
                  <div className="font-bold text-[10px] sm:text-xs leading-tight text-black truncate">
                    {t.solutions.defense}
                  </div>
                  <div className="text-black text-[9px] sm:text-[10px] leading-tight truncate">
                    {t.solutions.defenseSystems}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* الدائرة الدوارة والحلول حولها — موبايل */}
          <motion.div
            className="w-full flex items-center justify-center flex-1 min-h-0 py-16 sm:py-20 pb-20 sm:pb-24 overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: circlesRevealed ? 1 : 0 }}
            transition={CIRCLES_FADE_IN_TRANSITION}
            style={{ pointerEvents: circlesRevealed ? "auto" : "none" }}
          >
            <div className="relative mx-auto w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] flex-shrink-0">
              {/* حاوية ثابتة للتمركز — motion يستبدل transform فيلغي translate إن وُضعا على نفس العنصر */}
              <div className="absolute left-1/2 top-1/2 z-[5] flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[120px] sm:w-[120px]">
                <motion.div
                  className="h-full w-full origin-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: MAIN_RING_DURATION,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <img
                    src={ROTATING_CIRCLE_URL}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </div>
              <div className="absolute left-1/2 top-1/2 z-[5] flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[120px] sm:w-[120px]">
                <motion.div
                  className="h-full w-full origin-center"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: MAIN_RING_DURATION,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <img
                    src={ROTATING_CIRCLE_WITHOUT_URL}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </div>
              {/* Static Logo in Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex items-center justify-center pointer-events-none z-[6]">
                <img
                  src={CENTER_LOGO_URL}
                  alt="Center Logo"
                  className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] object-contain"
                />
              </div>
              {/* 5 Orbiting Solutions — بعيدة عن المركز، فوق الدائرة الكبيرة، ألوان ظاهرة */}
              {/* Space - Top */}
              <div className="absolute left-1/2 top-[-58px] sm:top-[-64px] -translate-x-1/2 flex flex-col items-center gap-1 z-[20]">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 44 44"
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: ORBIT_RING_DURATION_MOBILE.space,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="20"
                      fill="transparent"
                      stroke="#4b5563"
                      strokeWidth="2.5"
                      strokeDasharray="3 3"
                    />
                  </motion.svg>
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.5)]">
                    <img
                      src={staticImageSrc(spaceLogo)}
                      alt=""
                      className="max-w-5 max-h-5 sm:max-w-6 sm:max-h-6 w-auto h-auto object-contain"
                    />
                  </div>
                </div>
                <span className="inline-block px-2 py-1 rounded bg-white/95 text-gray-900 text-[10px] sm:text-xs font-bold text-center whitespace-nowrap shadow-sm">
                  {t.solutions.spaceDefense}
                </span>
              </div>
              {/* Air - Right */}
              <div className="absolute right-[-58px] sm:right-[-64px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-[20]">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 44 44"
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: ORBIT_RING_DURATION_MOBILE.air,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="20"
                      fill="transparent"
                      stroke="#4b5563"
                      strokeWidth="2.5"
                      strokeDasharray="3 3"
                    />
                  </motion.svg>
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.5)]">
                    <img
                      src={staticImageSrc(airLogo)}
                      alt=""
                      className="max-w-5 max-h-5 sm:max-w-6 sm:max-h-6 w-auto h-auto object-contain"
                    />
                  </div>
                </div>
                <span className="inline-block px-2 py-1 rounded bg-white/95 text-gray-900 text-[10px] sm:text-xs font-bold text-center whitespace-nowrap shadow-sm">
                  {t.solutions.airDefense}
                </span>
              </div>
              {/* Land - Bottom Right */}
              <div className="absolute right-[2px] sm:right-[28px] bottom-[-54px] sm:bottom-[-60px] flex flex-col items-center gap-1 z-[20]">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 44 44"
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: ORBIT_RING_DURATION_MOBILE.land,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="20"
                      fill="transparent"
                      stroke="#4b5563"
                      strokeWidth="2.5"
                      strokeDasharray="3 3"
                    />
                  </motion.svg>
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.5)]">
                    <img
                      src={staticImageSrc(landLogo)}
                      alt=""
                      className="max-w-5 max-h-5 sm:max-w-6 sm:max-h-6 w-auto h-auto object-contain"
                    />
                  </div>
                </div>
                <span className="inline-block px-2 py-1 rounded bg-white/95 text-gray-900 text-[10px] sm:text-xs font-bold text-center whitespace-nowrap shadow-sm">
                  {t.solutions.landDefense}
                </span>
              </div>
              {/* Maritime - Bottom Left */}
              <div className="absolute left-[2px] sm:left-[28px] bottom-[-54px] sm:bottom-[-60px] flex flex-col items-center gap-1 z-[20]">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 44 44"
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: ORBIT_RING_DURATION_MOBILE.maritime,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="20"
                      fill="transparent"
                      stroke="#4b5563"
                      strokeWidth="2.5"
                      strokeDasharray="3 3"
                    />
                  </motion.svg>
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.5)]">
                    <img
                      src={staticImageSrc(maritimeLogo)}
                      alt=""
                      className="max-w-5 max-h-5 sm:max-w-6 sm:max-h-6 w-auto h-auto object-contain"
                    />
                  </div>
                </div>
                <p className="text-gray-900 text-[10px] sm:text-xs font-bold text-center whitespace-nowrap drop-shadow-[0_0_2px_rgba(255,255,255,1),0_1px_2px_rgba(0,0,0,0.3)]">
                  {t.solutions.maritimeDefense}
                </p>
              </div>
              {/* Cyber - Left */}
              <div className="absolute left-[-58px] sm:left-[-64px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-[20]">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 44 44"
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: ORBIT_RING_DURATION_MOBILE.cyber,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="20"
                      fill="transparent"
                      stroke="#4b5563"
                      strokeWidth="2.5"
                      strokeDasharray="3 3"
                    />
                  </motion.svg>
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.5)]">
                    <img
                      src={staticImageSrc(cyberLogo)}
                      alt=""
                      className="max-w-5 max-h-5 sm:max-w-6 sm:max-h-6 w-auto h-auto object-contain"
                    />
                  </div>
                </div>
                <span className="inline-block px-2 py-1 rounded bg-white/95 text-gray-900 text-[10px] sm:text-xs font-bold text-center whitespace-nowrap shadow-sm">
                  {t.solutions.cyberDefense}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
