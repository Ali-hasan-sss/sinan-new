"use client";

import { useEffect } from "react";

/**
 * Clears stale service workers on this origin (e.g. old PWA / another app on localhost).
 * Prevents broken interceptors and Cache.put(206) errors from unrelated workers.
 */
export function ServiceWorkerCleanup() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
    void navigator.serviceWorker.getRegistrations().then((regs) => {
      for (const r of regs) void r.unregister();
    });
  }, []);
  return null;
}
