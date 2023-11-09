import React from "react";
import { TeamCard } from "..";
import { TeamPoints } from "../../types";

interface DashboardProps {
  points: TeamPoints;
}

export const Dashboard = ({ points }: DashboardProps): React.ReactElement => {
  return (
    <>
      <div className="font-bold text-2xl text-center p-4 pt-8">
        Game Dashboard
      </div>
      <div className="score flex flex-row p-4 w-full gap-4 text-white items-center h-48">
        <TeamCard teamName="red" points={points.red} />
        <TeamCard teamName="green" points={points.green} />
        <TeamCard teamName="blue" points={points.blue} />
      </div>
    </>
  );
};
