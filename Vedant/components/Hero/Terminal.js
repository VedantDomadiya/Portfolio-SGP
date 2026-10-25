import { useEffect, useState } from "react";
import { TERMINAL_LINES } from "../../constants";

// Prints one command/output pair at a time, then holds. Reduced-motion users get everything at once.
const Terminal = () => {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(TERMINAL_LINES.length);
      return;
    }
    const timers = TERMINAL_LINES.map((_, index) =>
      setTimeout(() => setVisible(index + 1), 2400 + index * 1100)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="w-full max-w-lg rounded-2xl bg-gray-dark-5/90 font-mono text-sm shadow-2xl outline outline-1 outline-gray-dark-1 backdrop-blur"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-gray-dark-1 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red" />
        <span className="h-3 w-3 rounded-full bg-indigo-light" />
        <span className="h-3 w-3 rounded-full bg-green" />
        <span className="ml-3 text-xs text-gray-light-4">vedant@cloud: ~</span>
      </div>
      <div className="min-h-[19rem] space-y-3 px-5 py-4">
        {TERMINAL_LINES.slice(0, visible).map(({ command, output }) => (
          <div key={command}>
            <p className="text-white">
              <span className="text-indigo-light">$ </span>
              {command}
            </p>
            <p className="mt-1 text-gray-light-3">{output}</p>
          </div>
        ))}
        <span className="inline-block h-4 w-2 animate-pulse bg-gray-light-3 align-middle" />
      </div>
    </div>
  );
};

export default Terminal;
