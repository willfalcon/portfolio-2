"use client";

import { useState } from "react";
import LayerTabs from "./layer-tabs";
import WorkLayer from "./work-layer";
import type { WorkItem } from "@/content/types";
import { indexPad } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface WorkItemProps extends WorkItem {
  index: number;
}

export function WorkItem({
  title,
  lead,
  link,
  stack,
  year,
  layers,
  index,
}: WorkItemProps) {
  const [activeLayer, setActiveLayer] = useState(layers[0].id);

  return (
    <div className="pb-18 border-b border-line pt-16">
      <div className="flex items-center gap-2">
        <div>
          <span className="font-mono text-sm text-tint-green">
            {indexPad(index)}
          </span>
        </div>
        <div className="shrink">
          <h3 className="font-display text-5xl tracking-tight">{title}</h3>
        </div>
        <div className="flex-1 flex gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-sm text-ink-muted whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
          <span className="font-mono text-sm text-ink-muted whitespace-nowrap">
            - {year}
          </span>
        </div>
      </div>
      <p className="font-mono text-sm mt-4 mb-8 text-ink-muted leading-relaxed">
        {lead}
      </p>

      <div className="h-130 bg-surface rounded-3xl relative mb-4">
        {layers.map((layer, index) => {
          const isActive = layer.id === activeLayer;
          return (
            <WorkLayer
              key={layer.id}
              {...layer}
              index={index}
              active={isActive}
              onClick={() => setActiveLayer(layer.id)}
            />
          );
        })}
      </div>

      <div className="flex gap-8">
        <LayerTabs
          layers={layers}
          activeLayer={activeLayer}
          setActiveLayer={setActiveLayer}
          className="shrink-0 flex-3/5"
        />
        <div className="flex-2/5 space-y-3">
          <p className="text-ink-muted">
            {layers.find((layer) => layer.id === activeLayer)?.description}
          </p>
          <a href={link} className="flex items-center gap-2">
            Visit the site
            <ArrowRight className="size-4 text-tint-green" />
          </a>
        </div>
      </div>
    </div>
  );
}
