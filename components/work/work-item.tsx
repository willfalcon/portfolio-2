"use client";

import { useState } from "react";
import LayerTabs from "./layer-tabs";
import WorkLayer from "./work-layer";
import type { WorkItem } from "@/content/types";
import { indexPad } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { cx } from "class-variance-authority";
import { useWorkMode, WorkMode } from "./mode-context";

interface WorkItemProps extends WorkItem {
  index: number;
  tint: "green" | "rose" | "blue";
  aspect?: "portrait" | "landscape";
  eager?: boolean;
}

export function WorkItem({
  title,
  lead,
  link,
  stack,
  year,
  layers,
  tint,
  index,
  aspect = "landscape",
  eager = false,
}: WorkItemProps) {
  const [activeLayer, setActiveLayer] = useState(layers[0].id);
  const activeIndex = layers.findIndex((layer) => layer.id === activeLayer);
  const { mode } = useWorkMode();
  const isStackMode = mode === WorkMode.Stack;

  return (
    <div
      className="pb-18 border-b border-line pt-16"
      style={{ "--tint": `var(--color-tint-${tint})` } as React.CSSProperties}
    >
      <div className="md:flex items-center gap-2 space-y-3">
        <div className="shrink">
          <span className="font-mono text-sm text-(--tint) mr-4">
            {indexPad(index)}
          </span>
          <h3 className="inline font-display text-4xl md:text-5xl tracking-tight text-pretty">
            {title}
          </h3>
        </div>
        <div className="flex-1 flex gap-2 md:justify-end">
          {stack.map((tech, index) => (
            <span
              key={tech}
              className="font-mono text-sm text-ink-muted whitespace-nowrap"
            >
              {tech}
              {index < stack.length - 1 && " • "}
            </span>
          ))}
          <span className="font-mono text-sm text-ink-muted whitespace-nowrap">
            - {year}
          </span>
        </div>
      </div>
      <p className="text-lg mt-4 mb-8 text-ink-muted leading-relaxed">{lead}</p>

      <div
        className={cx(
          "bg-surface rounded-3xl mb-4 overflow-hidden",
          // Wide cards leave empty space in a full-height stage on phones.
          aspect === "portrait" ? "h-130" : "h-100 md:h-130",
        )}
      >
        <div
          className={cx(
            "relative h-full w-full perspective-[1800px] transform-3d transition-transform pointer-events-none",
            isStackMode &&
              "rotate-x-55 -rotate-z-36 translate-x-[-3%] translate-y-[-4%]",
          )}
        >
          {layers.map((layer, index) => {
            const isActive = layer.id === activeLayer;
            return (
              <WorkLayer
                key={layer.id}
                {...layer}
                index={index}
                activeIndex={activeIndex}
                active={isActive}
                onClick={() => setActiveLayer(layer.id)}
                aspect={aspect}
                eager={eager && index === 0}
              />
            );
          })}
        </div>
      </div>

      <div className="md:flex gap-8 space-y-4 md:space-y-0">
        <LayerTabs
          layers={layers}
          activeLayer={activeLayer}
          setActiveLayer={setActiveLayer}
          className="shrink-0 flex-3/5"
        />
        <div className="flex-2/5 space-y-3">
          <div className="grid">
            {layers.map((layer) => {
              const isActive = layer.id === activeLayer;
              return (
                <p
                  key={layer.id}
                  aria-hidden={!isActive}
                  className={cx(
                    "col-start-1 row-start-1 text-ink-muted",
                    !isActive && "invisible",
                  )}
                >
                  {layer.description}
                </p>
              );
            })}
          </div>
          <a
            href={link}
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the site
            <ArrowRight className="size-4 text-(--tint)" />
          </a>
        </div>
      </div>
    </div>
  );
}
