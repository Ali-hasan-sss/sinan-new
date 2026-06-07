"use client";

import { useEffect, useState } from "react";
import { SinanMobileMenu } from "./SinanMobileMenu";
import type { NavItem } from "./types";
import { SINAN_SITE_PX } from "./constants";

function HeaderNavLink({
  href,
  label,
  isActive,
  className,
}: {
  href: string;
  label: string;
  isActive: boolean;
  className: string;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-block transition-colors duration-300 ${className} ${
        isActive ? "text-white" : "text-white/55 hover:text-white"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${
          isActive
            ? "w-full opacity-100"
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-80"
        }`}
      />
    </a>
  );
}

export function SinanSiteHeader({
  menuItems,
  contactLabel,
  locale,
  setLocale,
  scrollDown,
  activeSection,
}: {
  menuItems: NavItem[];
  contactLabel: string;
  locale: "en" | "ar";
  setLocale: (l: "en" | "ar") => void;
  scrollDown?: boolean;
  activeSection?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 1024 : false,
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const opaque = isMobile || isHovered || !scrollDown;
  const scrolled = scrollDown;
  const linkClass =
    "text-xs xl:text-sm 2xl:text-[0.95rem] 3xl:text-base whitespace-nowrap";
  const btnClass = opaque
    ? "text-white/80 hover:text-white border-white/30 hover:border-white/60"
    : "text-white/40 hover:text-white/60 border-white/20 hover:border-white/40";

  return (
    <header
      className={`h-[50px] min-h-[50px] flex-shrink-0 flex items-center transition-all duration-300 relative z-[100] ${SINAN_SITE_PX} ${
        scrolled ? "backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.25)]" : ""
      }`}
      style={{
        backgroundColor: opaque
          ? scrolled
            ? "rgba(0,0,0,0.82)"
            : "rgb(0,0,0)"
          : scrolled
            ? "rgba(0,0,0,0.72)"
            : "rgba(0,0,0,0.5)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full w-full items-center gap-4 lg:gap-6">
        <nav className="hidden lg:flex flex-1 items-center justify-between min-w-0">
          {menuItems.map((item) => (
            <HeaderNavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={activeSection === item.href.slice(1)}
              className={linkClass}
            />
          ))}
          <HeaderNavLink
            href="#contact"
            label={contactLabel}
            isActive={activeSection === "contact"}
            className={linkClass}
          />
        </nav>

        <button
          type="button"
          onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
          className={`hidden lg:flex flex-shrink-0 text-sm 2xl:text-[0.95rem] 3xl:text-base font-medium px-3 py-1.5 2xl:px-4 3xl:px-5 rounded border-0 transition-colors duration-300 ${btnClass}`}
          aria-label="Toggle language"
        >
          {locale === "ar" ? "EN" : "عربي"}
        </button>

        <a
          href="#home"
          className={`lg:hidden flex-shrink-0 h-8 w-auto transition-opacity duration-300 ${
            opaque ? "opacity-100" : "opacity-60"
          }`}
          aria-label="Sinan Advanced Industries – Home"
        >
          <img
            src={`${"/"}logo/logo_${locale === "ar" ? "arabice" : "english"}_ondark.png`}
            alt="Sinan Advanced Industries"
            loading="lazy"
            decoding="async"
            className="h-full w-auto object-contain"
          />
        </a>

        <div
          className={`lg:hidden flex items-center gap-4 ${
            locale === "ar" ? "ml-3" : "ml-auto"
          }`}
        >
          <SinanMobileMenu
            menuItems={[
              ...menuItems,
              { href: "#contact", label: contactLabel },
            ]}
            locale={locale}
            setLocale={setLocale}
            activeSection={activeSection}
          />
        </div>
      </div>
    </header>
  );
}
