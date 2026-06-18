"use client";

import { useEffect } from "react";
import { FAVICON_DARK_PATH, FAVICON_LIGHT_PATH } from "@/lib/seo/site-config";

const FAVICON_LINK_ID = "sinan-theme-favicon";

function applyThemeFavicon(isDark: boolean) {
  const href = isDark ? FAVICON_DARK_PATH : FAVICON_LIGHT_PATH;
  let link = document.getElementById(
    FAVICON_LINK_ID,
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.id = FAVICON_LINK_ID;
    link.rel = "icon";
    link.type = "image/png";
    document.head.appendChild(link);
  }

  if (link.href !== new URL(href, window.location.origin).href) {
    link.href = href;
  }
}

export function FaviconTheme() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      document
        .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
        .forEach((node) => {
          if (node.id !== FAVICON_LINK_ID) node.remove();
        });
      applyThemeFavicon(media.matches);
    };

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return null;
}
