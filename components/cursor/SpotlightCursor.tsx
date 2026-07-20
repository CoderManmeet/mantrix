"use client";

import { useEffect } from "react";
import { useSpotlight } from "@/hooks/useSpotlight";
import { applyCursorState } from "@/animations/cursor";

/**
 * Desktop only (spec: "Hidden on Mobile"). Two-layer structure is
 * deliberate: GSAP owns the outer element's x/y transform (position),
 * the inner element owns the static -50% centering transform + scale.
 * Combining both on one element would cause GSAP to overwrite the
 * centering transform on every frame.
 */
export function SpotlightCursor() {
  const { dotRef, cursorState, isDesktop } = useSpotlight();

  useEffect(() => {
    const inner = dotRef.current?.firstElementChild as HTMLElement | null;
    applyCursorState(inner, cursorState);
  }, [cursorState, dotRef]);

  if (!isDesktop) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[var(--z-cursor)]"
    >
      <div
        className="h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
        style={{
          background: "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}