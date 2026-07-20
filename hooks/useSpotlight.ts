"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export type CursorState = "default" | "hover" | "clickable" | "text";

/** Named per spec's CUSTOM HOOKS list: useSpotlight(). */
export function useSpotlight() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onMediaChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    query.addEventListener("change", onMediaChange);
    return () => query.removeEventListener("change", onMediaChange);
  }, []);

  useEffect(() => {
    if (!isDesktop || !dotRef.current) return;

    const moveX = gsap.quickTo(dotRef.current, "x", { duration: 0.5, ease: "power3.out" });
    const moveY = gsap.quickTo(dotRef.current, "y", { duration: 0.5, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      moveX(e.clientX);
      moveY(e.clientY);

      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setCursorState((target?.dataset.cursor as CursorState) ?? "default");
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isDesktop]);

  return { dotRef, cursorState, isDesktop };
}