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
 *
 * Toned down from the original: smaller radius (h-64/w-64 -> h-48/w-48),
 * lower opacity, and the gradient itself fades out earlier (0% -> 55%
 * instead of 0% -> 70%) so it reads as a soft ambient hint rather than a
 * visible glowing box when it passes over lighter content like the
 * portrait photo.
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
        className="h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen opacity-40"
        style={{
          background: "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 55%)",
        }}
      />
    </div>
  );
}