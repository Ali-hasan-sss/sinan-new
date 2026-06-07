"use client";

import AboutUsPage from "@/components/site-pages/AboutUsPage";
import type { AssignSectionRef } from "../types";

export function AboutSection({
  assignSectionRef,
  isInView,
}: {
  assignSectionRef: AssignSectionRef;
  isInView: boolean;
}) {
  return (
    <section
      ref={assignSectionRef("about")}
      id="about"
      className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden"
    >
      <AboutUsPage isInView={isInView} />
    </section>
  );
}
