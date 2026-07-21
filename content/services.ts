/** Spec: "SERVICES" — interactive panels: Problem -> Solution -> Deliverables -> CTA. */
export interface Service {
  name: string;
  problem: string;
  solution: string;
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    name: "Website Development",
    problem: "Most business websites look outdated and convert nobody.",
    solution: "A fast, modern site built to represent the business and turn visitors into leads.",
    deliverables: ["Custom design", "Responsive build", "SEO fundamentals", "Analytics setup"],
  },
  {
    name: "SaaS",
    problem: "Manual processes don't scale as the business grows.",
    solution: "A dedicated platform that automates the repetitive parts of the operation.",
    deliverables: ["Multi-tenant architecture", "Billing integration", "Role-based access", "Admin dashboard"],
  },
  {
    name: "AI",
    problem: "Repetitive tasks eat hours that should go toward growth.",
    solution: "AI systems wired directly into the existing workflow, not bolted on as a gimmick.",
    deliverables: ["LLM integration", "Automation pipelines", "Custom chat interfaces", "Data workflows"],
  },
  {
    name: "CRM",
    problem: "Leads and clients get lost across spreadsheets and inboxes.",
    solution: "A CRM shaped around how the business actually sells and follows up.",
    deliverables: ["Pipeline tracking", "Contact management", "Automated follow-ups", "Reporting"],
  },
  {
    name: "Dashboards",
    problem: "Decisions get made on gut feeling instead of real numbers.",
    solution: "A dashboard that surfaces the metrics that actually matter, in one place.",
    deliverables: ["Data visualization", "Real-time metrics", "Custom reports", "Role-based views"],
  },
  {
    name: "Automation",
    problem: "The team spends hours a week on tasks a system could handle.",
    solution: "Workflows that quietly run in the background so the team doesn't have to.",
    deliverables: ["Workflow mapping", "Third-party integrations", "Scheduled jobs", "Notifications"],
  },
  {
    name: "Mobile Apps",
    problem: "Customers expect a mobile experience, not just a mobile-friendly site.",
    solution: "A focused mobile app built around the core actions customers actually take.",
    deliverables: ["Cross-platform build", "Push notifications", "Offline support", "App store setup"],
  },
  {
    name: "APIs",
    problem: "Internal systems can't talk to each other.",
    solution: "Clean, documented APIs that connect the tools the business already relies on.",
    deliverables: ["REST/GraphQL design", "Authentication", "Documentation", "Rate limiting"],
  },
  {
    name: "UI/UX",
    problem: "A product works, but using it feels like work.",
    solution: "Interfaces designed around clarity first, decoration second.",
    deliverables: ["User flows", "Wireframes", "Design system", "Usability review"],
  },
  {
    name: "Business Software",
    problem: "Off-the-shelf tools almost fit, but never quite.",
    solution: "Software built around the business's actual process, not a generic template.",
    deliverables: ["Requirements mapping", "Custom architecture", "Internal tooling", "Ongoing support"],
  },
];