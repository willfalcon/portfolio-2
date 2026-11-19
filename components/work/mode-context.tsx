"use client";

import { createContext, useContext, useState } from "react";

const ModeContext = createContext<{
  mode: "grid" | "stack";
  setMode: (mode: "grid" | "stack") => void;
}>({ mode: "grid", setMode: () => {} });

export function WorkModeContext({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"grid" | "stack">("stack");

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useWorkMode() {
  return useContext(ModeContext);
}
