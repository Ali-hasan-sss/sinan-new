"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "./types";

export function SinanMobileMenu({
  menuItems,
  locale,
  setLocale,
  activeSection,
}: {
  menuItems: NavItem[];
  locale: "en" | "ar";
  setLocale: (l: "en" | "ar") => void;
  activeSection?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
          className="text-white/80 hover:text-white text-sm font-medium px-2 py-1 rounded transition-colors duration-300"
          aria-label="Toggle language"
        >
          {locale === "ar" ? "EN" : "عربي"}
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white hover:text-gray-300 transition-colors duration-300"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-50 pt-[50px]"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 p-2 text-white hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors duration-300 z-50"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative text-2xl transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full group-hover:opacity-80"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </motion.div>
      )}
    </>
  );
}
