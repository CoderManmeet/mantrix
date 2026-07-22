export const CONTACT_CONTENT = {
  eyebrow: "Contact",
  headlineLines: ["Let's Build", "Something", "Exceptional."],
  intro:
    "Tell us about the project — what it needs to do, and for whom. We'll follow up to figure out the rest.",
} as const;

export const CONTACT_CHANNELS = [
  { label: "Email", value: "manmeet00002006@gmail.com", href: "mailto:manmeet00002006@gmail.com" },
  { label: "WhatsApp", value: "Message on WhatsApp", href: "https://wa.me/7888548215" },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: "www.linkedin.com/in/manmeetcodess/" },
  { label: "GitHub", value: "View on GitHub", href: "https://github.com/CoderManmeet" },
  { label: "Instagram", value: "Follow on Instagram", href: "https://www.instagram.com/manmeetdigital?igsh=d205a21ubTlqamw5" },
] as const;

export const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $10,000",
  "$10,000+",
] as const;