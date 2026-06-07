"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  sinanCursorLogoOnDark,
  sinanCursorLogoOnLight,
} from "@/components/site/sinan-app/constants";

function isLightBackgroundColor(bg: string): boolean {
  if (!bg || bg === "transparent" || bg === "rgba(0, 0, 0, 0)") {
    return false;
  }

  const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) {
    return (
      bg.includes("255, 255, 255") ||
      bg.includes("249, 250, 251") ||
      bg.includes("243, 244, 246") ||
      bg.includes("248, 248, 248") ||
      bg.includes("245, 245, 245") ||
      bg.includes("240, 240, 240") ||
      bg.includes("250, 250, 250")
    );
  }

  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.72;
}

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnLightBackground, setIsOnLightBackground] = useState(false);

  useEffect(() => {
    setMounted(true);

    const media = window.matchMedia("(min-width: 768px)");
    const syncEnabled = () => setEnabled(media.matches);
    syncEnabled();
    media.addEventListener("change", syncEnabled);

    return () => media.removeEventListener("change", syncEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const updateMousePosition = (e: MouseEvent) => {
      setVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (!element) return;

      let el: Element | null = element;
      let isLight = false;

      for (let i = 0; i < 12 && el; i++) {
        const bg = window.getComputedStyle(el).backgroundColor;
        if (isLightBackgroundColor(bg)) {
          isLight = true;
          break;
        }
        el = el.parentElement;
      }

      setIsOnLightBackground(isLight);
    };

    const hideCursor = () => setVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", hideCursor);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [enabled]);

  if (!mounted || !enabled) return null;

  const cursorSrc = isOnLightBackground
    ? sinanCursorLogoOnLight
    : sinanCursorLogoOnDark;

  return createPortal(
    <div
      aria-hidden
      className="fixed pointer-events-none select-none z-[9999]"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: "translate(-50%, -8%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <img
        src={cursorSrc}
        alt=""
        width={22}
        height={30}
        draggable={false}
        className="block pointer-events-none"
        style={{
          width: 22,
          height: 30,
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 0.96,
        }}
      />
    </div>,
    document.body,
  );
}
