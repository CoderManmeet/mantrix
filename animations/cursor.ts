import gsap from "gsap";
import type { CursorState } from "@/hooks/useSpotlight";

/**
 * Single source of truth for spotlight visual states — spec's CURSOR list:
 * default = spotlight, hover = expand, clickable = reduce radius + brighten,
 * text = shrink (never block readability).
 */
const STATE_STYLES: Record<CursorState, { scale: number; opacity: number }> = {
  default: { scale: 1, opacity: 0.5 },
  hover: { scale: 1.5, opacity: 0.55 },
  clickable: { scale: 0.6, opacity: 0.9 },
  text: { scale: 0.35, opacity: 0.3 },
};

export function applyCursorState(el: HTMLElement | null, state: CursorState) {
  if (!el) return;
  const { scale, opacity } = STATE_STYLES[state];
  gsap.to(el, { scale, opacity, duration: 0.35, ease: "power3.out", overwrite: "auto" });
}