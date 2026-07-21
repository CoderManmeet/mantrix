"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroScrollIndicator } from "@/components/hero/HeroScrollIndicator";
import { buildHeroTimeline } from "@/animations/hero";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLoaderComplete } from "@/hooks/useLoaderComplete";

/**
 * Stage 08 — Hero entrance animation.
 * pt-24 clears the fixed 80px Navbar (h-20) without pushing the section
 * height past 100vh, since the navbar floats transparent over the hero.
 *
 * The master timeline (animations/hero.ts) is built paused, immediately on
 * mount, in useLayoutEffect — before the browser paints — so every element
 * is already sitting in its hidden entrance state on the very first frame,
 * whether or not the Loader is about to play over it. It only starts
 * playing once useLoaderComplete() reports the Loader has finished, so the
 * two never animate at the same time and there's no flash of a
 * fully-formed Hero showing through the Loader's fade-out.
 */
export function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const headlineContainerRef = useRef<HTMLDivElement>(null);
  const buttonsContainerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const reducedMotion = useReducedMotion();
  const loaderComplete = useLoaderComplete();

  useLayoutEffect(() => {
    const headlineLines = headlineContainerRef.current
      ? Array.from(
          headlineContainerRef.current.querySelectorAll<HTMLElement>("[data-hero-line]")
        )
      : [];
    const supportingCopy =
      headlineContainerRef.current?.querySelector<HTMLElement>("[data-hero-copy]") ?? null;
    const buttons = buttonsContainerRef.current
      ? Array.from(buttonsContainerRef.current.querySelectorAll<HTMLElement>("button"))
      : [];

    const refs = {
      network: backgroundRef.current,
      headlineLines,
      supportingCopy,
      buttons,
      scrollIndicator: scrollIndicatorRef.current,
    };

    if (reducedMotion) {
      const targets = [
        refs.network,
        ...refs.headlineLines,
        refs.supportingCopy,
        ...refs.buttons,
        refs.scrollIndicator,
      ].filter((el): el is HTMLElement => Boolean(el));
      gsap.set(targets, { opacity: 1, clearProps: "transform" });
      return;
    }

    const tl = buildHeroTimeline(refs);
    tl.pause();
    timelineRef.current = tl;

    return () => {
      tl.kill();
      timelineRef.current = null;
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (loaderComplete) {
      timelineRef.current?.play();
    }
  }, [loaderComplete]);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-24"
    >
      <HeroBackground ref={backgroundRef} />

      <Container className="relative z-10">
        <Grid>
          <div className="col-span-4 flex flex-col gap-8 md:col-span-8 lg:col-span-9">
            <HeroHeadline ref={headlineContainerRef} />
            <HeroButtons ref={buttonsContainerRef} />
          </div>
        </Grid>
      </Container>

      <HeroScrollIndicator ref={scrollIndicatorRef} />
    </section>
  );
}