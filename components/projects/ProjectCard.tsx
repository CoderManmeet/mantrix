"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Image as ImageIcon, Monitor, Smartphone, Tablet } from "lucide-react";
import { type Project } from "@/content/projects";
import { pillBadge } from "@/lib/utils";

function ProjectPreview({ project }: { project: Project }) {
  if (project.imageUrl) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)]">
        <Image
          src={project.imageUrl}
          alt={`${project.name} preview`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <ImageIcon size={20} strokeWidth={1.5} className="text-[var(--color-text-secondary)] opacity-50" />
      <span className="font-mono text-caption text-[var(--color-text-secondary)] opacity-50">
        Preview coming soon
      </span>
    </div>
  );
}

/**
 * Root changed from <Link> to a click-handled <div> in the live-link pass.
 * A real <a> (View Live) now sits inside the card, and nesting an <a>
 * inside another <a> is invalid HTML (interactive content cannot contain
 * further interactive content) — it can cause inconsistent click/focus
 * behavior across browsers. Using useRouter().push for the card's own
 * navigation keeps the exact same "whole card is clickable" UX while
 * letting the live-link button remain an independent, correctly-nested
 * element with its own stopPropagation so it doesn't also trigger the
 * card navigation.
 */
export function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div
      role="link"
      tabIndex={0}
      data-cursor="clickable"
      onClick={() => router.push(`/case-studies/${project.slug}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/case-studies/${project.slug}`);
        }
      }}
      className="group col-span-4 md:col-span-4 lg:col-span-4 flex cursor-pointer flex-col gap-5 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-350 hover:-translate-y-1 hover:border-[var(--color-accent)]"
    >
      <div className="relative">
        <ProjectPreview project={project} />

        {project.url && (
          
           <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="clickable"
            onClick={(e) => e.stopPropagation()}
            className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-[var(--color-black)]/80 px-3 py-1.5 text-caption text-[var(--color-text-primary)] backdrop-blur-sm transition-colors duration-250 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            View Live
            <ArrowUpRight size={13} strokeWidth={1.75} />
          </a>
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-h5 font-semibold text-[var(--color-text-primary)]">{project.name}</h3>
          <p className="mt-1 text-small text-[var(--color-text-secondary)]">{project.summary}</p>
        </div>
        <ArrowUpRight
          size={18}
          strokeWidth={1.75}
          className="mt-1 shrink-0 text-[var(--color-text-secondary)] transition-all duration-250 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {project.categories.map((category) => (
          <span key={category} className={pillBadge()}>
            {category}
          </span>
        ))}
        <span className={pillBadge("active")}>{project.status}</span>
      </div>

      <div className="grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] duration-350 group-hover:grid-rows-[1fr]">
        <div className="flex flex-col gap-3 overflow-hidden pt-1">
          <div className="flex items-center gap-3 text-[var(--color-text-secondary)]" aria-hidden="true">
            <Monitor size={16} strokeWidth={1.5} />
            <Tablet size={16} strokeWidth={1.5} />
            <Smartphone size={16} strokeWidth={1.5} />
          </div>

          {project.stack && (
            <p className="text-caption text-[var(--color-text-secondary)]">{project.stack.join(" · ")}</p>
          )}

          {project.challenge && (
            <p className="text-small text-[var(--color-text-secondary)]">{project.challenge}</p>
          )}
        </div>
      </div>
    </div>
  );
}