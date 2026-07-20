import gsap from "gsap";

interface LoaderTimelineRefs {
  noise: HTMLElement | null;
  pulseLine: SVGLineElement | null;
  wordmarkLetters: HTMLElement[];
  tagline: HTMLElement | null;
  container: HTMLElement | null;
}

/**
 * Single source of truth for the loader sequence — matches LOADER timeline
 * in the spec exactly (timestamps in seconds). Do not duplicate this
 * timeline elsewhere; import buildLoaderTimeline wherever the loader runs.
 */
export function buildLoaderTimeline(refs: LoaderTimelineRefs, onComplete: () => void) {
  const tl = gsap.timeline({ onComplete });

  if (refs.noise) {
    tl.fromTo(refs.noise, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" }, 0.2);
  }

  if (refs.pulseLine) {
    tl.fromTo(
      refs.pulseLine,
      { strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 0.5, ease: "power3.out" },
      0.4
    );
  }

  if (refs.wordmarkLetters.length) {
    tl.fromTo(
      refs.wordmarkLetters,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: "expo.out" },
      0.8
    );
  }

  if (refs.tagline) {
    tl.fromTo(
      refs.tagline,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      1.4
    );
  }

  if (refs.container) {
    tl.to(
      refs.container,
      { opacity: 0, duration: 0.5, ease: "power2.inOut" },
      2.1
    );
  }

  return tl;
}