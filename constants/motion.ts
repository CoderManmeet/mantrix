/**
 * MANTRIX motion tokens — Part 4 (Motion Design System) of the spec.
 * GSAP timelines and Framer Motion transitions must import durations/easing
 * from here, never hardcode seconds or bezier curves inline.
 */

/** Durations in seconds — GSAP takes seconds, not ms. */
export const DURATION = {
  ultraFast: 0.15,
  fast: 0.22,
  normal: 0.35,
  slow: 0.6,
  hover: 0.25, // buttons/cards
  page: 0.8, // page transitions (spec range: 0.7–0.9s)
  hero: 1.5, // hero timeline (spec range: 1.2–1.8s)
  loader: 2.4, // intro loader (spec range: 2.2–2.6s)
  sectionPulse: 0.6, // "digital pulse" divider (spec range: 0.5–0.7s)
  sectionReveal: 0.8, // section entrance (spec range: 0.7–0.9s)
} as const;

/** GSAP easing strings — never use linear or bounce per spec. */
export const GSAP_EASE = {
  default: "expo.out",
  hover: "power3.out",
  hero: "power4.out",
  page: "power2.inOut",
  elastic: "elastic.out(1, 0.5)", // tiny UI details ONLY, per spec
} as const;

/**
 * Framer Motion cubic-bezier equivalents (Framer doesn't understand GSAP ease strings).
 * Keep these visually matched to GSAP_EASE so both libraries feel like one motion system.
 */
export const FRAMER_EASE = {
  default: [0.16, 1, 0.3, 1], // expo.out approximation
  hover: [0.22, 1, 0.36, 1], // power3.out approximation
  hero: [0.25, 1, 0.5, 1], // power4.out approximation
  page: [0.65, 0, 0.35, 1], // power2.inOut approximation
} as const;

export type DurationToken = keyof typeof DURATION;
export type GsapEaseToken = keyof typeof GSAP_EASE;
export type FramerEaseToken = keyof typeof FRAMER_EASE;