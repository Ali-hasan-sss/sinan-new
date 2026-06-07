"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { NAV_IDS, HEADER_NAV_IDS } from "@/components/site/sinan-app/constants";
import type { NavItem } from "@/components/site/sinan-app/types";
import { SinanCustomCursor } from "@/components/site/sinan-app/SinanCustomCursor";
import { SinanSiteHeader } from "@/components/site/sinan-app/SinanSiteHeader";
import { HomeSection } from "@/components/site/sinan-app/sections/HomeSection";
import { AboutSection } from "@/components/site/sinan-app/sections/AboutSection";
import { VisionMissionSection } from "@/components/site/sinan-app/sections/VisionMissionSection";
import { ValuesSection } from "@/components/site/sinan-app/sections/ValuesSection";
import { SectorsDynamicsSection } from "@/components/site/sinan-app/sections/SectorsDynamicsSection";
import { MarineSection } from "@/components/site/sinan-app/sections/MarineSection";
import { FrontiersSection } from "@/components/site/sinan-app/sections/FrontiersSection";
import { AselsanSection } from "@/components/site/sinan-app/sections/AselsanSection";
import { SolutionsSection } from "@/components/site/sinan-app/sections/SolutionsSection";
import { ContactSection } from "@/components/site/sinan-app/sections/ContactSection";

export default function SinanAppClient() {
  const { t, locale, setLocale } = useLanguage();
  const headerMenuItems: NavItem[] = HEADER_NAV_IDS.map((id) => ({
    href: `#${id}`,
    label: t.nav[id === "vision-mission" ? "visionMission" : id],
  }));

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Partial<Record<string, HTMLElement>>>({});
  const heroSvgRef = useRef<HTMLDivElement>(null);
  const [sectionInView, setSectionInView] = useState<Record<string, boolean>>(
    {},
  );
  const [heroHoveredTriangleId, setHeroHoveredTriangleId] = useState<
    number | null
  >(null);
  const [scrollDown, setScrollDown] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollTop = useRef(0);

  const sectionIdByEl = useRef<WeakMap<Element, string>>(new WeakMap());

  const assignSectionRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      if (el) sectionRefs.current[id] = el;
      else delete sectionRefs.current[id];
    },
    [],
  );

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const onScroll = () => {
      const st = el.scrollTop;
      setScrollDown(st > lastScrollTop.current && st > 10);
      lastScrollTop.current = st;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scrollEl = scrollContainerRef.current;
    if (!scrollEl) return;
    const refs = sectionRefs.current;
    const idByEl = sectionIdByEl.current;
    const elements: { el: HTMLElement; id: string }[] = [];
    for (const id of NAV_IDS) {
      const el = refs[id];
      if (el) {
        idByEl.set(el, id);
        elements.push({ el, id });
      }
    }
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setSectionInView((prev) => {
          const next = { ...prev };
          for (const entry of entries) {
            const id = idByEl.get(entry.target);
            if (id != null) next[id] = entry.isIntersecting;
          }
          return next;
        });
      },
      { root: scrollEl, rootMargin: "0px", threshold: 0.15 },
    );
    elements.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    window.scrollTo(0, 0);
    const scrollEl = scrollContainerRef.current;
    const el = document.getElementById(sectionId) as HTMLElement | null;
    if (el && scrollEl) {
      const top = el.offsetTop - scrollEl.offsetTop;
      scrollEl.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const run = () => {
      window.scrollTo(0, 0);
      const hash = window.location.hash?.slice(1);
      if (hash && NAV_IDS.includes(hash as (typeof NAV_IDS)[number])) {
        setActiveSection(hash);
        scrollToSection(hash);
      }
    };
    run();
    const t1 = requestAnimationFrame(run);
    const t2 = setTimeout(run, 0);
    const t3 = setTimeout(run, 100);
    return () => {
      cancelAnimationFrame(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [scrollToSection]);

  useEffect(() => {
    const onHashChange = () => {
      window.scrollTo(0, 0);
      const hash = window.location.hash?.slice(1);
      if (hash && NAV_IDS.includes(hash as (typeof NAV_IDS)[number])) {
        setActiveSection(hash);
        scrollToSection(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [scrollToSection]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.("a[href^='#']");
      if (!target || !(target instanceof HTMLAnchorElement)) return;
      const href = target.getAttribute("href") ?? "";
      const sectionId = href.slice(1);
      if (
        !sectionId ||
        !NAV_IDS.includes(sectionId as (typeof NAV_IDS)[number])
      )
        return;
      e.preventDefault();
      window.scrollTo(0, 0);
      window.history.replaceState(null, "", href);
      scrollToSection(sectionId);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [scrollToSection]);

  useEffect(() => {
    const scrollEl = scrollContainerRef.current;
    if (!scrollEl) return;
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const st = scrollEl.scrollTop;
        const refs = sectionRefs.current;
        let bestId: string | null = null;
        let bestDist = Infinity;
        for (const id of NAV_IDS) {
          const el = refs[id];
          if (!el) continue;
          const top = (el as HTMLElement).offsetTop - scrollEl.offsetTop;
          const dist = Math.abs(top - st);
          if (dist < bestDist) {
            bestDist = dist;
            bestId = id;
          }
        }
        if (bestId && window.location.hash.slice(1) !== bestId) {
          window.history.replaceState(null, "", "#" + bestId);
        }
        if (bestId) setActiveSection(bestId);
      });
    };
    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scrollEl.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY !== 0 || window.scrollX !== 0) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <>
      <SinanCustomCursor />

      <div className="flex h-screen w-full min-h-0 flex-col overflow-hidden">
        <SinanSiteHeader
          menuItems={headerMenuItems}
          contactLabel={t.nav.contact}
          locale={locale}
          setLocale={setLocale}
          scrollDown={scrollDown}
          activeSection={activeSection}
        />
        <div
          ref={scrollContainerRef}
          className="app-scroll-container flex-1 min-h-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth"
          style={{ scrollSnapType: "y mandatory" }}
        >
          <HomeSection
            assignSectionRef={assignSectionRef}
            heroSvgRef={heroSvgRef}
            heroHoveredTriangleId={heroHoveredTriangleId}
            setHeroHoveredTriangleId={setHeroHoveredTriangleId}
            sectionRefs={sectionRefs}
            sectionInViewHome={!!sectionInView["home"]}
            locale={locale}
          />

          <AboutSection
            assignSectionRef={assignSectionRef}
            isInView={!!sectionInView["about"]}
          />

          <VisionMissionSection
            assignSectionRef={assignSectionRef}
            isInView={!!sectionInView["vision-mission"]}
          />

          <ValuesSection
            assignSectionRef={assignSectionRef}
            isInView={!!sectionInView["values"]}
          />

          <SectorsDynamicsSection
            assignSectionRef={assignSectionRef}
            scrollContainerRef={scrollContainerRef}
            sectionInViewSectors={!!sectionInView["sectors"]}
          />

          <MarineSection
            assignSectionRef={assignSectionRef}
            sectionInViewMarine={!!sectionInView["marine"]}
          />

          <FrontiersSection
            assignSectionRef={assignSectionRef}
            sectionInViewFrontiers={!!sectionInView["frontiers"]}
          />

          <AselsanSection
            assignSectionRef={assignSectionRef}
            sectionInViewAselsan={!!sectionInView["aselsan"]}
          />

          <SolutionsSection assignSectionRef={assignSectionRef} />

          <ContactSection assignSectionRef={assignSectionRef} />
        </div>
      </div>
    </>
  );
}
