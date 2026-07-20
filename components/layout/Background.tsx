/**
 * MANTRIX layered background system — Part 2, BACKGROUND SYSTEM.
 * Layers 1,2,3,4,6 only. Layer 5 (cursor spotlight) is Phase 6 — not built here.
 * Purely decorative: aria-hidden, pointer-events-none, fixed behind all content.
 * Every animated layer respects prefers-reduced-motion via motion-reduce: utilities.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Layer 2 — noise texture */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
        <filter id="mantrix-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#mantrix-noise)" />
      </svg>

      {/* Layer 3 — animated grid */}
      <div
        className="motion-reduce:animate-none absolute inset-0 opacity-[0.04] animate-[grid-drift_40s_linear_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Layer 4 — soft cyan radial glow */}
      <div
        className="motion-reduce:animate-none absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 animate-[glow-pulse_8s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)",
        }}
      />

      {/* Layer 6 — animated lines */}
      <div className="motion-reduce:animate-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[15%] top-0 h-full w-px animate-[line-drift_16s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-accent to-transparent" />
        <div className="absolute left-[65%] top-0 h-full w-px animate-[line-drift_22s_ease-in-out_infinite_reverse] bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>
    </div>
  );
}