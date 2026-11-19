import { mdhs } from "@/content/mdhs";
import { m2l } from "@/content/m2l";
import { skwahdle } from "@/content/skwahdle";
import { WorkItem } from "./work-item";
import { WorkModeContext } from "./mode-context";
import WorkModeToggle from "./mode-toggle";

export default function Work() {
  return (
    <WorkModeContext>
      <section id="work" className="py-16">
        <div className="flex items-center justify-between sticky top-0 bg-bg z-10 py-4">
          <h2 className="font-mono text-sm text-ink-muted">Selected work</h2>
          <WorkModeToggle />
        </div>
        <hr className="my-4 border-line" />

        <WorkItem {...mdhs} index={0} tint="green" />
        <WorkItem {...m2l} index={1} tint="rose" />
        <WorkItem {...skwahdle} index={2} tint="blue" aspect="portrait" />
      </section>
    </WorkModeContext>
  );
}
