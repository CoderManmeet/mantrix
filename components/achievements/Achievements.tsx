import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ACHIEVEMENTS } from "@/content/achievements";

/** Spec: "ACHIEVEMENTS" — milestones instead of vanity metrics. */
export function Achievements() {
  return (
    <section id="achievements" aria-label="Achievements" className="py-32">
      <Container>
        <div className="mb-16">
          <SectionHeading eyebrow="Milestones" title="Where things stand today." />
        </div>

        <Grid>
          {ACHIEVEMENTS.map((achievement) => (
            <div
              key={achievement}
              className="col-span-4 md:col-span-4 lg:col-span-6 flex gap-4 border-t border-[var(--color-border)] pt-6"
            >
              <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
              <p className="text-body text-[var(--color-text-primary)]">{achievement}</p>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
}