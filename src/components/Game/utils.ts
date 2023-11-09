import { Payload, Score, TeamName } from "../../types";

export const initialTeamPoints = {
  red: 0,
  green: 0,
  blue: 0,
};

export const getTeamPoints = (score: Score, teamName: TeamName): number => {
  let points = 0;

  Object.keys(score).map((host: string) => {
    points += score[host][teamName];
  });

  return points;
};

export const setPointsFromScore = (score: Score) => {
  return {
    red: getTeamPoints(score, "red"),
    green: getTeamPoints(score, "green"),
    blue: getTeamPoints(score, "blue"),
  };
};

export const getHostPointsFromPayload = (message: string): Score | null => {
  const found = message.match(
    /^Chicken\s([0-9]+):\s([0-9]+),([0-9]+),([0-9]+)$/
  );

  if (!found) return null;

  return {
    [found[1]]: {
      red: Number(found[2]),
      green: Number(found[3]),
      blue: Number(found[4]),
    },
  };
};

export const formatPayload = (payload: Payload): string => {
  const date = new Date();
  return `[${date.toLocaleString("es-CO")}][${payload.topic}]: ${
    payload.message
  }`;
};
