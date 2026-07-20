import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 12/8/4 responsive column grid per spec's GRID SYSTEM.
 * Column count switches at Tailwind's default breakpoints:
 * mobile (<768px) = 4, tablet (768–1023px) = 8, desktop (1024px+) = 12.
 */
export function Grid({ children, className }: GridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-4 gap-4 md:grid-cols-8 md:gap-6 lg:grid-cols-12 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
}