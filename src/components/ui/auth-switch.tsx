import { cn } from "@/lib/utils";
import { useState } from "react";

const AuthSwitch = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("flex flex-col items-center gap-4 p-4 rounded-lg bg-white shadow-sm border border-neutral-100")}>
      <h1 className="text-2xl font-bold mb-2">Component Example</h1>
      <h2 className="text-xl font-semibold">{count}</h2>
      <div className="flex gap-2">
        <button 
          className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
          onClick={() => setCount((prev) => prev - 1)}
        >-</button>
        <button 
          className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 rounded-md transition-colors"
          onClick={() => setCount((prev) => prev + 1)}
        >+</button>
      </div>
    </div>
  );
};

export default AuthSwitch;
// For the requested Component export
export const Component = AuthSwitch;
