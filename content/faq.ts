/** Spec: "FAQ" — the questions clients actually have. */
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does a project take?",
    answer: "It depends on scope — a focused website typically takes a few weeks, while a full SaaS or CRM platform takes longer. Timelines are scoped clearly before any work starts.",
  },
  {
    question: "What industries do you work with?",
    answer: "Currently focused on dental clinics, medical clinics, real estate, and interior design — alongside growing businesses more broadly, regardless of industry.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes. Software is maintained after launch, not abandoned — support and iteration are part of the process.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes. Existing sites can be rebuilt from the ground up or improved incrementally, depending on what makes sense for the business.",
  },
  {
    question: "Can you build custom software?",
    answer: "Yes — SaaS platforms, CRMs, dashboards, and internal business tools are all part of the work MANTRIX does.",
  },
  {
    question: "Do you work internationally?",
    answer: "Yes. Work is done remotely with clients anywhere, with clear async communication throughout the project.",
  },
  {
    question: "What's your development process?",
    answer: "Discover, research, design, develop, test, launch, support — every project moves through the same seven stages.",
  },
];