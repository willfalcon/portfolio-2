import type { WorkLayer } from "@/content/types";
import { indexPad } from "@/lib/utils";
import { cx } from "class-variance-authority";

interface LayerTabsProps {
  layers: WorkLayer[];
  activeLayer: string;
  setActiveLayer: (layer: string) => void;
  className?: string;
}

export default function LayerTabs({
  layers,
  activeLayer,
  setActiveLayer,
  className,
}: LayerTabsProps) {
  const isActive = (layerId: string) => activeLayer === layerId;
  return (
    <div className={cx("flex gap-2", className)}>
      {layers.map((layer, index) => (
        <button
          key={layer.id}
          onClick={() => setActiveLayer(layer.id)}
          className={cx(
            "transition-colors flex flex-col flex-1 items-start text-sm",
            isActive(layer.id) ? "text-ink" : "text-ink-muted",
            "border-t-2",
            isActive(layer.id) ? "border-(--tint)" : "border-line",
            "cursor-pointer",
          )}
          aria-pressed={isActive(layer.id)}
        >
          <span className="w-full h-px" />
          <span className="font-mono mt-2">{indexPad(index)}</span>
          <span className="text-left text-pretty block">
            {layer.shortTitle}
          </span>
        </button>
      ))}
    </div>
  );
}
