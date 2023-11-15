import React from "react";
import { ReadyState } from "react-use-websocket";

interface StatusBadgeProps {
  readyState: ReadyState;
}

const getStatusText = (readyState: ReadyState) =>
  ({
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState]);

const getStatusColor = (readyState: ReadyState) =>
  ({
    [ReadyState.CONNECTING]: "bg-blue-500",
    [ReadyState.OPEN]: "bg-green-500",
    [ReadyState.CLOSING]: "bg-red-500",
    [ReadyState.CLOSED]: "bg-red-900",
    [ReadyState.UNINSTANTIATED]: "bg-black-500",
  }[readyState]);

export const StatusBadge = ({
  readyState,
}: StatusBadgeProps): React.ReactElement => {
  return (
    <div className="inline-flex items-center px-5 text-sm font-medium text-center rounded-lg  focus:ring-4 focus:outline-none    ">
      {getStatusText(readyState)}
      <span
        className={`inline-flex items-center justify-center w-4 h-4 ms-2 ${getStatusColor(
          readyState
        )} rounded-full`}
      ></span>
    </div>
  );
};
