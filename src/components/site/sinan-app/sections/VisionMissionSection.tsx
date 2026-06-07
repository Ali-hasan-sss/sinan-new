"use client";

import VisionMissionPage from "@/components/site-pages/VisionMissionPage";
import type { AssignSectionRef } from "../types";

export function VisionMissionSection({
  assignSectionRef,
  isInView,
}: {
  assignSectionRef: AssignSectionRef;
  isInView: boolean;
}) {
  return (
    <section
      ref={assignSectionRef("vision-mission")}
      id="vision-mission"
      className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden"
    >
      <VisionMissionPage isInView={isInView} />
    </section>
  );
}
