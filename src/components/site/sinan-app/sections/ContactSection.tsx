"use client";

import ContactPage from "@/components/site-pages/ContactPage";
import type { AssignSectionRef } from "../types";

export function ContactSection({
  assignSectionRef,
}: {
  assignSectionRef: AssignSectionRef;
}) {
  return (
    <section
      ref={assignSectionRef("contact")}
      id="contact"
      className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative"
    >
      <ContactPage />
    </section>
  );
}
