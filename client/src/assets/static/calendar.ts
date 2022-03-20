type Week = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

interface DayOfWeek {
  label: Week;
}

export const dayOfWeek: DayOfWeek[] = [
  { label: "sun" },
  { label: "mon" },
  { label: "tue" },
  { label: "wed" },
  { label: "thu" },
  { label: "fri" },
  { label: "sat" },
];
