import gsap from "gsap";
import { GSAP_EASE } from "@/constants/motion";

interface HeroTimelineRefs {
  network: HTMLElement | null;
  portrait: HTMLElement | null;
  portraitGlow: HTMLElement | null;
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
 * this timeline only touches Hero's own elements: the portrait's glow, the
 * portrait itself, the hero-scoped network graphic, headline lines,
 * supporting copy, CTA buttons, and the scroll indicator.
 *
 * Built paused — Hero.tsx creates it immediately on mount (so every
 * element is primed to its hidden `from` state before first paint) and
 * calls .play() only once the Loader has finished, so the two never
 * animate at the same time.
 *
 * Sequence (spec order): cyan glow appears -> portrait fades upward ->
 * network finishes drawing -> headline reveals -> supporting text ->
 * CTA buttons. Steps overlap deliberately (absolute positions on the
 * timeline) rather than running strictly end-to-end, matching the
 * ~2s total runtime target already established for this timeline.
 *
 * Runtime target: ~2s total, power4.out per GSAP_EASE.hero
 * (constants/motion.ts). Every step pairs opacity with a transform (never
 * opacity alone), touches only transform/opacity (GPU-composited, no
 * layout-triggering properties), and animates whole sections — lines, the
 * button group, the network graphic, the portrait — never individual
 * letters.
 *
 * Clears inline transform/opacity on completion so CSS (e.g. Button's
 * :hover lift, or the portrait glow's CSS glow-pulse keyframe) regains
 * full control of those properties afterward.
 *
 * To extend: add a new
 *   if (refs.x) { tl.fromTo(refs.x, {...}, {...}, offset); }
 * block — the timeline is additive, no existing step needs to move unless
 * the new one must interleave with it.
 */
export function buildHeroTimeline(refs: HeroTimelineRefs) {
  const animatedTargets = [
    refs.portraitGlow,
    refs.portrait,
    refs.network,
    ...refs.headlineLines,
    refs.supportingCopy,
    ...refs.buttons,
    refs.scrollIndicator,
  ].filter((el): el is HTMLElement => Boolean(el));

  const tl = gsap.timeline({
    defaults: { ease: GSAP_EASE.hero },
    onComplete: () => {
      gsap.set(animatedTargets, { clearProps: "transform,opacity" });
    },
  });

  if (refs.portraitGlow) {
    tl.fromTo(
      refs.portraitGlow,
      { opacity: 0, scale: 0.85 },
      { opacity: 0.9, scale: 1, duration: 0.7 },
      0
    );
  }

  if (refs.portrait) {
    tl.fromTo(
      refs.portrait,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      0.25
    );
  }

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

/**
 * Post-entrance idle motion for the Hero portrait only — a persistent
 * looping tween, not a member of the paused entrance timeline above,
 * since it must keep running indefinitely rather than complete once.
 * Called from Hero.tsx after the entrance timeline resolves. Returns the
 * tween so Hero.tsx can kill it on unmount.
 */
export function buildHeroPortraitIdle(portraitEl: HTMLElement) {
  return gsap.to(portraitEl, {
    y: "+=14",
    duration: 3.4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}

/**
 * Tiny mouse-parallax for the Hero portrait, scoped to the hero section.
 * Uses gsap.quickTo for a performant, repeatedly-callable tween rather
 * than spawning a new tween per mousemove event. Movement is clamped to a
 * small range so it reads as premium subtlety, not a gimmick. Returns a
 * cleanup function that removes the listener.
 */
export function attachHeroPortraitParallax(
  container: HTMLElement,
  portraitEl: HTMLElement
) {
  const maxOffset = 10;
  const quickX = gsap.quickTo(portraitEl, "x", { duration: 0.6, ease: "power3.out" });
  const quickY = gsap.quickTo(portraitEl, "y", { duration: 0.6, ease: "power3.out" });

  function handleMouseMove(event: MouseEvent) {
    const rect = container.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    quickX(relX * maxOffset);
    quickY(relY * maxOffset);
  }

  container.addEventListener("mousemove", handleMouseMove);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
  };
}