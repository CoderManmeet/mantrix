"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  isScrolled: boolean; // past threshold — triggers glass background
  direction: "up" | "down";
}

/** Small, focused hook — drives glass-nav appearance and show/hide-on-scroll. */
export function useScrollDirection(threshold = 40): ScrollState {
  const [state, setState] = useState<ScrollState>({ isScrolled: false, direction: "up" });

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setState({
        isScrolled: currentY > threshold,
        direction: currentY > lastY ? "down" : "up",
      });
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}