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
    "h-full mx-auto",
    "px-24",
    "rounded-md shadow-md",
    "text-center",
    "flex flex-col justify-center gap-1",
    { "bg-red-600": teamName === "red" },
    { "bg-green-600": teamName === "green" },
    { "bg-blue-600": teamName === "blue" }
  );
  return (
    <div className={classes}>
      <div className="text-3xl font-bold">{teamName}</div>
      <div className="text-xl text-gray-300">{points}</div>
    </div>
  );
};
