/**
 * MANTRIX Hero copy — Part 3 (HERO) of the spec.
 * Kept separate from HeroHeadline.tsx so copy edits never touch component logic.
 */

export const HERO_CONTENT = {
  /** Rendered as discrete lines (spec: "Do NOT animate individual letters. Animate by word groups or entire lines"). */
  headlineLines: [
    "Building Premium",
    "Software,",
    "AI Systems &",
    "Web Experiences",
    "for Ambitious Businesses.",
  ],
  /** Spec: "One sentence only. Maximum 18 words." (17 words) */
  supportingCopy:
    "We engineer intelligent digital systems that help ambitious businesses grow faster.",
  /** Primary CTA reuses NAV_CTA from constants/navigation.ts — do not duplicate here. */
  secondaryCta: {
    label: "View Case Studies",
    href: "#work",
  },
} as const;