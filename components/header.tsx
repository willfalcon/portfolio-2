import Logo from "./logo";
import AppearanceToggle from "./appearance-toggle";

export default function Header() {
  return (
    <header className="py-4">
      <div className="md:flex items-center justify-between">
        <Logo />
        <nav
          aria-label="Main"
          className="flex gap-6 text-ink-muted text-sm max-md:mb-6 max-md:mt-4"
        >
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <AppearanceToggle />
      </div>
    </header>
  );
}
