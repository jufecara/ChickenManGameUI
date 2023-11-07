import React, { useEffect, useState } from "react";
import useMqtt from "../../useMqtt";
import { TeamCard } from "../TeamCard";

export const Game = (): React.ReactElement => {
  const { mqttSubscribe, payload, isConnected } = useMqtt();
  const [content, setContent] = useState<string[]>(["[topic]: Content"]);

  useEffect(() => {
    if (isConnected) {
      mqttSubscribe("dev-week");
    }
  }, [mqttSubscribe, isConnected]);

  useEffect(() => {
    setContent((prevState) => {
      if (!payload) return prevState;

      return [...prevState, `[${payload.topic}]: ${payload.message}`];
    });
  }, [payload]);

  return (
    <>
      <div className="font-bold text-2xl text-center p-4">Game Dashboard</div>
      <div className="score flex flex-row p-2 w-full gap-2 text-white items-center h-48">
        <TeamCard teamName="red" points={0} />
        <TeamCard teamName="green" points={0} />
        <TeamCard teamName="blue" points={0} />
      </div>
      <div className="w-full p-2">
        <div className="rounded-md border-2 h-96 p-4">
          <div className="h-full border-dashed border-2 border-gray-600 overflow-auto snap-y">
            {content.map((text) => (
              <p className="mx-2 snap-end">{text}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
