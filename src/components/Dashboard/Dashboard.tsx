import React from "react";
import { TeamCard } from "..";
import { TeamPoints } from "../../types";

interface DashboardProps {
  connectionStatus: string;
  points: TeamPoints;
}

export const Dashboard = ({
  connectionStatus,
  points,
}: DashboardProps): React.ReactElement => {
  return (
    <>
      <div className="font-bold text-2xl text-center p-4 pt-8 flex flex-row">
        <div className="basis-3/4 text-center">Game Dashboard</div>
        <div className="basis-1/4 text-right font-normal text-lg">
          {connectionStatus}
        </div>
      </div>
      <div className="score flex flex-row p-4 w-full gap-4 text-white items-center h-48">
        <TeamCard teamName="red" points={points.red} />
        <TeamCard teamName="green" points={points.green} />
        <TeamCard teamName="blue" points={points.blue} />
      </div>
    </>
  );
};
