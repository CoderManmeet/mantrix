import gsap from "gsap";

interface HeroTimelineRefs {
  network: HTMLElement | null;
  headlineLines: HTMLElement[];
  supportingCopy: HTMLElement | null;
  buttons: HTMLElement[];
  scrollIndicator: HTMLElement | null;
}

/**
 * Single master timeline for the Hero's entrance (spec HERO CHOREOGRAPHY),
 * scoped to elements Hero itself owns. The global sitewide Background
 * (Stage 03) already runs its own continuous grid/glow/line-drift loop
 * before Hero even mounts — re-triggering "grid fades in" / "glow appears"
 * here would fight that ambient animation rather than compose with it, so
 * this timeline only touches Hero's own elements: the hero-scoped network
 * graphic, headline lines, supporting copy, CTA buttons, and the scroll
 * indicator.
 *
 * Built paused — Hero.tsx creates it immediately on mount (so every
 * element is primed to its hidden `from` state before first paint) and
 * calls .play() only once the Loader has finished, so the two never
 * animate at the same time.
 *
 * Runtime target: ~2s total, power4.out per GSAP_EASE.hero
 * (constants/motion.ts). Every step pairs opacity with a transform (never
 * opacity alone), touches only transform/opacity (GPU-composited, no
 * layout-triggering properties), and animates whole sections — lines, the
 * button group, the network graphic — never individual letters.
 *
 * Clears inline transform/opacity on completion so CSS (e.g. Button's
 * :hover lift) regains full control of those properties afterward.
 *
 * To extend: add a new
 *   if (refs.x) { tl.fromTo(refs.x, {...}, {...}, offset); }
 * block — the timeline is additive, no existing step needs to move unless
 * the new one must interleave with it.
 */
export function buildHeroTimeline(refs: HeroTimelineRefs) {
  const animatedTargets = [
    refs.network,
    ...refs.headlineLines,
    refs.supportingCopy,
    ...refs.buttons,
    refs.scrollIndicator,
  ].filter((el): el is HTMLElement => Boolean(el));

  const tl = gsap.timeline({
    defaults: { ease: "power4.out" },
    onComplete: () => {
      gsap.set(animatedTargets, { clearProps: "transform,opacity" });
    },
  });

  if (refs.network) {
    tl.fromTo(
      refs.network,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8 },
      0
    );
  }

  if (refs.headlineLines.length) {
    tl.fromTo(
      refs.headlineLines,
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
      0.15
    );
  }

  if (refs.supportingCopy) {
    tl.fromTo(
      refs.supportingCopy,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      1.0
    );
  }

  if (refs.buttons.length) {
    tl.fromTo(
      refs.buttons,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
      1.2
    );
  }

  if (refs.scrollIndicator) {
    tl.fromTo(
      refs.scrollIndicator,
      { y: 8, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      1.6
    );
  }

  return tl;
}