import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container>
        <Grid>
          <p className="col-span-4 font-mono text-sm text-[var(--color-text-secondary)] md:col-span-8 lg:col-span-12">
            MANTRIX — core layout stage. Sections arrive in later milestones.
          </p>
        </Grid>
      </Container>
    </main>
  );
}