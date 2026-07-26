export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}

export const trainers: Trainer[] = [
  {
    id: "alex-vance",
    name: "Alex Vance",
    specialty: "Metabolic Conditioning & Agility",
    bio: "Former collegiate sprinter specializing in high-velocity cardiovascular pacing and anaerobic threshold training.",
    imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=400&h=500&q=80"
  },
  {
    id: "kira-sloan",
    name: "Kira Sloan",
    specialty: "Olympic Weightlifting & Strength",
    bio: "National-level weightlifter focused on explosive force production, joint positioning, and lifting biomechanics.",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&h=500&q=80"
  },
  {
    id: "marcus-reid",
    name: "Marcus Reid",
    specialty: "Athletic Mobility & Rehab",
    bio: "Physical therapist specializing in movement analysis, kinetic chain realignment, and functional active recovery.",
    imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&w=400&h=500&q=80"
  }
];
