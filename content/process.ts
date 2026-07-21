/** Spec: "DEVELOPMENT PROCESS" — interactive vertical timeline. */
export interface ProcessStep {
  step: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { step: "Discover", description: "Understand the business, the goal, and what success actually looks like." },
  { step: "Research", description: "Study the industry, the competition, and the constraints of the project." },
  { step: "Design", description: "Wireframe and design the experience before a line of code is written." },
  { step: "Develop", description: "Build the system with a clean, maintainable architecture from day one." },
  { step: "Test", description: "Verify functionality, performance, and edge cases before anything ships." },
  { step: "Launch", description: "Deploy with monitoring in place, not just a hopeful push to production." },
  { step: "Support", description: "Stay involved after launch — software is maintained, not abandoned." },
];