"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { AssignSectionRef } from "../types";
import { SINAN_SITE_PL, SINAN_SITE_PX } from "../constants";

export function FrontiersSection({
  assignSectionRef,
  sectionInViewFrontiers,
}: {
  assignSectionRef: AssignSectionRef;
  sectionInViewFrontiers: boolean;
}) {
  const { t } = useLanguage();

  return (
    <section
      ref={assignSectionRef("frontiers")}
      id="frontiers"
      className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate"
    >
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <video
          className="w-full h-full object-cover"
          src={`${"/"}earth-video.mp4`}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
      </div>

      <div
        dir="ltr"
        className={`hidden md:flex absolute inset-0 items-center justify-start pointer-events-none ${SINAN_SITE_PL}`}
        style={{ zIndex: 2 }}
      >
        <p
          className="text-white/10 text-left font-bold leading-[0.95] max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(3.5rem,4.8vw,6.5rem)] xl:text-[clamp(4rem,5.2vw,7.5rem)] 2xl:text-[clamp(4.25rem,5.5vw,8.25rem)]"
          style={{
            fontWeight: 700,
            fontFamily: "DIN Arabic, sans-serif",
          }}
        >
          {t.bgWatermark.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>
      </div>

      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 3, backgroundColor: "rgba(243, 148, 34, 0.35)" }}
      />

      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 4 }}
      >
        <img
          src="/earth.png"
          alt=""
          className="absolute w-auto object-contain object-top-right opacity-95 h-[110vh] lg:h-[118vh] xl:h-[125vh] 2xl:h-[132vh]"
          style={{
            top: "-12%",
            right: "-9%",
            maxWidth: "none",
          }}
        />
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center ${SINAN_SITE_PX} overflow-hidden`}
        style={{ zIndex: 10 }}
      >
        <motion.div
          className="w-full max-w-2xl md:max-w-3xl lg:max-w-[min(82vw,56rem)] xl:max-w-[min(84vw,62rem)] 2xl:max-w-[min(86vw,68rem)] py-4 md:py-6 lg:py-3 xl:py-4 min-h-0 mx-auto origin-center lg:scale-[1.08] xl:scale-[1.16] 2xl:scale-[1.24]"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          <motion.div
            className="flex min-h-0 flex-col items-center text-center"
            initial={false}
            animate={
              sectionInViewFrontiers
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10 }
            }
            transition={{
              duration: 0.5,
              delay: sectionInViewFrontiers ? 0 : 0,
            }}
          >
            <div className="relative flex shrink-0 items-center justify-center lg:mb-6 xl:mb-7">
              <img
                src="/simnfor.png"
                alt="SINAN FRONTIERS"
                className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] w-[220px] sm:w-[250px] lg:w-[min(28vw,340px)] xl:w-[min(30vw,380px)] 2xl:w-[min(32vw,420px)] max-w-full max-h-[min(28vh,420px)] object-contain"
              />
            </div>
          </motion.div>

          <motion.p
            className="text-white text-center mb-3 md:mb-5 lg:mb-5 xl:mb-6 leading-relaxed mx-auto max-w-[52%] lg:max-w-[58%] xl:max-w-[60%] text-xl md:text-2xl lg:text-[clamp(1.75rem,1.45rem+0.45vw,2.45rem)] xl:text-[clamp(1.9rem,1.55rem+0.5vw,2.65rem)] 2xl:text-[clamp(2rem,1.65rem+0.55vw,2.85rem)] font-bold"
            style={{ fontFamily: "DIN Arabic, sans-serif" }}
            initial={false}
            animate={
              sectionInViewFrontiers
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            transition={{
              duration: 0.55,
              delay: sectionInViewFrontiers ? 0.25 : 0,
            }}
          >
            {t.frontiers.tagline}
          </motion.p>

          <motion.p
            className="text-white/90 text-center leading-relaxed mx-auto max-w-[85%] text-base md:text-lg lg:text-[clamp(1.1rem,1rem+0.28vw,1.45rem)] xl:text-[clamp(1.15rem,1.05rem+0.32vw,1.55rem)] 2xl:text-[clamp(1.2rem,1.1rem+0.36vw,1.65rem)] font-normal"
            style={{ fontFamily: "DIN Arabic, sans-serif" }}
            initial={false}
            animate={
              sectionInViewFrontiers
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
            }
            transition={{
              duration: 0.55,
              delay: sectionInViewFrontiers ? 0.4 : 0,
            }}
          >
            {t.frontiers.intro} {t.frontiers.paragraph2}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
