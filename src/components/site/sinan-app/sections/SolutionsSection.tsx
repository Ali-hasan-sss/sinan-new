"use client";

import SolutionsPage from "@/components/site-pages/SolutionsPage";
import type { AssignSectionRef } from "../types";

export function SolutionsSection({
  assignSectionRef,
}: {
  assignSectionRef: AssignSectionRef;
}) {
  return (
    <section
      ref={assignSectionRef("solutions")}
      id="solutions"
      className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden bg-white relative"
    >
      <SolutionsPage />
    </section>
  );
}
