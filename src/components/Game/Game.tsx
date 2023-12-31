import React, { useEffect, useState } from "react";

import {
  formatPayload,
  getHostPointsFromPayload,
  initialTeamPoints,
  setPointsFromScore,
} from "./utils";
import { Score, TeamPoints } from "../../types";
import { Actions, Console, Dashboard } from "..";
import useWebSocket from "react-use-websocket";

const PORT = 8001;
const HOST = "localhost";

export const Game = (): React.ReactElement => {
  const [content, setContent] = useState<string[]>([""]);
  const [points, setPoints] = useState<TeamPoints>(initialTeamPoints);
  const [score, setScore] = useState<Score>({} as Score);

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `ws://${HOST}:${PORT}`,
    {
      onOpen: () => {
        console.log("Opened");
      },
      onClose: () => {
        console.log("Closed");
      },
      shouldReconnect: () => true,
      reconnectAttempts: 120,
      reconnectInterval: (attemptNumber) => {
        const interval = Math.min(Math.pow(2, attemptNumber) * 1000, 60000);
        console.log(`Trying to reconnect in: ${interval / 1000} seconds`);
        return interval;
      },
    }
  );

  useEffect(() => {
    if (lastMessage) {
      setContent((prevState) => {
        return [...prevState, formatPayload(lastMessage)];
      });

      const hostPoints = getHostPointsFromPayload(lastMessage.data);
      if (hostPoints) {
        setScore((prevState) => {
          return { ...prevState, ...hostPoints };
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage]);

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

  const handleResetGame = () => {
    setScore({});
    setContent([""]);
    sendMessage("reset");
  };

  return (
    <div className="Game flex flex-col gap-6">
      <Dashboard points={points} readyState={readyState} />
      <Console content={content} />
      <Actions clear={handleClearConsole} reset={handleResetGame} />
    </div>
  );
};
