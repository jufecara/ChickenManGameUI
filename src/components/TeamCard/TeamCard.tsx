import classNames from "classnames";

type TeamsColor = "red" | "green" | "blue";

interface TeamCardProps {
  teamName: TeamsColor;
  points: number;
}

export const TeamCard = ({
  teamName,
  points = 0,
}: TeamCardProps): React.ReactElement => {
  const classes = classNames(
    "basis-1/3 h-full",
    "rounded-md shadow-md",
    "text-center",
    "flex flex-col justify-center gap-1",
    { "bg-red-600": teamName === "red" },
    { "bg-green-600": teamName === "green" },
    { "bg-blue-600": teamName === "blue" }
  );
  return (
    <div className={classes}>
      <div className="text-xl font-bold">{teamName}</div>
      <div className="text-gray-300">{points}</div>
    </div>
  );
};
