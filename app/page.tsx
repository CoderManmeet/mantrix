import { Hero } from "@/components/hero/Hero";
import { TrustedTechnologies } from "@/components/trusted-technologies/TrustedTechnologies";
import { About } from "@/components/about/About";
import { Industries } from "@/components/industries/Industries";
import { Services } from "@/components/services/Services";
import { Projects } from "@/components/projects/Projects";
import { Process } from "@/components/process/Process";
import { TechStack } from "@/components/tech-stack/TechStack";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Founder } from "@/components/founder/Founder";
import { Achievements } from "@/components/achievements/Achievements";
import { FAQ } from "@/components/faq/FAQ";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedTechnologies />
      <About />
      <Industries />
      <Services />
      <Projects />
      <Process />
      <TechStack />
      <Testimonials />
      <Founder />
      <Achievements />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}