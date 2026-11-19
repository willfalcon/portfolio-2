"use client";

import { createContext, useContext, useState } from "react";

export enum WorkMode {
  Grid = "grid",
  Stack = "stack",
}

const DEFAULT_MODE = WorkMode.Stack;

const ModeContext = createContext<{
  mode: WorkMode;
  setMode: (mode: WorkMode) => void;
}>({ mode: DEFAULT_MODE, setMode: () => {} });

export function WorkModeContext({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<WorkMode>(DEFAULT_MODE);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useWorkMode() {
  return useContext(ModeContext);
}
