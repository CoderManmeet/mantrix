"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center py-32">
      <Container size="reading">
        <span className="font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-error)]">
          Error
        </span>
        <h1 className="mt-4 text-h2 font-semibold tracking-tight text-[var(--color-text-primary)]">
          Something went wrong.
        </h1>
        <p className="mt-4 max-w-[32rem] text-body text-[var(--color-text-secondary)]">
          An unexpected error occurred while loading this page.
        </p>
        <Button variant="primary" className="mt-8" onClick={() => reset()} data-cursor="clickable">
          Try again
        </Button>
      </Container>
    </main>
  );
}