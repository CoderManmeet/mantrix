export type ProjectCategory = "Web" | "AI" | "SaaS" | "CRM" | "Business Systems";

export interface Project {
  slug: string;
  name: string;
  categories: ProjectCategory[];
  summary: string;
  stack?: string[];
  challenge?: string;
  status: "Live" | "In Development" | "Completed";
  url?: string;
  imageUrl?: string;
  githubUrl?: string;  // source repo
}

export const PROJECTS: Project[] = [
  {
    slug: "projectflow",
    name: "ProjectFlow",
    categories: ["SaaS", "Business Systems"],
    summary: "A full-stack SaaS project management platform, built and shipped as a college capstone.",
    stack: ["React", "Vite", "TypeScript", "Express", "MongoDB", "JWT Auth"],
    challenge:
      "Cross-domain cookies were blocked in production, so auth was migrated from httpOnly cookies to Bearer tokens.",
    status: "Completed",
    imageUrl: "/images/projects/projectflow.png",
    url : "",
    githubUrl: "https://github.com/CoderManmeet/project-flow",
  },
  {
    slug: "quickdesk",
    name: "QuickDesk",
    categories: ["Business Systems", "SaaS"],
    summary: "A help desk / ticketing system for internal support workflows.",
    status: "Completed",
    imageUrl: "/images/projects/quickdeskk.png",
    githubUrl: "https://github.com/CoderManmeet/QUICKDESK",
  },
  {
    slug: "placement-tracker",
    name: "Placement Tracker",
    categories: ["Business Systems"],
    summary: "A system for tracking placement and recruitment workflows.",
    status: "Completed",
    imageUrl: "/images/projects/placement-trackerr.png",
    githubUrl: "https://github.com/CoderManmeet/placement-tracker",
  },
  {
    slug: "real-estate-os",
    name: "Real Estate OS",
    categories: ["CRM", "SaaS"],
    summary: "A real estate CRM built on a relational Postgres architecture, currently in development.",
    stack: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL"],
    challenge: "Getting a reliable local PostgreSQL setup running across environments.",
    status: "In Development",
    imageUrl: "/images/projects/Real-estate.png",
    githubUrl: "https://github.com/CoderManmeet/real-estate-os"
  },
  {
    slug: "suto-cafe",
    name: "Suto Café",
    categories: ["Web"],
    summary: "A client website built for Suto Café.",
    status: "Live",
    imageUrl: "/images/projects/suto.png",
    githubUrl: "https://github.com/CoderManmeet/suto-cafe"
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    categories: ["Web", "AI"],
    summary: "A personal portfolio site with an embedded AI chatbot.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Three.js", "Groq"],
    challenge:
      "The blog originally used next-mdx-remote, which crashed persistently — rebuilt on unified/remark/rehype instead.",
    status: "Live",
    imageUrl: "/images/projects/portfolio.png",
    url: "https://portfolio-gold-six-23.vercel.app/",
    githubUrl: "https://github.com/CoderManmeet/portfolio",
  },
];