import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center py-32">
      <Container size="reading">
        <span className="font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-accent)]">
          404
        </span>
        <h1 className="mt-4 text-h2 font-semibold tracking-tight text-[var(--color-text-primary)]">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-[32rem] text-body text-[var(--color-text-secondary)]">
          The page you're looking for may have been moved or never existed.
        </p>
        <Link href="/" className="mt-8 inline-block" data-cursor="clickable">
          <Button variant="primary">Back to home</Button>
        </Link>
      </Container>
    </main>
  );
}