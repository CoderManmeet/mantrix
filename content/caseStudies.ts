export interface CaseStudySections {
  problem?: string;
  research?: string;
  wireframes?: string;
  ui?: string;
  architecture?: string;
  features?: string;
  results?: string;
  reflection?: string;
}

export const CASE_STUDIES: Record<string, CaseStudySections> = {
  projectflow: {
    problem:
      "A college capstone project needed a full project-management SaaS app, built and defended in a viva.",
    architecture:
      "React + Vite on the frontend, Express + MongoDB on the backend, with JWT-based Bearer token authentication after cross-domain cookies proved unreliable across environments.",
    features:
      "Includes a dashboard, drag-and-drop task boards (dnd-kit), charts (Recharts), and a Shadcn UI component layer.",
    results:
      "Shipped as a complete, working app with a full register → login → dashboard flow, later extended with email verification (Nodemailer + Gmail SMTP, SHA-256 token hashing).",
    reflection:
      "Several real bugs shaped the architecture along the way — a Mongoose v9 async pre-save hook incompatibility, dotenv ESM hoisting order, and PowerShell brace-expansion issues in the dev workflow.",
  },
  "real-estate-os": {
    problem:
      "Real estate businesses juggle listings, leads, and client communication across disconnected tools.",
    architecture:
      "Node.js + Express + TypeScript on the backend, Prisma ORM over PostgreSQL for the data layer.",
    reflection:
      "Currently in active development — the immediate hurdle has been getting a reliable local PostgreSQL setup running without conflicts between installed versions.",
  },
  portfolio: {
    problem: "A personal site needed to double as a demonstration of the same craft being sold to clients.",
    architecture:
      "Next.js 15 (App Router) with React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Three.js.",
    features:
      "Includes Terminal Mode, a command palette, a loading screen, a Konami-code easter egg, and an embedded AI chatbot built on Groq's free tier (llama-3.3-70b-versatile).",
    results:
      "The blog was rebuilt on unified/remark/rehype after next-mdx-remote caused persistent crashes under MDX.",
    reflection:
      "An audit during development found that a few features marked \"complete\" in the task brief didn't actually exist in the codebase yet — a reminder to verify against the real code, not the plan.",
  },
};