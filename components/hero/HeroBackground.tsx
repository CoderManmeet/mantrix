"use client";

import { HeroNetwork } from "@/components/hero/HeroNetwork";
import { HeroPortrait } from "@/components/hero/HeroPortrait";

/**
 * Wraps hero-scoped decoration only. The 6 global background layers (solid
 * black, noise, grid, glow, cursor spotlight, lines) already come from the
 * root-level <Background /> in app/layout.tsx — do not duplicate them here.
 *
 * Portrait integration pass: this component no longer takes a single
 * forwarded ref, since the network's entrance, the portrait's entrance,
 * and the portrait's glow now animate on three separate timeline steps
 * (spec HERO CHOREOGRAPHY: glow appears -> portrait fades up -> network
 * finishes drawing). Hero.tsx owns all three refs directly and passes
 * them in as props instead.
 */
interface HeroBackgroundProps {
  networkRef: React.Ref<HTMLDivElement>;
  portraitRef: React.Ref<HTMLDivElement>;
  portraitGlowRef: React.Ref<HTMLDivElement>;
}

export function HeroBackground({
  networkRef,
  portraitRef,
  portraitGlowRef,
}: HeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div ref={networkRef} className="absolute inset-0">
        <HeroNetwork />
      </div>

      <HeroPortrait ref={portraitRef} glowRef={portraitGlowRef} variant="hero" />
    </div>
  );
}