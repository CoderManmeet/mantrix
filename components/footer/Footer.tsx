import { Container } from "@/components/layout/Container";
import { NAV_ITEMS, NAV_LOGO } from "@/constants/navigation";
import { FOOTER_SOCIAL_LINKS } from "@/content/footer";

/** Spec: "FOOTER" — simple, no clutter: navigation, social links, copyright, pulse line. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-16">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <a href={NAV_LOGO.href} className="font-mono text-h5 font-medium text-[var(--color-text-primary)]">
              {NAV_LOGO.label}
            </a>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    
                    < a  href={item.href}
                      data-cursor="clickable"
                      className="text-small text-[var(--color-text-secondary)] transition-colors duration-250 hover:text-[var(--color-accent)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  
                   < a href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="clickable"
                    className="text-small text-[var(--color-text-secondary)] transition-colors duration-250 hover:text-[var(--color-accent)]"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            aria-hidden="true"
            className="h-px w-full animate-[glow-pulse_2.4s_ease-in-out_infinite] bg-[var(--color-accent)]"
          />

          <div className="flex flex-col gap-2 text-caption text-[var(--color-text-secondary)] md:flex-row md:items-center md:justify-between">
            <p>© {year} MANTRIX. All rights reserved.</p>
            <p>Built with ❤️ by MANTRIX</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}