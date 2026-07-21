"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK, type TechItem } from "@/content/techStack";

/** Spec: "TECH STACK" — organized by category, not a wall of logos; hover reveals detail. */
export function TechStack() {
  const [active, setActive] = useState<TechItem | null>(null);

  return (
    <section id="tech-stack" aria-label="Tech Stack" className="py-32">
      <Container>
        <div className="mb-16">
          <SectionHeading eyebrow="Tech Stack" title="The tools behind the work." />
        </div>

        <Grid>
          <div className="col-span-4 flex flex-col gap-10 md:col-span-8 lg:col-span-7">
            {TECH_STACK.map((group) => (
              <div key={group.category}>
                <h3 className="mb-4 font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      data-cursor="clickable"
                      onMouseEnter={() => setActive(item)}
                      onFocus={() => setActive(item)}
                      onClick={() => setActive(item)}
                      className="rounded-[var(--radius-pill)] border border-[var(--color-border)] px-4 py-2 text-small text-[var(--color-text-primary)] transition-colors duration-250 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9">
            <div
              aria-live="polite"
              className="sticky top-32 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
            >
              {active ? (
                <>
                  <h4 className="text-h5 font-semibold text-[var(--color-text-primary)]">{active.name}</h4>
                  <p className="mt-4 text-body text-[var(--color-text-secondary)]">{active.experience}</p>
                  <p className="mt-4 text-small text-[var(--color-text-secondary)]">{active.useCases}</p>
                </>
              ) : (
                <p className="text-body text-[var(--color-text-secondary)]">
                  Hover or select a technology to see how it&apos;s used.
                </p>
              )}
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}