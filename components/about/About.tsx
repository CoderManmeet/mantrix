import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CONTENT } from "@/content/about";

/** Spec: "ABOUT MANTRIX" — story via timeline, philosophy not biography. */
export function About() {
  return (
    <section id="about" aria-label="About MANTRIX" className="py-32">
      <Container>
        <Grid>
          <div className="col-span-4 md:col-span-8 lg:col-span-5">
            <SectionHeading eyebrow={ABOUT_CONTENT.eyebrow} title={ABOUT_CONTENT.title} />
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7">
            <ol className="flex flex-col gap-6">
              {ABOUT_CONTENT.timeline.map((item, index) => (
                <li key={item} className="flex items-baseline gap-4">
                  <span className="font-mono text-caption text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h5 font-medium text-[var(--color-text-primary)]">{item}</span>
                </li>
              ))}
            </ol>

            <p className="mt-10 max-w-[36rem] text-body text-[var(--color-text-secondary)]">
              {ABOUT_CONTENT.philosophy}
            </p>
          </div>
        </Grid>
      </Container>
    </section>
  );
}