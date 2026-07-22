"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECTS, type ProjectCategory } from "@/content/projects";

const FILTERS: Array<ProjectCategory | "All"> = ["All", "Web", "AI", "SaaS", "CRM", "Business Systems"];

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visibleProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((project) => project.categories.includes(filter));

  return (
    <section id="work" aria-label="Featured Projects" className="py-32">
      <Container>
        <div className="mb-12">
          <SectionHeading eyebrow="Work" title="Featured projects." />
        </div>

        <div role="group" aria-label="Filter projects by category" className="mb-12 flex flex-wrap gap-3">
          {FILTERS.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                data-cursor="clickable"
                onClick={() => setFilter(category)}
                className={`rounded-[var(--radius-pill)] border px-4 py-2 text-small transition-colors duration-250 ${
                  isActive
                    ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <Grid>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}