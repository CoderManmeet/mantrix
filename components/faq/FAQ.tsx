"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DisclosureItem } from "@/components/ui/Disclosure";
import { FAQ_ITEMS } from "@/content/faq";

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

            return (
              <DisclosureItem
                key={item.question}
                id={`faq-${index}`}
                isOpen={isOpen}
                onToggle={() => setOpenIndex(isOpen ? null : index)}
                trigger={
                  <span className="text-h5 font-medium text-[var(--color-text-primary)]">{item.question}</span>
                }
                icon={
                  <Plus
                    size={18}
                    strokeWidth={1.75}
                    className={`shrink-0 text-[var(--color-text-secondary)] transition-transform duration-350 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                }
              >
                <p className="pb-6 text-body text-[var(--color-text-secondary)]">{item.answer}</p>
              </DisclosureItem>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}