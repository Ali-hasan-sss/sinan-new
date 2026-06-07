"use client";

import ValuesPage from "@/components/site-pages/ValuesPage";
import type { AssignSectionRef } from "../types";

export function ValuesSection({
  assignSectionRef,
  isInView,
}: {
  assignSectionRef: AssignSectionRef;
  isInView: boolean;
}) {
  return (
    <section
      ref={assignSectionRef("values")}
      id="values"
      className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden flex"
    >
      <ValuesPage isInView={isInView} />
    </section>
  );
}
