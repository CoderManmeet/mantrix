"use client";

import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DURATION } from "@/constants/motion";

type ButtonVariant = "primary" | "secondary" | "text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
}

/**
 * Three types only, per BUTTON SYSTEM spec. Do not add new variants
 * without checking the spec first — this is a locked design decision.
 * Magnetic pull (spec: "Primary CTA, Navigation, Project Cards, Contact
 * Button") is deferred to Phase 6 once cursor tracking exists.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", showArrow = false, className, children, ...props }, ref) => {
    const base =
      "group relative inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-sm font-medium transition-all";
    const durationStyle = { transitionDuration: `${DURATION.hover * 1000}ms` };

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-[var(--color-text-primary)] text-[var(--color-black)] border border-transparent hover:bg-[var(--color-black)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_24px_var(--color-accent-glow)]",
      secondary:
        "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-elevated)] hover:-translate-y-0.5",
      text: "bg-transparent border-none px-0 py-0 text-[var(--color-text-primary)] hover:text-[var(--color-accent)]",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        style={durationStyle}
        {...props}
      >
        <span className={variant === "text" ? "relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-250 group-hover:after:w-full" : ""}>
          {children}
        </span>
        {showArrow && (
          <ArrowRight
            size={16}
            strokeWidth={1.75}
            className="transition-transform duration-250 group-hover:translate-x-1"
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";