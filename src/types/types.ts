export type TeamName = "red" | "green" | "blue";
export type TeamPoints = Record<TeamName, number>;
export type Score = Record<string, TeamPoints>;

export type Payload = {
  topic: string;
  message: string;
};
