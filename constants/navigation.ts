/**
 * MANTRIX navigation — single-page anchor links per WEBSITE STRUCTURE.
 * IDs here must match the `id` attribute each section adopts when built
 * in later phases (Hero=Phase 7, About/Services/etc.=Phase 8, Work=Phase 9).
 */

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const NAV_CTA = {
  label: "Book a Discovery Call",
  href: "#contact",
} as const;

export const NAV_LOGO = {
  label: "MANTRIX",
  href: "#",
} as const;