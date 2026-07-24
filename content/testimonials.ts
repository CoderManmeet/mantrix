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
  // {
  //   clientName: "Suto Café",
  //   businessName: "Suto Café",
  //   industry: "Café",
  //   quote: "Final testimonial pending approval.",
  //   rating: 5,
  //   isPlaceholder: true,
  // },
  {
    clientName: "Dr. Jaspreet Grewal",
    businessName: "Lexi Pet Clinic",
    industry: "Veterinary Clinic",
    quote: "Mantrix delivered a website that perfectly reflects our clinic. We've received more appointment inquiries and great feedback from pet owners.",
    rating: 5,
    projectUrl: "https://lexipetclinic.com/",
    isPlaceholder: false,
  },
  {
    clientName: "Sandeep Kaur",
    businessName: "Yoga Studio",
    industry: "Yoga Studio",
    quote: "From the first meeting to launch, everything was handled professionally. We started receiving more inquiries within weeks.",
    rating: 5,

    isPlaceholder: false,
  },
];