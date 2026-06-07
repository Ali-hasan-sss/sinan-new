"use client";

import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { ServiceWorkerCleanup } from "@/components/ServiceWorkerCleanup";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ServiceWorkerCleanup />
      {children}
    </LanguageProvider>
  );
}
