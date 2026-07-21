import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroScrollIndicator } from "@/components/hero/HeroScrollIndicator";

/**
 * Stage 07 — Hero layout. No animation yet (Stage 08).
 * pt-24 clears the fixed 80px Navbar (h-20) without pushing the section
 * height past 100vh, since the navbar floats transparent over the hero.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-24"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <Grid>
          <div className="col-span-4 flex flex-col gap-8 md:col-span-8 lg:col-span-9">
            <HeroHeadline />
            <HeroButtons />
          </div>
        </Grid>
      </Container>

      <HeroScrollIndicator />
    </section>
  );
}