"use client";

import { forwardRef } from "react";
import { HERO_CONTENT } from "@/content/hero";

/**
 * Stage 07 built the mask-reveal DOM shape (outer overflow-hidden span +
 * inner inline-block span per line). Stage 08 wires it up: the outer div
 * is forwarded so Hero.tsx's master timeline can query the inner spans
 * (`[data-hero-line]`) and the supporting copy (`[data-hero-copy]`) and
 * animate them. No visual classes changed here — only the ref and the two
 * data attributes the timeline queries against.
 */
export const HeroHeadline = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-6">
      <h1 className="font-semibold tracking-tight text-[var(--color-text-primary)] text-[clamp(2.5rem,1.25rem+6vw,6rem)] leading-[1.05]">
        {HERO_CONTENT.headlineLines.map((line, index) => (
          <span key={index} className="block overflow-hidden">
            <span data-hero-line className="inline-block">
              {line}
            </span>
          </span>
        ))}
      </h1>

      <p data-hero-copy className="max-w-[36rem] text-body text-[var(--color-text-secondary)]">
        {HERO_CONTENT.supportingCopy}
      </p>
    </div>
  );
});

HeroHeadline.displayName = "HeroHeadline";