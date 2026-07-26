export interface ClassFormat {
  id: string;
  name: string;
  duration: string;
  intensity: "HIGH" | "MAXIMUM" | "MODERATE";
  description: string;
  focus: string;
}

export const classes: ClassFormat[] = [
  {
    id: "metcon-9",
    name: "METCON_9",
    duration: "45 MIN",
    intensity: "MAXIMUM",
    description: "A high-velocity metabolic conditioning circuit designed to redline your heart rate, maximize caloric burn, and test mental resilience.",
    focus: "Cardiovascular Threshold"
  },
  {
    id: "lift-heavy",
    name: "LIFT_HEAVY",
    duration: "60 MIN",
    intensity: "HIGH",
    description: "Olympic lifting, power cleans, and structural strength building. Focused entirely on velocity metrics, mechanical form, and absolute force output.",
    focus: "Progressive Overload"
  },
  {
    id: "kinetic-flow",
    name: "KINETIC_FLOW",
    duration: "45 MIN",
    intensity: "MODERATE",
    description: "High-intensity athletic mobility, joint decompression, and core stabilization. Designed to restore movement ranges and rebuild kinetic chains.",
    focus: "Active Recovery"
  },
  {
    id: "row-sprint",
    name: "ROW_SPRINT",
    duration: "50 MIN",
    intensity: "MAXIMUM",
    description: "Water-rower intervals split with explosive plyometric complexes. Structured as a competitive team-format sprint focused on split times.",
    focus: "Anaerobic Power"
  }
];
