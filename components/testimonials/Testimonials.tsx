"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/content/testimonials";

/**
 * Spec: "TESTIMONIALS" — real clients (Suto Café, Veterinary Clinic, Yoga
 * Studio), displayed as full-width quotes, not cramped cards. Quote text
 * for each is a clearly marked placeholder until approved — see
 * content/testimonials.ts.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  const goTo = (next: number) => {
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  if (!testimonial) return null;

  return (
    <section id="testimonials" aria-label="Testimonials" className="py-32">
      <Container size="reading">
        <div className="mb-16">
          <SectionHeading eyebrow="Testimonials" title="What clients say." align="center" />
        </div>

        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                strokeWidth={0}
                fill={i < testimonial.rating ? "var(--color-accent)" : "var(--color-border)"}
              />
            ))}
          </div>

          <blockquote className="text-h4 font-medium leading-snug text-[var(--color-text-primary)]">
            &ldquo;{testimonial.quote}&rdquo;
            {testimonial.isPlaceholder && (
              <span className="mt-4 block font-mono text-caption font-normal uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                Placeholder — pending client approval
              </span>
            )}
          </blockquote>

          <div className="flex items-center gap-3">
            {testimonial.avatarUrl ? (
              <Image
                src={testimonial.avatarUrl}
                alt={testimonial.clientName}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-elevated)] font-mono text-caption text-[var(--color-text-secondary)]"
              >
                {testimonial.businessName.charAt(0)}
              </span>
            )}
            <div className="text-left">
              <p className="text-small font-medium text-[var(--color-text-primary)]">{testimonial.clientName}</p>
              <p className="text-caption text-[var(--color-text-secondary)]">{testimonial.industry}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              data-cursor="clickable"
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors duration-250 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <ChevronLeft size={18} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              data-cursor="clickable"
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors duration-250 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <ChevronRight size={18} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}