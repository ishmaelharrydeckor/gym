export interface ScheduleSession {
  time: string;
  className: string;
  trainerName: string;
  spotsLeft: number;
  intensity: "HIGH" | "MAXIMUM" | "MODERATE";
}

export interface DaySchedule {
  day: string;
  sessions: ScheduleSession[];
}

export const schedule: DaySchedule[] = [
  {
    day: "Mon",
    sessions: [
      { time: "06:00 - 06:45", className: "METCON_9", trainerName: "Alex Vance", spotsLeft: 4, intensity: "MAXIMUM" },
      { time: "07:00 - 08:00", className: "LIFT_HEAVY", trainerName: "Kira Sloan", spotsLeft: 8, intensity: "HIGH" },
      { time: "08:30 - 09:15", className: "KINETIC_FLOW", trainerName: "Marcus Reid", spotsLeft: 12, intensity: "MODERATE" },
      { time: "17:30 - 18:20", className: "ROW_SPRINT", trainerName: "Alex Vance", spotsLeft: 2, intensity: "MAXIMUM" },
      { time: "18:30 - 19:30", className: "LIFT_HEAVY", trainerName: "Kira Sloan", spotsLeft: 0, intensity: "HIGH" }
    ]
  },
  {
    day: "Wed",
    sessions: [
      { time: "06:00 - 06:45", className: "ROW_SPRINT", trainerName: "Alex Vance", spotsLeft: 6, intensity: "MAXIMUM" },
      { time: "07:00 - 08:00", className: "LIFT_HEAVY", trainerName: "Kira Sloan", spotsLeft: 5, intensity: "HIGH" },
      { time: "12:00 - 12:45", className: "KINETIC_FLOW", trainerName: "Marcus Reid", spotsLeft: 15, intensity: "MODERATE" },
      { time: "17:30 - 18:15", className: "METCON_9", trainerName: "Alex Vance", spotsLeft: 0, intensity: "MAXIMUM" },
      { time: "18:30 - 19:30", className: "LIFT_HEAVY", trainerName: "Kira Sloan", spotsLeft: 3, intensity: "HIGH" }
    ]
  },
  {
    day: "Fri",
    sessions: [
      { time: "06:00 - 06:45", className: "METCON_9", trainerName: "Alex Vance", spotsLeft: 3, intensity: "MAXIMUM" },
      { time: "07:00 - 08:00", className: "LIFT_HEAVY", trainerName: "Kira Sloan", spotsLeft: 7, intensity: "HIGH" },
      { time: "08:30 - 09:15", className: "KINETIC_FLOW", trainerName: "Marcus Reid", spotsLeft: 10, intensity: "MODERATE" },
      { time: "17:30 - 18:20", className: "ROW_SPRINT", trainerName: "Alex Vance", spotsLeft: 5, intensity: "MAXIMUM" }
    ]
  },
  {
    day: "Sat",
    sessions: [
      { time: "08:00 - 09:00", className: "LIFT_HEAVY", trainerName: "Kira Sloan", spotsLeft: 2, intensity: "HIGH" },
      { time: "09:15 - 10:00", className: "METCON_9", trainerName: "Alex Vance", spotsLeft: 0, intensity: "MAXIMUM" },
      { time: "10:15 - 11:00", className: "KINETIC_FLOW", trainerName: "Marcus Reid", spotsLeft: 14, intensity: "MODERATE" }
    ]
  }
];
