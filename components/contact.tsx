import { contact } from "@/content/contact";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="font-mono text-sm text-ink-muted mb-4">Contact</h2>

      <p className="text-4xl md:text-5xl lg:text-6xl tracking-tight space-x-1">
        <span className="font-display">Building something?</span>
        <span className="font-serif italic text-ink-muted">Let's talk.</span>
      </p>

      <p className="text-lg text-ink-muted mb-4 mt-6 md:w-105">
        Email is the fastest way to reach me. Everything else lives here too.
      </p>

      <div>
        {contact.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 first:border-t border-b border-line py-4 items-center"
          >
            <span className="font-mono text-sm text-ink-muted w-20 shrink-0">
              {item.label}
            </span>
            <span className="truncate flex-1">{item.value}</span>
            {item.button}
          </div>
        ))}
      </div>
    </section>
  );
}
