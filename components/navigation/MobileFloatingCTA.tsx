import { ButtonLink } from "@/components/ui/Button";
import { NAV_CTA } from "@/constants/navigation";

/**
 * Persistent mobile-only CTA — not in the original spec, added because the
 * nav CTA was only reachable by opening the hamburger menu, meaning a user
 * had to scroll the entire page or dig into the menu to reach Contact.
 * Fixed to the bottom of the viewport so it's always one tap away.
 * Hidden on md+ since the desktop nav CTA is already always visible there.
 */
export function MobileFloatingCTA() {
  return (
    <div
      className="fixed inset-x-0 z-[var(--z-nav)] flex justify-center px-6 md:hidden"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <ButtonLink
        href={NAV_CTA.href}
        variant="primary"
        showArrow
        data-cursor="clickable"
        className="w-full max-w-xs justify-center border border-[var(--color-border)] bg-[var(--color-black)]/80 !text-[var(--color-text-primary)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:!bg-[var(--color-black)] hover:!text-[var(--color-accent)]"
      >
        {NAV_CTA.label}
      </ButtonLink>
    </div>
  );
}