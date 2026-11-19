import { Download, Mail } from "lucide-react";
import Button from "./button";

export default function Hero() {
  return (
    <section className="py-12">
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-block size-2 rounded-full bg-ink-muted" />
        <span className="text-ink-muted text-md font-mono">
          Frontend engineer &middot; Mississippi, US
        </span>
      </div>
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light tracking-tight">
        Will Hawks
      </h1>
      <p className="text-xl text-ink-muted w-xl max-w-full leading-relaxed mt-8">
        I build interfaces that feel fast and look effortless — from streaming
        data visualizations on mobile to large public-facing websites.
      </p>

      <div className="flex gap-4 mt-10">
        <Button>
          <Mail className="size-4" /> Email me
        </Button>
        <Button intent="secondary">
          <Download className="size-4" /> Resume
        </Button>
      </div>
    </section>
  );
}
