import { mdhs } from "@/content/mdhs";
import { m2l } from "@/content/m2l";
import { skwahdle } from "@/content/skwahdle";
import { WorkItem } from "./work-item";

export default function Work() {
  return (
    <section id="work" className="px-3 py-16">
      <h2 className="font-mono text-sm text-ink-muted">Selected work</h2>

      <hr className="my-4 border-line" />

      <WorkItem {...mdhs} index={0} />
      <WorkItem {...m2l} index={1} />
      <WorkItem {...skwahdle} index={2} />
    </section>
  );
}
