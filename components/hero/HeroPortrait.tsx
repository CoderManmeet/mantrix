"use client";

import { forwardRef } from "react";
import Image from "next/image";

interface HeroPortraitProps {
  variant?: "hero" | "about";
  glowRef?: React.Ref<HTMLDivElement>;
}

/**
 * Reusable portrait treatment shared by the Hero and the About section.
 * variant="hero": smaller, positioned into the network's empty right-side
 * space, entrance + idle motion driven externally by Hero.tsx via the
 * forwarded ref and glowRef.
 * variant="about": larger, no motion — About renders this statically with
 * no refs passed in.
 *
 * Natural-color pass: the photo keeps its real color — no grayscale, no
 * cyan duotone tint, no colored glow blob. Depth/blending into the dark
 * Hero background now comes only from: a radial mask so the edges dissolve
 * instead of cutting off in a rectangle, a bottom fade into --color-black,
 * a very faint inset highlight, and a scoped grain layer. glowRef is kept
 * as a prop (now rendering nothing visible) so Hero.tsx's existing
 * timeline/refs wiring doesn't need to change.
 */
export const HeroPortrait = forwardRef<HTMLDivElement, HeroPortraitProps>(
  ({ variant = "hero", glowRef }, ref) => {
    const isHero = variant === "hero";

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={
  isHero
    ? "pointer-events-none absolute right-[5%] bottom-[35%] z-[1] hidden h-[82vh] max-h-[760px] w-[30vw] max-w-[420px] lg:block"
    : "pointer-events-none relative mx-auto h-[34rem] w-[27rem] max-w-full"
}
        style={{
          filter: "drop-shadow(0 40px 60px rgba(0, 0, 0, 0.55))",
        }}
      >
        {/* Placeholder div only — kept so Hero.tsx's ref/timeline wiring
            is untouched. No visible glow rendered in the natural-color
            treatment. */}
        <div ref={glowRef} className="absolute inset-0 -z-10" />

        {/* Portrait image, masked so edges dissolve into the background */}
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            maskImage:
              "radial-gradient(ellipse 68% 78% at 50% 42%, black 52%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 68% 78% at 50% 42%, black 52%, transparent 100%)",
            boxShadow: "inset 0 1px 0 rgba(245, 245, 245, 0.04)",
          }}
        >
          <Image
            src="/images/founder-portrait.png"
            alt=""
            fill
            priority={isHero}
            sizes={isHero ? "24vw" : "27rem"}
            className="object-contain object-bottom"
          />

          {/* Bottom fade so the figure dissolves into --color-black */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background:
                "linear-gradient(to top, var(--color-black) 0%, transparent 100%)",
            }}
          />

          {/* Scoped grain — independent of the sitewide noise layer */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay">
            <filter id={`portrait-noise-${variant}`}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency={0.9}
                numOctaves={2}
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter={`url(#portrait-noise-${variant})`} />
          </svg>
        </div>
      </div>
    );
  }
);

HeroPortrait.displayName = "HeroPortrait";