"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!containerRef.current || reducedMotion) return;

    const tween = gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", clearProps: "transform,opacity" }
    );

    return () => {
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally re-runs per pathname via the `key` on this component's usage
  }, [pathname, reducedMotion]);

  return (
    <div key={pathname} ref={containerRef}>
      {children}
    </div>
  );
}