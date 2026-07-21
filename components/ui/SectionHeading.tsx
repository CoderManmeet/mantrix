interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * Every content section (Trusted Tech through Footer) opens with the same
 * eyebrow + headline + optional description shape. Pulled out once instead
 * of repeating this markup in every section component.
 */
export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {eyebrow}
      </span>
      <h2 className="text-h2 font-semibold tracking-tight text-[var(--color-text-primary)]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[36rem] text-body text-[var(--color-text-secondary)]">{description}</p>
      ) : null}
    </div>
  );
}