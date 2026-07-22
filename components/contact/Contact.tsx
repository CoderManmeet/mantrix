import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT_CONTENT, CONTACT_CHANNELS } from "@/content/contact";

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-32">
      <Container>
        <Grid>
          <div className="col-span-4 flex flex-col gap-8 md:col-span-8 lg:col-span-5">
            <span className="font-mono text-caption uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {CONTACT_CONTENT.eyebrow}
            </span>

            <h2 className="text-h1 font-semibold leading-[1.05] tracking-tight text-[var(--color-text-primary)]">
              {CONTACT_CONTENT.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="max-w-[28rem] text-body text-[var(--color-text-secondary)]">
              {CONTACT_CONTENT.intro}
            </p>

            <ul className="flex flex-col gap-3">
              {CONTACT_CHANNELS.map((channel) => (
                <li key={channel.label}>
                  
                   < a href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    data-cursor="clickable"
                    className="text-small text-[var(--color-text-secondary)] transition-colors duration-250 hover:text-[var(--color-accent)]"
                  >
                    {channel.label} — {channel.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </Grid>
      </Container>
    </section>
  );
}