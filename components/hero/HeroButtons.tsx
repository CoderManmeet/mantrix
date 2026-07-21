"use client";

import { forwardRef } from "react";
import { Button } from "@/components/ui/Button";
import { NAV_CTA } from "@/constants/navigation";
import { HERO_CONTENT } from "@/content/hero";

/**
 * Stage 07 layout unchanged — still does NOT wire up useMagnetic() (that's
 * a separate interaction concern, spec-scoped independently of this
 * entrance timeline). Stage 08 only adds the forwarded ref so Hero.tsx's
 * master timeline can find both rendered <button> elements via
 * querySelectorAll and animate them together as one section.
 *
 * Targets (#contact, #work) don't exist as sections yet — scrollIntoView
 * no-ops gracefully via the optional chain until those sections land in
 * Phase 8/9, so this doesn't need revisiting later.
 */
function scrollToSection(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export const HeroButtons = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Button
        variant="primary"
        showArrow
        data-cursor="clickable"
        onClick={() => scrollToSection(NAV_CTA.href)}
      >
        {NAV_CTA.label}
      </Button>

      <Button
        variant="secondary"
        data-cursor="clickable"
        onClick={() => scrollToSection(HERO_CONTENT.secondaryCta.href)}
      >
        {HERO_CONTENT.secondaryCta.label}
      </Button>
    </div>
  );
});

HeroButtons.displayName = "HeroButtons";