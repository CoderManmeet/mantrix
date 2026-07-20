"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const MAX_DISTANCE = 24; // spec: "Maximum 24px"
const PULL_STRENGTH = 0.35;

/**
 * Named per spec's CUSTOM HOOKS list: useMagnetic(). Desktop only — spec
 * scopes magnetic effect to pointer-precise devices implicitly (it's a
 * hover-tracking effect, meaningless on touch).
 */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!query.matches) return;

    const moveX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      const activationRadius = Math.max(rect.width, rect.height) * 1.4;

      if (distance < activationRadius) {
        moveX(gsap.utils.clamp(-MAX_DISTANCE, MAX_DISTANCE, deltaX * PULL_STRENGTH));
        moveY(gsap.utils.clamp(-MAX_DISTANCE, MAX_DISTANCE, deltaY * PULL_STRENGTH));
      }
    };

    const onMouseLeave = () => {
      // Ease back naturally per spec — elastic reserved for tiny UI details only.
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
    };

    document.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return ref;
}