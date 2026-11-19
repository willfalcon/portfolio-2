"use client";

import { Layers2, LayoutGrid } from "lucide-react";
import SegmentedControl from "../segmented-control";
import { useWorkMode, WorkMode } from "./mode-context";

export default function WorkModeToggle() {
  const { mode, setMode } = useWorkMode();

  return (
    <SegmentedControl
      title="Work mode"
      name="work-mode"
      value={mode}
      onChange={(value) => setMode(value as WorkMode)}
      options={[
        {
          value: WorkMode.Stack,
          label: "Stack",
          icon: <Layers2 className="size-4" />,
        },
        {
          value: "grid",
          label: "Grid",
          icon: <LayoutGrid className="size-4" />,
        },
      ]}
      showLabel
    />
  );
}
