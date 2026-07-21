"use client";

import { forwardRef } from "react";

/**
 * Split into a static outer wrapper (handles horizontal centering via
 * -translate-x-1/2 — a permanent transform that must never be touched)
 * and an inner ref'd div that Stage 08's timeline animates. GSAP writes
 * its own inline `transform` on whatever element it targets; animating the
 * same element that also carries the centering transform would silently
 * overwrite it. Keeping them on separate elements avoids that entirely.
 */
export const HeroScrollIndicator = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
      <div ref={ref} aria-hidden="true" className="flex flex-col items-center gap-3">
        <span className="font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          Scroll
        </span>
        <span className="h-10 w-px bg-[var(--color-border)]" />
      </div>
    </div>
  );
});

HeroScrollIndicator.displayName = "HeroScrollIndicator";