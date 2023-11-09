import React, { createRef, useEffect } from "react";

interface ConsoleProps {
  content: string[];
}
export const Console = ({ content }: ConsoleProps): React.ReactElement => {
  const consoleRef = createRef<HTMLDivElement>();

  useEffect(() => {
    consoleRef.current?.scrollIntoView({ behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <>
      <div className="font-bold text-2xl p-4">Console</div>
      <div className="w-full p-2">
        <div className="rounded-md border-2 h-96 p-4 bg-white">
          <div className="h-full border-dashed border-2 border-gray-500 overflow-auto">
            {content.map((text, idx) => (
              <p className="mx-2" key={idx}>
                {text}
              </p>
            ))}
            <div ref={consoleRef} />
          </div>
        </div>
      </div>
    </>
  );
};
