import { Container } from "@/components/layout/Container";
import { TRUSTED_TECHNOLOGIES } from "@/content/trustedTechnologies";

/**
 * Spec: "Trusted Technologies" — confidence through engineering, not
 * client logos. Duplicated list creates a seamless CSS marquee loop; the
 * duplicate is aria-hidden since it's a visual repeat, not new content.
 */
export function TrustedTechnologies() {
  return (
    <section id="trusted" aria-label="Technologies" className="border-y border-[var(--color-border)] py-12">
      <Container>
        <p className="mb-8 text-center font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          Built With
        </p>
      </Container>

      <div className="overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-16">
          <ul className="flex shrink-0 gap-16" aria-label="Technologies used">
            {TRUSTED_TECHNOLOGIES.map((tech) => (
              <li
                key={tech}
                className="whitespace-nowrap font-mono text-h5 text-[var(--color-text-secondary)]"
              >
                {tech}
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 gap-16" aria-hidden="true">
            {TRUSTED_TECHNOLOGIES.map((tech) => (
              <li
                key={tech}
                className="whitespace-nowrap font-mono text-h5 text-[var(--color-text-secondary)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}