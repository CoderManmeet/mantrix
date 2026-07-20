"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, NAV_CTA, NAV_LOGO } from "@/constants/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/navigation/MobileNav";

export function Navbar() {
  const { isScrolled } = useScrollDirection();
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.href.replace("#", "")));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[var(--z-nav)] transition-[background-color,backdrop-filter,border-color] duration-350",
        isScrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-black)]/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-[var(--container-width)] items-center justify-between px-6 md:px-10 lg:px-16"
      >
        <a href={NAV_LOGO.href} className="font-mono text-lg font-medium tracking-tight text-[var(--color-text-primary)]">
          {NAV_LOGO.label}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a href={item.href} aria-current={isActive ? "true" : undefined} className={cn(
                    "group relative text-sm font-medium transition-colors duration-250",
                    isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  )}>
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-[var(--color-accent)] transition-all duration-250",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button variant="primary" showArrow>
            {NAV_CTA.label}
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-primary)] md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-250",
                mobileOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-px w-full bg-current transition-opacity duration-250",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-px w-full bg-current transition-transform duration-250",
                mobileOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} activeId={activeId} />
    </header>
  );
}