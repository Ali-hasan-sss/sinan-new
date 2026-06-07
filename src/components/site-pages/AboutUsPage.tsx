import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SINAN_SITE_PX } from "@/components/site/sinan-app/constants";

type AboutUsPageProps = { isInView?: boolean };

export default function AboutUsPage({ isInView = false }: AboutUsPageProps) {
  const { t, locale } = useLanguage();
  const isArabic = locale === "ar";

  return (
    <div className="w-full h-full min-h-0 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/about.jpeg)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      <div className={`relative z-10 h-full w-full flex items-center ${SINAN_SITE_PX} py-4 sm:py-6`}>
        <motion.div
          className={`w-full md:w-[min(calc(50%-0.75rem),44rem)] h-auto ${
            isArabic ? "md:ml-auto" : "md:mr-auto"
          }`}
          initial={false}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isArabic ? 48 : -48 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className={`flex flex-col gap-[clamp(0.75rem,2vh,1.5rem)] px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8 lg:px-10 lg:py-9 rounded-none sm:rounded-xl md:rounded-2xl w-full bg-black/50 backdrop-blur-md border-y border-white/10 sm:border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <h1
              className="text-white font-bold shrink-0 text-balance [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.6)] text-[clamp(1.45rem,1.1rem+1.5vw,2.7rem)] leading-[1.2]"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.title}
            </h1>
            <p
              className="text-white/95 text-pretty [text-shadow:0_1px_8px_rgba(0,0,0,0.8),0_1px_2px_rgba(0,0,0,0.5)] text-[clamp(1.1375rem,1rem+0.45vw,1.45rem)] leading-[1.55] sm:leading-[1.6] md:leading-[1.65]"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.aboutText}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
