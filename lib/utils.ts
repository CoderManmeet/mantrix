import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pillBadge(variant: "default" | "active" = "default", className?: ClassValue) {
  return cn(
    "rounded-[var(--radius-pill)] border px-3 py-1 text-caption transition-colors duration-250",
    variant === "active"
      ? "border-[var(--color-accent)] text-[var(--color-accent)]"
      : "border-[var(--color-border)] text-[var(--color-text-secondary)]",
    className
  );
}