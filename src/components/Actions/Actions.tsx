import React from "react";

interface ActionsProps {
  clear: () => void;
  reset: () => void;
}

export const Actions = ({ clear, reset }: ActionsProps): React.ReactElement => {
  return (
    <div className="Actions">
      <div className="font-bold text-2xl p-4">Actions</div>
      <div className="w-full p-2 flex flex-row gap-2">
        <button
          className="py-2 px-4 bg-endava-orange-400 rounded-lg shadow-sm text-center font-600 text-white hover:bg-endava-orange-600"
          onClick={clear}
        >
          Clear console
        </button>
        <button
          className="py-2 px-4 bg-endava-orange-400 rounded-lg shadow-sm text-center font-600 text-white hover:bg-endava-orange-600"
          onClick={reset}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};
