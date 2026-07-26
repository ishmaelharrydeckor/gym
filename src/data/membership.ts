export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  isRecommended: boolean;
  ctaText: string;
}

export const membershipTiers: MembershipTier[] = [
  {
    id: "squad",
    name: "SQUAD_8",
    price: "$149",
    billing: "PER MONTH",
    description: "Ideal for those blending studio conditioning with outdoor work.",
    features: [
      "8 classes per month",
      "Access to all class formats",
      "Advanced heart-rate tracking metrics",
      "14-day advance booking window"
    ],
    isRecommended: false,
    ctaText: "JOIN THE SQUAD"
  },
  {
    id: "athlete",
    name: "ATHLETE_UNLIMITED",
    price: "$229",
    billing: "PER MONTH",
    description: "Our signature tier for dedicated high-intensity training, recovery, and progress.",
    features: [
      "Unlimited classes",
      "Access to all class formats & recovery clinics",
      "Priority waitlist & booking (21 days advance)",
      "Complimentary locker service & performance fuel",
      "1 physical structural biomechanics assessment"
    ],
    isRecommended: true,
    ctaText: "START UNLIMITED"
  },
  {
    id: "elite",
    name: "ELITE_VIP",
    price: "$399",
    billing: "PER MONTH",
    description: "Designed for high-performance athletes requiring customized programming.",
    features: [
      "Everything in Unlimited Pass",
      "2 private 1-on-1 coaching sessions per month",
      "Customized monthly metabolic & nutrition plan",
      "Exclusive access to the private recovery suite",
      "Unlimited guest passes (1 per class)"
    ],
    isRecommended: false,
    ctaText: "APPLY FOR ELITE"
  }
];
