import { Hero } from "@/components/hero/Hero";
import { TrustedTechnologies } from "@/components/trusted-technologies/TrustedTechnologies";
import { About } from "@/components/about/About";
import { Industries } from "@/components/industries/Industries";
import { Services } from "@/components/services/Services";
import { Process } from "@/components/process/Process";
import { TechStack } from "@/components/tech-stack/TechStack";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Founder } from "@/components/founder/Founder";
import { Achievements } from "@/components/achievements/Achievements";
import { FAQ } from "@/components/faq/FAQ";
import { Footer } from "@/components/footer/Footer";

/**
 * Stages 13/14/15 (Projects grid, project interactions, case study pages)
 * and Stage 22 (Contact form) still need to be built and slotted in here —
 * they need routing/state work beyond this batch. Order otherwise follows
 * the spec's WEBSITE STRUCTURE.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedTechnologies />
      <About />
      <Industries />
      <Services />
      <Process />
      <TechStack />
      <Testimonials />
      <Founder />
      <Achievements />
      <FAQ />
      <Footer />
    </main>
  );
}