"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { buildLoaderTimeline } from "@/animations/loader";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { LoaderPulseLine } from "@/components/loader/LoaderPulseLine";
import { LOADER_COMPLETE_EVENT } from "@/hooks/useLoaderComplete";

const STORAGE_KEY = "mantrix-loader-seen";
const FAILSAFE_MS = 4000; // hard ceiling — if anything goes wrong, force-unlock by this point regardless

function unlock() {
  sessionStorage.setItem(STORAGE_KEY, "true");
  document.documentElement.setAttribute("data-loader-seen", "true");
  document.body.style.overflow = "";
}

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);
  const pulseLineRef = useRef<SVGLineElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "true";
    if (alreadySeen) {
      unlock();
      // eslint-disable-next-line react-hooks/set-state-in-effect -- justified: sessionStorage is client-only; loader is already hidden via CSS, this only unmounts the dead node post-hydration.
      setIsVisible(false);
      return;
    }
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (sessionStorage.getItem(STORAGE_KEY) === "true") return;

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      unlock();
      setIsVisible(false);
      window.dispatchEvent(new Event(LOADER_COMPLETE_EVENT)); // ← add this line
    };

    // Failsafe: whatever happens to GSAP/the timeline, the user is never
    // stuck. This is the fix for the actual complaint — a broken animation
    // should degrade to "page just works," never to "page is frozen."
    const failsafeTimer = window.setTimeout(finish, FAILSAFE_MS);

    let tl: gsap.core.Timeline | undefined;

    try {
      if (reducedMotion) {
        tl = gsap.timeline({ onComplete: finish });
        tl.to(containerRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0.3);
      } else {
        const wordmarkLetters = wordmarkRef.current
          ? Array.from(wordmarkRef.current.querySelectorAll<HTMLElement>("[data-letter]"))
          : [];

        tl = buildLoaderTimeline(
          {
            noise: noiseRef.current,
            pulseLine: pulseLineRef.current,
            wordmarkLetters,
            tagline: taglineRef.current,
            container: containerRef.current,
          },
          finish
        );
      }
    } catch {
      // If GSAP throws for any reason, don't leave the page locked.
      finish();
    }

    return () => {
      window.clearTimeout(failsafeTimer);
      tl?.kill();
    };
  }, [isVisible, reducedMotion]);

  if (!isVisible) return null;

  const wordmark = "MANTRIX".split("");

  return (
    <div
      id="mantrix-loader"
      ref={containerRef}
      role="status"
      aria-label="Loading MANTRIX"
      className="fixed inset-0 z-[var(--z-loader)] flex flex-col items-center justify-center gap-6 bg-[var(--color-black)]"
    >
      <div ref={noiseRef} className="pointer-events-none absolute inset-0 opacity-0">
        <svg className="h-full w-full opacity-[0.04]">
          <filter id="mantrix-loader-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          </filter>
          <rect width="100%" height="100%" filter="url(#mantrix-loader-noise)" />
        </svg>
      </div>

      <LoaderPulseLine ref={pulseLineRef} />

      <h1 ref={wordmarkRef} className="font-mono text-2xl font-medium tracking-[0.2em] text-[var(--color-text-primary)] md:text-3xl">
        {wordmark.map((letter, i) => (
          <span key={i} data-letter className="inline-block opacity-0">
            {letter}
          </span>
        ))}
      </h1>

      <p ref={taglineRef} className="text-sm text-[var(--color-text-secondary)] opacity-0">
        Intelligent Digital Systems
      </p>
    </div>
  );
}