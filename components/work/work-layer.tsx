import { type WorkLayer } from "@/content/types";
import { cx } from "class-variance-authority";

interface WorkLayerProps extends WorkLayer {
  index: number;
  active: boolean;
  onClick: () => void;
}

function getLayerPosition(index: number) {
  const positions = [
    { left: "2.5%", top: "24px" },
    { left: "51.5%", top: "24px" },
    { left: "2.5%", top: "266px" },
    { left: "51.5%", top: "266px" },
  ];
  return positions[index % positions.length];
}

export default function WorkLayer({
  image,
  imageAlt,
  title,
  index,
  active,
  onClick,
}: WorkLayerProps) {
  return (
    <button
      className={cx(
        `block absolute inset-0 h-57.5 w-[46%] rounded-2xl cursor-pointer`,
        active ? "border border-tint-green" : "",
      )}
      style={getLayerPosition(index)}
      onClick={onClick}
    >
      <img
        src={image}
        alt={imageAlt}
        className="rounded-2xl object-cover w-full h-full"
      />
      <div className="absolute w-full bottom-0 left-0 bg-surface/90 px-4 py-2 rounded-bl-2xl rounded-br-2xl flex items-center justify-between">
        <span className="font-mono text-ink-muted text-xs">
          {String(index + 1).padStart(2, "0")} {title}
        </span>
        <span
          className={cx(
            "block size-2 rounded-full",
            active ? "bg-tint-green" : "bg-ink-subtle",
          )}
        />
      </div>
    </button>
  );
}
