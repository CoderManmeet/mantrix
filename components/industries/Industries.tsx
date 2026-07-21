import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INDUSTRIES } from "@/content/industries";

/** Spec: "INDUSTRIES" — each card explains problems solved, not services offered. */
export function Industries() {
  return (
    <section id="industries" aria-label="Industries" className="py-32">
      <Container>
        <div className="mb-16">
          <SectionHeading
            eyebrow="Industries"
            title="Built for businesses that need more than a website."
            align="center"
          />
        </div>

        <Grid>
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="col-span-4 md:col-span-4 lg:col-span-4 flex flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
            >
              <span className="text-3xl" aria-hidden="true">
                {industry.icon}
              </span>
              <h3 className="text-h5 font-semibold text-[var(--color-text-primary)]">{industry.name}</h3>

              <ol className="flex flex-col gap-2">
                {industry.problemChain.map((step, index) => (
                  <li key={step} className="flex items-center gap-2 text-small text-[var(--color-text-secondary)]">
                    {index > 0 && (
                      <span aria-hidden="true" className="text-[var(--color-accent)]">
                        ↓
                      </span>
                    )}
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
}