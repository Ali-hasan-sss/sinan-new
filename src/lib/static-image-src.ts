import type { StaticImageData } from "next/image";

/** Use with `<img src={...}>` when the source may be a Next static import. */
export function staticImageSrc(src: string | StaticImageData): string {
  return typeof src === "string" ? src : src.src;
}
