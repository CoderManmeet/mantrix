"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export type CursorState = "default" | "hover" | "clickable" | "text";

/**
 * Named per spec's CUSTOM HOOKS list: useSpotlight().
 *
 * Hydration safety: isDesktop always starts `false` — identical on server
 * and client, so the initial render (and hydration match) is guaranteed
 * regardless of the real device. The actual value is resolved inside an
 * effect after mount (client-only, post-hydration update — this does not
 * cause a mismatch, only a normal one-time re-render, same pattern
 * next-themes uses for its "mounted" flag). Do not read matchMedia during
 * the useState initializer — that runs during render and WILL diverge
 * between server and client.
 *
 * Graceful degradation: if matchMedia or GSAP are unavailable/throw, the
 * hook simply never flips isDesktop to true. The cursor stays unrendered,
 * nothing else on the page is affected, and no error propagates upward.
 */
export function useSpotlight() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isDesktop, setIsDesktop] = useState(false);

  // Resolve real device capability after mount — client-only, post-hydration.
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    let query: MediaQueryList;
    try {
      query = window.matchMedia("(hover: hover) and (pointer: fine)");
    } catch {
      return; // matchMedia unsupported/broken — stay in default (no cursor) state
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect -- justified: real device capability can only be known client-side after mount; initial render is deterministic (false) on both server and client, so this is a post-hydration update, not a mismatch. Same pattern used by next-themes for its "mounted" flag.
    setIsDesktop(query.matches);

    const onMediaChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    query.addEventListener("change", onMediaChange);
    return () => query.removeEventListener("change", onMediaChange);
  }, []);

  useEffect(() => {
    if (!isDesktop || !dotRef.current) return;

    let moveX: ReturnType<typeof gsap.quickTo>;
    let moveY: ReturnType<typeof gsap.quickTo>;

    try {
      moveX = gsap.quickTo(dotRef.current, "x", { duration: 0.5, ease: "power3.out" });
      moveY = gsap.quickTo(dotRef.current, "y", { duration: 0.5, ease: "power3.out" });
    } catch {
      return; // GSAP failed to initialize — bail without affecting the rest of the page
    }

    const onMouseMove = (e: MouseEvent) => {
      try {
        moveX(e.clientX);
        moveY(e.clientY);
      } catch {
        // swallow — a failed frame shouldn't break mousemove handling
      }

      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setCursorState((target?.dataset.cursor as CursorState) ?? "default");
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isDesktop]);

  return { dotRef, cursorState, isDesktop };
}