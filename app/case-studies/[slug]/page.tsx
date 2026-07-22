import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PROJECTS } from "@/content/projects";
import { CASE_STUDIES, type CaseStudySections } from "@/content/caseStudies";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

const SECTION_LABELS: Record<keyof CaseStudySections, string> = {
  problem: "Problem",
  research: "Research",
  wireframes: "Wireframes",
  ui: "UI",
  architecture: "Architecture",
  features: "Features",
  results: "Results",
  reflection: "Reflection",
};

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const sections = CASE_STUDIES[slug];
  const sectionEntries = sections
    ? (Object.keys(SECTION_LABELS) as Array<keyof CaseStudySections>)
        .filter((key) => sections[key])
        .map((key) => ({ label: SECTION_LABELS[key], content: sections[key] as string }))
    : [];

  return (
    <main className="py-32">
      <Container size="reading">
        <Link
          href="/#work"
          data-cursor="clickable"
          className="mb-12 inline-flex items-center gap-2 text-small text-[var(--color-text-secondary)] transition-colors duration-250 hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
          Back to work
        </Link>

        <span className="font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {project.status}
        </span>

        <h1 className="mt-4 text-h1 font-semibold tracking-tight text-[var(--color-text-primary)]">
          {project.name}
        </h1>

        <p className="mt-6 text-body text-[var(--color-text-secondary)]">{project.summary}</p>

        {project.stack && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-[var(--radius-pill)] border border-[var(--color-border)] px-3 py-1 text-caption text-[var(--color-text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {sectionEntries.length > 0 ? (
          <div className="mt-16 flex flex-col gap-12">
            {sectionEntries.map((entry) => (
              <div key={entry.label}>
                <h2 className="text-h5 font-semibold text-[var(--color-text-primary)]">{entry.label}</h2>
                <p className="mt-3 text-body text-[var(--color-text-secondary)]">{entry.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-16 text-body text-[var(--color-text-secondary)]">
            A detailed case study for this project is being put together.
          </p>
        )}
      </Container>
    </main>
  );
}