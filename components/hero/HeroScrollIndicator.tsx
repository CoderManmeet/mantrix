/**
 * Spec choreography ends with "Scroll indicator begins" + "Pulse line" —
 * both motion. Stage 07 renders the static mark only; Stage 08 wires the
 * pulse animation into the hero GSAP timeline.
 */
export function HeroScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
    >
      <span className="font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
        Scroll
      </span>
      <span className="h-10 w-px bg-[var(--color-border)]" />
    </div>
  );
}