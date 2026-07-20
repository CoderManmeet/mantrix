import gsap from "gsap";

interface LoaderTimelineRefs {
  noise: HTMLElement | null;
  pulseLine: SVGLineElement | null;
  wordmarkLetters: HTMLElement[];
  tagline: HTMLElement | null;
  container: HTMLElement | null;
}

/**
 * Single source of truth for the loader sequence.
 * Total runtime: ~2.3–2.5s per spec.
 * Sequence: noise -> pulse line -> MANTRIX reveal -> tagline -> dissolve into Hero.
 * Do not duplicate this timeline elsewhere; import buildLoaderTimeline wherever
 * the loader runs.
 */
export function buildLoaderTimeline(refs: LoaderTimelineRefs, onComplete: () => void) {
  const tl = gsap.timeline({ onComplete });

  if (refs.noise) {
    tl.fromTo(refs.noise, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" }, 0.1);
  }

  if (refs.pulseLine) {
    tl.fromTo(
      refs.pulseLine,
      { strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 0.4, ease: "power3.out" },
      0.3
    );
  }

  if (refs.wordmarkLetters.length) {
    tl.fromTo(
      refs.wordmarkLetters,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: "expo.out" },
      0.7
    );
  }

  if (refs.tagline) {
    tl.fromTo(
      refs.tagline,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      1.3
    );
  }

  if (refs.container) {
    tl.to(
      refs.container,
      { opacity: 0, duration: 0.4, ease: "power2.inOut" },
      1.9
    );
  }

  return tl;
}