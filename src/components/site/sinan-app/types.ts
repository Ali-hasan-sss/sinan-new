import type { RefObject, MutableRefObject } from "react";

export type NavItem = { href: string; label: string };

export type AssignSectionRef = (id: string) => (el: HTMLElement | null) => void;

export type ScrollContainerRef = RefObject<HTMLDivElement | null>;

export type SectionRefs = MutableRefObject<
  Partial<Record<string, HTMLElement>>
>;
