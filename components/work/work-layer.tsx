"use client";

import { cx } from "class-variance-authority";

import { type WorkLayer } from "@/content/types";
import { useWorkMode } from "./mode-context";
import { indexPad } from "@/lib/utils";

interface WorkLayerProps extends WorkLayer {
  index: number;
  activeIndex: number;
  active: boolean;
  onClick: () => void;
  aspect?: "portrait" | "landscape";
}

function getGridPosition(index: number, portrait: boolean = false) {
  const positions = portrait
    ? [
        { left: "5.5%", top: "50%", transform: "translateY(-50%)" },
        { left: "29.5%", top: "50%", transform: "translateY(-50%)" },
        { left: "53.5%", top: "50%", transform: "translateY(-50%)" },
        { left: "77.5%", top: "50%", transform: "translateY(-50%)" },
      ]
    : [
        { left: "2.5%", top: "24px" },
        { left: "51.5%", top: "24px" },
        { left: "2.5%", top: "266px" },
        { left: "51.5%", top: "266px" },
      ];
  return positions[index % positions.length];
}

const GAP = 60;
const ACTIVE_LIFT = GAP * 1.5;
function getStackPosition(
  index: number,
  activeIndex: number,
  portrait: boolean = false,
) {
  // Inactive layers keep their relative order, evenly spaced below z=0;
  // the active layer floats above them by slightly more than one gap.
  const rank = index < activeIndex ? index : index - 1;
  const z = index === activeIndex ? ACTIVE_LIFT : -rank * GAP;
  const active = index === activeIndex;
  return {
    left: portrait ? "41%" : "27%",
    top: portrait ? "50%" : "140px",
    transform: `${portrait ? "translateY(-50%) " : ""}translateZ(${z}px) scale(${active ? 1.05 : 1})`,
  };
}

export default function WorkLayer({
  image,
  imageAlt,
  title,
  index,
  activeIndex,
  active,
  onClick,
  aspect = "landscape",
}: WorkLayerProps) {
  const { mode } = useWorkMode();
  const stack = mode === "stack";
  const portrait = aspect === "portrait";
  return (
    <div
      className={cx(
        "transition-all",
        `absolute inset-0 rounded-2xl border cursor-pointer pointer-events-auto`,
        portrait ? "w-[18%] aspect-9/19.5" : "w-[46%] h-57.5",
        active ? `border-(--tint)` : "border-surface",
      )}
      style={
        stack
          ? getStackPosition(index, activeIndex, portrait)
          : getGridPosition(index, portrait)
      }
      onClick={onClick}
    >
      <img
        src={image}
        alt={imageAlt}
        className="rounded-2xl object-cover w-full h-full select-none"
        draggable={false}
      />
      <div className="absolute w-full bottom-0 left-0 bg-surface/90 px-4 py-2 rounded-bl-2xl rounded-br-2xl flex items-center justify-between">
        <span className="font-mono text-ink-muted text-xs">
          {indexPad(index)} {title}
        </span>
        <span
          className={cx(
            "block size-2 rounded-full",
            active ? `bg-(--tint)` : "bg-ink-subtle",
          )}
        />
      </div>
    </div>
  );
}
