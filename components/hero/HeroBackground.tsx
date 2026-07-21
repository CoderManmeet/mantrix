import { HeroNetwork } from "@/components/hero/HeroNetwork";

/**
 * Wraps hero-scoped decoration only. The 6 global background layers (solid
 * black, noise, grid, glow, cursor spotlight, lines) already come from the
 * root-level <Background /> in app/layout.tsx — do not duplicate them here.
 */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <HeroNetwork />
    </div>
  );
}