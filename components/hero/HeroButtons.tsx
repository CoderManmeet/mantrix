"use client";

import { Button } from "@/components/ui/Button";
import { NAV_CTA } from "@/constants/navigation";
import { HERO_CONTENT } from "@/content/hero";

/**
 * Stage 07 — layout only. Deliberately does NOT wire up useMagnetic() yet:
 * magnetic pull is an interaction/motion concern reserved for Stage 08
 * (spec BUTTON SYSTEM: magnetic applies to "Primary CTA, Navigation,
 * Project Cards, Contact Button" — but this stage is structure-only).
 *
 * Targets (#contact, #work) don't exist as sections yet — scrollIntoView
 * no-ops gracefully via the optional chain until those sections land in
 * Phase 8/9, so this doesn't need revisiting later.
 */
function scrollToSection(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
}