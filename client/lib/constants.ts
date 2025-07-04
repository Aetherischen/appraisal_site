export const BUSINESS_CONTACT = {
  email: "nospam@example.org", // Scrambled for protection
  phone: "555-000-1234", // Scrambled for protection
  phoneSecondary: "555-000-5678", // Scrambled for protection
  phoneNumeric: "5550001234",
  address: "Wallington, NJ 07057",
  businessName: "CSR Realty Appraisers",
  tagline: "New Jersey's Trusted Real Estate Appraisal Experts",
  owner: "Albert Zaccone, Certified Appraiser",
  hours: "Monday to Sunday, 9:00 AM - 8:00 PM",
  serviceArea: "All of New Jersey",
} as const;

// Real contact info (not exported to avoid accidental use)
const REAL_CONTACT = {
  email: "al@csrappraisals.com",
  phone: "(201) 815-1000",
  phoneSecondary: "(973) 591-9990",
} as const;
