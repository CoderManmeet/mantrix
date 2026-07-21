"use client";

import { forwardRef } from "react";
import { HeroNetwork } from "@/components/hero/HeroNetwork";

/**
 * Wraps hero-scoped decoration only. The 6 global background layers (solid
 * black, noise, grid, glow, cursor spotlight, lines) already come from the
 * root-level <Background /> in app/layout.tsx — do not duplicate them here.
 * Stage 08 adds the forwarded ref so Hero.tsx's master timeline can fade +
 * scale this wrapper in as one unit; HeroNetwork's own fixed opacity-40
 * class is untouched, so the two combine to the intended subtle final look.
 */
export const HeroBackground = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <HeroNetwork />
    </div>
  );
});

HeroBackground.displayName = "HeroBackground";