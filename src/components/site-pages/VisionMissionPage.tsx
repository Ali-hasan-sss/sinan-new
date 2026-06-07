import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SINAN_SITE_PL, SINAN_SITE_PR, SINAN_SITE_PX } from "@/components/site/sinan-app/constants";

type VisionMissionPageProps = { isInView?: boolean };

export default function VisionMissionPage({
  isInView = false,
}: VisionMissionPageProps) {
  const { t } = useLanguage();
  const lines =
    (t.about as { empoweringLines?: string }).empoweringLines?.split("\n") ??
    [];

  const tBase = { duration: 0.6, ease: "easeOut" as const };

  /** ميل الرمح (أقل من −18deg لتقارب المرجع); الدوران عبر motion حتى لا يُلغى مع translateY */
  const spearRotateDeg = -10;

  return (
    <div
      dir="ltr"
      className="vision-mission-page w-full h-full min-h-0 max-h-full bg-[#f8f8f8] flex flex-col lg:flex-row items-stretch overflow-hidden"
    >
      {/* موبايل وتابلت: الرمح كخلفية + النص فوقها — أقل من lg */}
      <div className="relative flex-1 min-h-0 lg:hidden overflow-hidden flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 pointer-events-none flex items-end justify-center"
          aria-hidden
        >
          <img
            src="/rmh.png"
            alt=""
            className="w-auto h-[70%] max-h-[420px] sm:h-[75%] sm:max-h-[480px] md:h-[80%] md:max-h-[520px] object-contain object-center opacity-[0.12] sm:opacity-[0.14] md:opacity-[0.16]"
            style={{
              transform: `rotate(${spearRotateDeg}deg) translateY(10%)`,
            }}
          />
        </div>
        <motion.div
          className={`relative z-10 flex flex-col items-center justify-center min-h-full overflow-y-auto ${SINAN_SITE_PX} pb-6 pt-8 sm:pb-8 sm:pt-10 md:pb-10 md:pt-12 w-full`}
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ ...tBase, delay: 0.15 }}
        >
          <div className="max-w-xl mx-auto w-full space-y-6 sm:space-y-7 md:space-y-8 md:max-w-2xl text-center">
            <div className="space-y-2 sm:space-y-2.5">
              <h3
                className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.about.vision}
              </h3>
              <p
                className="text-gray-700 text-[15px] sm:text-base md:text-lg leading-[1.65] max-w-lg md:max-w-xl mx-auto"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  fontWeight: 500,
                }}
              >
                {t.about.visionText}
              </p>
            </div>
            <div className="space-y-2 sm:space-y-2.5">
              <h3
                className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.about.mission}
              </h3>
              <p
                className="text-gray-700 text-[15px] sm:text-base md:text-lg leading-[1.65] max-w-lg md:max-w-xl mx-auto"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  fontWeight: 500,
                }}
              >
                {t.about.missionText}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ديسكتوب (lg+): يسار | وسط الرمح | يمين */}
      <motion.div
        className={`hidden lg:flex flex-1 min-h-0 items-center justify-start overflow-hidden py-10 xl:py-12 2xl:py-14 ${SINAN_SITE_PL}`}
        initial={false}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={tBase}
      >
        <div className="space-y-0.5 lg:space-y-1">
          {lines.map((line, i) => (
            <div
              key={i}
              className="text-gray-500/55 text-sinan-watermark font-bold leading-tight shrink-0"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {line}
            </div>
          ))}
        </div>
      </motion.div>

      {/* وسط: الرمح مثبت من أسفل العمود (justify-end) — يتوسّط أفقيًا داخل ثلث الشاشة */}
      <div className="hidden lg:flex flex-1 min-h-0 min-w-0 self-stretch flex-col justify-end items-center px-2 sm:px-4">
        <motion.img
          src="/rmh.png"
          alt=""
          className="pointer-events-none block w-auto max-w-[min(48vw,520px)] h-[56vh] lg:h-[60vh] xl:h-[64vh] 2xl:h-[68vh] 3xl:h-[72vh] 4xl:h-[76vh] max-h-[min(78svh,calc(100svh-50px-28px))] object-contain object-bottom"
          style={{ transformOrigin: "center bottom" }}
          initial={false}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotate: spearRotateDeg }
              : { opacity: 0, y: 72, rotate: spearRotateDeg }
          }
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className={`hidden lg:flex flex-1 min-h-0 flex-col justify-center items-start overflow-hidden py-10 xl:py-12 2xl:py-14 ${SINAN_SITE_PR}`}
        initial={false}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ ...tBase, delay: 0.2 }}
      >
        <div className="w-full max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl space-y-8 lg:space-y-10 2xl:space-y-12">
          <div>
            <h3
              className="mb-2 text-gray-800 lg:mb-3 text-[clamp(1.55rem,1.1rem+0.7vw,2.75rem)] font-bold tracking-tight"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.vision}
            </h3>
            <p
              className="text-gray-600 leading-relaxed text-[clamp(1.2rem,1.02rem+0.35vw,1.65rem)]"
              style={{ fontFamily: "DIN Arabic, sans-serif", fontWeight: 500 }}
            >
              {t.about.visionText}
            </p>
          </div>
          <div>
            <h3
              className="mb-2 text-gray-800 lg:mb-3 text-[clamp(1.55rem,1.1rem+0.7vw,2.75rem)] font-bold tracking-tight"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.mission}
            </h3>
            <p
              className="text-gray-600 leading-relaxed text-[clamp(1.2rem,1.02rem+0.35vw,1.65rem)]"
              style={{ fontFamily: "DIN Arabic, sans-serif", fontWeight: 500 }}
            >
              {t.about.missionText}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
