import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/content/process";

/** Spec: "DEVELOPMENT PROCESS" — vertical timeline, professionalism + reassurance. */
export function Process() {
  return (
    <section id="process" aria-label="Development Process" className="py-32">
      <Container>
        <div className="mb-16">
          <SectionHeading eyebrow="Process" title="How a project moves from idea to launch." />
        </div>

        <Grid>
          <ol className="col-span-4 flex flex-col md:col-span-8 md:col-start-1 lg:col-span-8 lg:col-start-3">
            {PROCESS_STEPS.map((item, index) => {
              const isLast = index === PROCESS_STEPS.length - 1;
              return (
                <li key={item.step} className="relative flex gap-6 pb-12 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)] font-mono text-caption text-[var(--color-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {!isLast && <span aria-hidden="true" className="mt-2 w-px flex-1 bg-[var(--color-border)]" />}
                  </div>

                  <div className="pb-2">
                    <h3 className="text-h5 font-semibold text-[var(--color-text-primary)]">{item.step}</h3>
                    <p className="mt-2 max-w-[32rem] text-body text-[var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Grid>
      </Container>
    </section>
  );
}