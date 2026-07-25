"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { buildLoaderTimeline } from "@/animations/loader";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { LoaderPulseLine } from "@/components/loader/LoaderPulseLine";

const STORAGE_KEY = "mantrix-loader-seen";

/**
 * Always renders on both server and first client render (isVisible starts
 * true on both — deterministic, no hydration mismatch). The actual "should
 * this be hidden" decision is handled two ways:
 *  1. Instantly, via CSS + the blocking <head> script (zero-flash path).
 *  2. As a cleanup unmount here, once React has hydrated (cosmetically
 *     invisible since step 1 already hid it).
 */
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
      document.body.style.overflow = "";
      // eslint-disable-next-line react-hooks/set-state-in-effect -- justified: sessionStorage is client-only; the loader is already hidden instantly via CSS (see globals.css), this only unmounts the dead DOM node post-hydration, no visible change occurs.
      setIsVisible(false);
      return;
    }
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (sessionStorage.getItem(STORAGE_KEY) === "true") return; // guards a rare race with the effect above

    const finish = () => {
      sessionStorage.setItem(STORAGE_KEY, "true");
      document.body.style.overflow = "";
      setIsVisible(false);
    };

    if (reducedMotion) {
      const tl = gsap.timeline({ onComplete: finish });
      tl.to(containerRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0.3);
      return () => {
        tl.kill();
      };
    }

    const wordmarkLetters = wordmarkRef.current
      ? Array.from(wordmarkRef.current.querySelectorAll<HTMLElement>("[data-letter]"))
      : [];

    const tl = buildLoaderTimeline(
      {
        noise: noiseRef.current,
        pulseLine: pulseLineRef.current,
        wordmarkLetters,
        tagline: taglineRef.current,
        container: containerRef.current,
      },
      finish
    );

    return () => {
      tl.kill();
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