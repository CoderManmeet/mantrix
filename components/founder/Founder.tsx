import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { FOUNDER_CONTENT } from "@/content/founder";

/** Spec: "FOUNDER" — introduced after credibility is established, agency-first framing. */
export function Founder() {
  return (
    <section id="founder" aria-label="Founder" className="py-32">
      <Container>
        <Grid>
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3 flex flex-col gap-8">
            <span className="font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {FOUNDER_CONTENT.eyebrow}
            </span>

            <h2 className="text-h2 font-semibold tracking-tight text-[var(--color-text-primary)]">
              {FOUNDER_CONTENT.headline}
            </h2>

            <div className="flex flex-col gap-6">
              {FOUNDER_CONTENT.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-[var(--color-text-secondary)]">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FOUNDER_CONTENT.principles.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5 text-small text-[var(--color-text-primary)]"
                >
                  <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {principle}
                </li>
              ))}
            </ul>

            <p className="text-h5 font-medium text-[var(--color-text-primary)]">{FOUNDER_CONTENT.closing}</p>
          </div>
        </Grid>
      </Container>
    </section>
  );
}