"use client";

import { motion } from "motion/react";
import backgroundImage from "@/assets/0dd5df8bad17aa19cb9c79db49e5281a79c6e23a.png";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { staticImageSrc } from "@/lib/static-image-src";
import { SINAN_SITE_PX } from "@/components/site/sinan-app/constants";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2V9zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.98l5.75 3.02-5.75 3.02z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full min-h-full relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={staticImageSrc(backgroundImage)}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* المحتوى الرئيسي: عنوان + العنوان + أيقونات + إيميلات */}
      <div
        className={`relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center ${SINAN_SITE_PX} py-4 sm:py-6 md:py-8 lg:py-4 xl:py-5 overflow-hidden`}
      >
        <div
          className="w-full max-w-lg md:max-w-xl lg:max-w-[min(82vw,42rem)] xl:max-w-[min(84vw,46rem)] 2xl:max-w-[min(86vw,50rem)] min-h-0 mx-auto origin-center lg:scale-[1.08] xl:scale-[1.16] 2xl:scale-[1.24] flex flex-col items-center"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          <motion.div
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto flex flex-col items-center text-center justify-center px-6 py-8 lg:px-9 lg:py-10 xl:px-10 xl:py-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-white mb-3 sm:mb-4 md:mb-6 lg:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-[clamp(1.75rem,1.5rem+0.5vw,2.75rem)] xl:text-[clamp(2rem,1.65rem+0.55vw,3rem)]"
              style={{
                fontFamily: "DIN Arabic, sans-serif",
                fontWeight: 500,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.contact.title}
            </motion.h1>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p
                  className="text-white/95 whitespace-pre-line text-sm sm:text-base md:text-lg lg:text-[clamp(1.05rem,0.95rem+0.28vw,1.45rem)] xl:text-[clamp(1.15rem,1.05rem+0.32vw,1.55rem)] leading-relaxed"
                  style={{
                    fontFamily: "DIN Arabic, sans-serif",
                    lineHeight: "1.45",
                  }}
                >
                  {t.contact.address}
                </p>
              </motion.div>
              <motion.div
                className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 py-2 sm:py-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href="https://linkedin.com/company/sinan-advanced-industries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors p-1.5 lg:p-2 rounded-full hover:bg-white/10 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@SinanAdvancedIndustries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors p-1.5 lg:p-2 rounded-full hover:bg-white/10 flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </a>
              </motion.div>
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p
                  className="text-white/95 text-sm sm:text-base md:text-lg lg:text-[clamp(1.05rem,0.95rem+0.28vw,1.45rem)] xl:text-[clamp(1.15rem,1.05rem+0.32vw,1.55rem)] leading-relaxed"
                  style={{
                    fontFamily: "DIN Arabic, sans-serif",
                    lineHeight: "1.45",
                  }}
                >
                  info@sinan.om
                  <br />
                  sales@sinan.om
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* الفوتر ثابت أسفل الصفحة دائماً */}
      <footer className={`relative z-10 flex-shrink-0 mt-auto flex flex-col items-center ${SINAN_SITE_PX} pb-2 md:pb-3 pt-2`}>
        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-2 md:mb-3">
          <a
            href="#home"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.home}
          </a>
          <a
            href="#about"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.about}
          </a>
          <a
            href="#vision-mission"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.visionMission}
          </a>
          <a
            href="#values"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.values}
          </a>
          <a
            href="#contact"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.contact}
          </a>
        </nav>
        <p
          className="text-white/60 text-xs text-center pt-2 md:pt-3 border-t border-white/20 w-full"
          style={{ fontWeight: 300 }}
        >
          {t.footer.copyright}
        </p>
      </footer>
    </div>
  );
}
