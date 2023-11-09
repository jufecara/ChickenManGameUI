import React, { useEffect, useState } from "react";

import {
  formatPayload,
  getHostPointsFromPayload,
  initialTeamPoints,
  setPointsFromScore,
} from "./utils";
import { Score, TeamPoints } from "../../types";
import { Actions, Console, Dashboard } from "..";
import { useMqtt } from "../../hooks";

export const Game = (): React.ReactElement => {
  const { mqttSubscribe, payload, isConnected } = useMqtt();
  const [content, setContent] = useState<string[]>(["[topic]: Content"]);
  const [points, setPoints] = useState<TeamPoints>(initialTeamPoints);
  const [score, setScore] = useState<Score>({} as Score);

  useEffect(() => {
    if (isConnected) {
      mqttSubscribe("dev-week");
    }
  }, [mqttSubscribe, isConnected]);

  useEffect(() => {
    if (payload) {
      setContent((prevState) => {
        return [...prevState, formatPayload(payload)];
      });

      const hostPoints = getHostPointsFromPayload(payload.message);
      if (hostPoints) {
        setScore((prevState) => {
          return { ...prevState, ...hostPoints };
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload]);

  useEffect(() => {
    if (!score) return;

    setPoints((prevState) => {
      if (!score) return prevState;

      return setPointsFromScore(score);
    });
  }, [score]);

  const handleClearConsole = () => {
    setContent([""]);
  };

  return (
    <>
      <Dashboard points={points} />
      <Console content={content} />
      <Actions clear={handleClearConsole} reset={() => ({})} />
    </>
  );
};
