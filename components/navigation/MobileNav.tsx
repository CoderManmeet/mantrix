"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, NAV_CTA } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  activeId: string | null;
}

export function MobileNav({ open, onClose, activeId }: MobileNavProps) {
  // Escape closes menu; lock body scroll while open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-20 z-[var(--z-nav)] origin-top border-b border-[var(--color-border)] bg-[var(--color-black)]/95 backdrop-blur-md transition-[transform,opacity] duration-350 md:hidden",
        open
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
      )}
    >
      <ul className="flex flex-col gap-1 px-6 py-8">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.href.replace("#", "");
          return (
            <li key={item.href}>
              
               < a href={item.href}
                onClick={onClose}
                className={cn(
                  "block py-3 text-lg font-medium transition-colors duration-250",
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
        <li className="mt-4">
          <Button variant="primary" showArrow onClick={onClose} className="w-full justify-center">
            {NAV_CTA.label}
          </Button>
        </li>
      </ul>
    </div>
  );
}