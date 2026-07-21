import { HERO_CONTENT } from "@/content/hero";

/**
 * Stage 07 — layout only, no animation.
 * Each line is wrapped in an `overflow-hidden` mask with an inner block —
 * this is inert right now, but it's the exact DOM shape Stage 08's GSAP
 * timeline needs to animate lines upward without changing markup later
 * (spec: "Animate by word groups or entire lines. Use mask reveals.").
 */
export function HeroHeadline() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-semibold tracking-tight text-[var(--color-text-primary)] text-[clamp(2.5rem,1.25rem+6vw,6rem)] leading-[1.05]">
        {HERO_CONTENT.headlineLines.map((line, index) => (
          <span key={index} className="block overflow-hidden">
            <span className="inline-block">{line}</span>
          </span>
        ))}
      </h1>

      <p className="max-w-[36rem] text-body text-[var(--color-text-secondary)]">
        {HERO_CONTENT.supportingCopy}
      </p>
    </div>
  );
}