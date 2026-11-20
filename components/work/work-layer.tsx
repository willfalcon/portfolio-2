"use client";

import { cx } from "class-variance-authority";
import Image from "next/image";

import { type WorkLayer } from "@/content/types";
import { useWorkMode, WorkMode } from "./mode-context";
import { indexPad } from "@/lib/utils";

interface WorkLayerProps extends WorkLayer {
  index: number;
  activeIndex: number;
  active: boolean;
  onClick: () => void;
  aspect?: "portrait" | "landscape";
  eager?: boolean;
}

interface Position {
  left: string;
  top: string;
  width: string;
  transform?: string;
}

function toVars(mobile: Position, desktop: Position = mobile) {
  return {
    "--left": mobile.left,
    "--top": mobile.top,
    "--w": mobile.width,
    "--tf": mobile.transform ?? "none",
    "--md-left": desktop.left,
    "--md-top": desktop.top,
    "--md-w": desktop.width,
    "--md-tf": desktop.transform ?? "none",
  } as React.CSSProperties;
}

function getGridPosition(index: number, portrait: boolean = false) {
  if (portrait) {
    // Phones: 2x2, 30% wide with equal margins. Wider: one row of four.
    const mobile = [
      { left: "17%", top: "19px" },
      { left: "53%", top: "19px" },
      { left: "17%", top: "267px" },
      { left: "53%", top: "267px" },
    ];
    const desktop = ["5.5%", "29.5%", "53.5%", "77.5%"];
    const i = index % desktop.length;
    return toVars(
      { ...mobile[i], width: "30%" },
      {
        left: desktop[i],
        top: "50%",
        width: "18%",
        transform: "translateY(-50%)",
      },
    );
  }
  // Phones use a shorter stage, so the rows move to stay vertically centered.
  const mobile = ["90px", "90px", "205px", "205px"];
  const desktop = ["24px", "24px", "266px", "266px"];
  const i = index % desktop.length;
  const left = i % 2 === 0 ? "2.5%" : "51.5%";
  return toVars(
    { left, top: mobile[i], width: "46%" },
    { left, top: desktop[i], width: "46%" },
  );
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
  const depth = `translateZ(${z}px) scale(${active ? 1.05 : 1})`;
  if (portrait) {
    const transform = `translateY(-50%) ${depth}`;
    return toVars(
      { left: "30%", top: "50%", width: "40%", transform },
      { left: "41%", top: "50%", width: "18%", transform },
    );
  }
  return toVars(
    {
      left: "15%",
      top: "50%",
      width: "70%",
      transform: `translateY(-50%) ${depth}`,
    },
    { left: "27%", top: "140px", width: "46%", transform: depth },
  );
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
  eager = false,
}: WorkLayerProps) {
  const { mode } = useWorkMode();
  const stack = mode === WorkMode.Stack;
  const portrait = aspect === "portrait";
  // Small cards on phones drop the title and tighten padding and corners.
  // Wide cards in stack mode are big enough to keep the full style.
  const compact = portrait || !stack;
  const corners = compact ? "rounded-lg md:rounded-2xl" : "rounded-2xl";
  return (
    <div
      className={cx(
        "transition-all",
        "absolute inset-0 border cursor-pointer pointer-events-auto",
        corners,
        "left-(--left) top-(--top) w-(--w) [transform:var(--tf)]",
        "md:left-(--md-left) md:top-(--md-top) md:w-(--md-w) md:[transform:var(--md-tf)]",
        portrait ? "aspect-9/19.5" : "aspect-16/10 md:aspect-auto md:h-57.5",
        active ? `border-(--tint)` : "border-surface",
      )}
      style={
        stack
          ? getStackPosition(index, activeIndex, portrait)
          : getGridPosition(index, portrait)
      }
      onClick={onClick}
    >
      <Image
        src={image}
        alt={imageAlt}
        className={cx("object-cover w-full h-full select-none", corners)}
        draggable={false}
        fill
        sizes={
          portrait
            ? "(min-width: 1024px) 165px, (min-width: 768px) 125px, 40vw"
            : "(min-width: 1024px) 420px, (min-width: 768px) 310px, 70vw"
        }
        loading={eager ? "eager" : undefined}
      />
      <div
        className={cx(
          "absolute w-full bottom-0 left-0 bg-surface/90 flex items-center justify-between",
          compact
            ? "px-2 py-1.5 md:px-4 md:py-2 rounded-b-lg md:rounded-b-2xl"
            : "px-4 py-2 rounded-b-2xl",
        )}
      >
        <span className="font-mono text-ink-muted text-xs">
          {indexPad(index)}{" "}
          <span className={cx(compact && "hidden md:inline")}>{title}</span>
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
