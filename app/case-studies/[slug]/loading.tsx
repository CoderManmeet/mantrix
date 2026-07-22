import { Container } from "@/components/layout/Container";

export default function CaseStudyLoading() {
  return (
    <main className="py-32" aria-busy="true" aria-label="Loading case study">
      <Container size="reading">
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-24 rounded-[var(--radius-pill)] bg-[var(--color-surface)]" />
          <div className="h-12 w-2/3 rounded-[var(--radius-md)] bg-[var(--color-surface)]" />
          <div className="h-4 w-full rounded-[var(--radius-md)] bg-[var(--color-surface)]" />
          <div className="h-4 w-5/6 rounded-[var(--radius-md)] bg-[var(--color-surface)]" />
          <div className="mt-10 h-40 w-full rounded-[var(--radius-card)] bg-[var(--color-surface)]" />
        </div>
      </Container>
    </main>
  );
}