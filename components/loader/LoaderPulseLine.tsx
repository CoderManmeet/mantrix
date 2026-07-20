import { forwardRef } from "react";

export const LoaderPulseLine = forwardRef<SVGLineElement>((_props, ref) => {
  return (
    <svg viewBox="0 0 400 2" className="h-px w-64 md:w-80" preserveAspectRatio="none" aria-hidden="true">
      <line
        ref={ref}
        x1="0"
        y1="1"
        x2="400"
        y2="1"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset="1000"
      />
    </svg>
  );
});

LoaderPulseLine.displayName = "LoaderPulseLine";