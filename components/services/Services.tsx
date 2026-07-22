"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DisclosureItem } from "@/components/ui/Disclosure";
import { SERVICES } from "@/content/services";
import { NAV_CTA } from "@/constants/navigation";

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" aria-label="Services" className="py-32">
      <Container>
        <div className="mb-16">
          <SectionHeading
            eyebrow="Services"
            title="What MANTRIX builds."
            description="Ten capabilities. One standard: software that changes how the business runs."
          />
        </div>

        <ul className="flex flex-col divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <DisclosureItem
                key={service.name}
                id={`service-${index}`}
                isOpen={isOpen}
                onToggle={() => setOpenIndex(isOpen ? null : index)}
                trigger={
                  <span className="text-h4 font-medium text-[var(--color-text-primary)]">{service.name}</span>
                }
                icon={
                  <ChevronDown
                    size={20}
                    strokeWidth={1.75}
                    className={`shrink-0 text-[var(--color-text-secondary)] transition-transform duration-350 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <div className="flex flex-col gap-6 pb-8 md:flex-row md:gap-12">
                  <div className="flex flex-col gap-4 md:w-1/2">
                    <p className="text-body text-[var(--color-text-secondary)]">
                      <span className="font-medium text-[var(--color-text-primary)]">Problem — </span>
                      {service.problem}
                    </p>
                    <p className="text-body text-[var(--color-text-secondary)]">
                      <span className="font-medium text-[var(--color-text-primary)]">Solution — </span>
                      {service.solution}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 md:w-1/2">
                    <ul className="flex flex-col gap-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-small text-[var(--color-text-secondary)]"
                        >
                          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="text" showArrow className="w-fit" data-cursor="clickable">
                      {NAV_CTA.label}
                    </Button>
                  </div>
                </div>
              </DisclosureItem>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}