/**
 * Spec: "TESTIMONIALS" — real clients, honest placeholders where exact
 * quote text hasn't been approved yet. Content-driven so quotes can be
 * swapped in later by editing only this file.
 */
export interface Testimonial {
  clientName: string;
  businessName: string;
  industry: string;
  quote: string;
  rating: number;
  projectUrl?: string;
  avatarUrl?: string;
  isPlaceholder?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    clientName: "Suto Café",
    businessName: "Suto Café",
    industry: "Café",
    quote: "Final testimonial pending approval.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    clientName: "Veterinary Clinic",
    businessName: "Veterinary Clinic",
    industry: "Veterinary Care",
    quote: "Final testimonial pending approval.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    clientName: "Yoga Studio",
    businessName: "Yoga Studio",
    industry: "Wellness",
    quote: "Final testimonial pending approval.",
    rating: 5,
    isPlaceholder: true,
  },
];