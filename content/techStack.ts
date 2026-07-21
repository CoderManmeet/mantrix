/** Spec: "TECH STACK" — organized by category, hover reveals experience/use cases. */
export interface TechItem {
  name: string;
  experience: string;
  useCases: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export const TECH_STACK: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", experience: "Primary UI library across every project.", useCases: "Component-driven interfaces, dashboards, client sites." },
      { name: "Next.js", experience: "Default framework for production builds.", useCases: "SSR/SSG sites, full-stack apps, SEO-driven pages." },
      { name: "TypeScript", experience: "Used on every project, front and back end.", useCases: "Type-safe APIs, large codebases, fewer runtime bugs." },
      { name: "Tailwind CSS", experience: "Primary styling approach.", useCases: "Design systems, rapid UI iteration." },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js / Express", experience: "Core backend runtime for most projects.", useCases: "REST APIs, auth systems, business logic." },
      { name: "Django", experience: "Used for Python-based full-stack builds.", useCases: "Admin-heavy platforms, rapid backend scaffolding." },
    ],
  },
  {
    category: "AI",
    items: [
      { name: "OpenAI / LLM APIs", experience: "Integrated into chat interfaces and automation.", useCases: "AI chatbots, content generation, workflow automation." },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", experience: "Primary relational database via Prisma ORM.", useCases: "CRMs, SaaS platforms, structured business data." },
      { name: "MongoDB", experience: "Used where schema flexibility mattered.", useCases: "Project management tools, content-heavy apps." },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "Vercel", experience: "Primary hosting for frontend/full-stack apps.", useCases: "Next.js deployments, preview environments." },
      { name: "Render", experience: "Used for backend API hosting.", useCases: "Express servers, background jobs." },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", experience: "Used for consistent local/production environments.", useCases: "Containerized services, reproducible builds." },
      { name: "Git / GitHub", experience: "Version control on every project.", useCases: "Collaboration, CI, deployment pipelines." },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", experience: "Used for wireframes and UI design.", useCases: "Design systems, client proposals, prototyping." },
      { name: "GSAP / Framer Motion", experience: "Motion layer for premium, purposeful animation.", useCases: "Scroll-driven reveals, micro-interactions." },
    ],
  },
];