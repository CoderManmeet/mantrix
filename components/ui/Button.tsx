"use client";

import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DURATION } from "@/constants/motion";

export type ButtonVariant = "primary" | "secondary" | "text";

const BASE =
  "group relative inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-sm font-medium transition-all";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-text-primary)] text-[var(--color-black)] border border-transparent hover:bg-[var(--color-black)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_24px_var(--color-accent-glow)]",
  secondary:
    "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-elevated)] hover:-translate-y-0.5",
  text: "bg-transparent border-none px-0 py-0 text-[var(--color-text-primary)] hover:text-[var(--color-accent)]",
};

/** Shared class builder so anchor-rendered CTAs (nav, hero, contact) look
 * identical to real <button> elements without duplicating the variant map. */
export function buttonClassNames(variant: ButtonVariant, className?: string) {
  return cn(BASE, VARIANTS[variant], className);
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
}

/** For real actions: form submits, opening modals, toggling state, etc.
 * For navigation (scrolling to a section, external links), use ButtonLink instead. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", showArrow = false, className, children, ...props }, ref) => {
    const durationStyle = { transitionDuration: `${DURATION.hover * 1000}ms` };

    return (
      <button ref={ref} className={buttonClassNames(variant, className)} style={durationStyle} {...props}>
        <span className={variant === "text" ? "relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-250 group-hover:after:w-full" : ""}>
          {children}
        </span>
        {showArrow && (
          <ArrowRight size={16} strokeWidth={1.75} className="transition-transform duration-250 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
}

/** Same visual system as Button, but a real <a> — use for navigation/CTAs
 * that go somewhere (in-page anchors, external links), not form actions. */
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant = "primary", showArrow = false, className, children, ...props }, ref) => {
    const durationStyle = { transitionDuration: `${DURATION.hover * 1000}ms` };

    return (
      <a ref={ref} className={buttonClassNames(variant, className)} style={durationStyle} {...props}>
        <span className={variant === "text" ? "relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-250 group-hover:after:w-full" : ""}>
          {children}
        </span>
        {showArrow && (
          <ArrowRight size={16} strokeWidth={1.75} className="transition-transform duration-250 group-hover:translate-x-1" />
        )}
      </a>
    );
  }
);

ButtonLink.displayName = "ButtonLink";