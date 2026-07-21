"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/content/faq";

/** Spec: "FAQ" — the questions clients actually have. */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="py-32">
      <Container size="reading">
        <div className="mb-16">
          <SectionHeading eyebrow="FAQ" title="Questions clients ask." align="center" />
        </div>

        <ul className="flex flex-col divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <li key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    data-cursor="clickable"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-h5 font-medium text-[var(--color-text-primary)]">
                      {item.question}
                    </span>
                    <Plus
                      size={18}
                      strokeWidth={1.75}
                      className={`shrink-0 text-[var(--color-text-secondary)] transition-transform duration-350 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-350 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-body text-[var(--color-text-secondary)]">{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}