import { experience } from "@/content/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="font-mono text-sm text-ink-muted">Experience</h2>
      <hr className="my-4 border-line" />
      <ul>
        {experience.map((exp, index) => (
          <li
            key={index}
            className="md:flex align-center justify-between border-b border-line py-4"
          >
            <p className="text-lg">
              {exp.company}
              <span className="text-ink-muted"> - {exp.role}</span>
            </p>
            <p className="text-ink-subtle">{exp.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
