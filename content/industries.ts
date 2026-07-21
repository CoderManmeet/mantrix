/** Spec: "INDUSTRIES" — each card explains problems, not services. */
export interface Industry {
  icon: string;
  name: string;
  problemChain: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    icon: "🦷",
    name: "Dental Clinics",
    problemChain: ["More bookings", "Less admin work", "Online visibility", "Automation"],
  },
  {
    icon: "🏢",
    name: "Real Estate",
    problemChain: ["Faster listings", "Lead tracking", "Client visibility", "Fewer spreadsheets"],
  },
  {
    icon: "🏥",
    name: "Medical Clinics",
    problemChain: ["Simple booking", "Patient trust", "Fewer no-shows", "Clear communication"],
  },
  {
    icon: "🏡",
    name: "Interior Design",
    problemChain: ["Visual portfolios", "Client proposals", "Project tracking", "Referral growth"],
  },
  {
    icon: "🌍",
    name: "Growing Businesses",
    problemChain: ["Manual processes", "Custom software", "Scalable systems", "Room to grow"],
  },
];