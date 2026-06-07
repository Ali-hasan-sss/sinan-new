"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { AssignSectionRef } from "../types";
import { SINAN_SITE_PL, SINAN_SITE_PX } from "../constants";

export function AselsanSection({
  assignSectionRef,
  sectionInViewAselsan,
}: {
  assignSectionRef: AssignSectionRef;
  sectionInViewAselsan: boolean;
}) {
  const { t } = useLanguage();

  return (
    <section
      ref={assignSectionRef("aselsan")}
      id="aselsan"
      className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate"
    >
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <video
          className="w-full h-full object-cover"
          src={`${"/"}background.mp4`}
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
        className={`absolute inset-0 flex flex-col items-center justify-center text-center ${SINAN_SITE_PX} overflow-hidden`}
        style={{ zIndex: 10 }}
      >
        <motion.div
          className="w-full max-w-2xl md:max-w-3xl lg:max-w-[min(82vw,56rem)] xl:max-w-[min(84vw,62rem)] 2xl:max-w-[min(86vw,68rem)] py-4 md:py-6 lg:py-3 xl:py-4 min-h-0 mx-auto origin-center lg:scale-[1.08] xl:scale-[1.16] 2xl:scale-[1.24] flex flex-col items-center justify-center"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          <motion.div
            className="flex flex-col items-center mb-4 md:mb-5 lg:mb-6 xl:mb-7"
            initial={false}
            animate={
              sectionInViewAselsan
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10 }
            }
            transition={{ duration: 0.5 }}
          >
            <img
              src="/logo-assislian.png"
              alt="Sinan Aselsan"
              className="w-[min(55vw,280px)] sm:w-[min(50vw,320px)] lg:w-[min(32vw,380px)] xl:w-[min(34vw,420px)] 2xl:w-[min(36vw,460px)] max-w-full max-h-[min(30vh,460px)] object-contain"
            />
          </motion.div>

          <p
            className="mb-3 md:mb-5 lg:mb-5 xl:mb-6 text-center leading-relaxed mx-auto max-w-[85%] text-base md:text-lg lg:text-[clamp(1.1rem,1rem+0.28vw,1.45rem)] xl:text-[clamp(1.15rem,1.05rem+0.32vw,1.55rem)] 2xl:text-[clamp(1.2rem,1.1rem+0.36vw,1.65rem)] text-white"
            style={{
              fontFamily: "DIN Arabic, sans-serif",
              fontWeight: 500,
            }}
          >
            {t.aselsan.jointVentureLine}
          </p>

          <motion.div
            className="mb-4 md:mb-5 lg:mb-6 xl:mb-7"
            initial={false}
            animate={
              sectionInViewAselsan
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.98 }
            }
            transition={{
              duration: 0.5,
              delay: sectionInViewAselsan ? 0.1 : 0,
            }}
          >
            <img
              src="/title-assislian.png"
              alt="Sinan Aselsan"
              className="w-[min(70vw,240px)] sm:w-[min(65vw,280px)] lg:w-[min(38vw,340px)] xl:w-[min(40vw,380px)] 2xl:w-[min(42vw,420px)] max-w-full max-h-[min(18vh,420px)] object-contain"
            />
          </motion.div>

          <p
            className="text-center leading-relaxed mx-auto max-w-[85%] text-base md:text-lg lg:text-[clamp(1.1rem,1rem+0.28vw,1.45rem)] xl:text-[clamp(1.15rem,1.05rem+0.32vw,1.55rem)] 2xl:text-[clamp(1.2rem,1.1rem+0.36vw,1.65rem)] text-white"
            style={{
              fontFamily: "DIN Arabic, sans-serif",
              fontWeight: 500,
            }}
          >
            {t.aselsan.establishLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
