import { Download, Mail } from "lucide-react";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="py-12 text-ink-subtle text-xs flex items-end justify-between">
      <p>© Will Hawks</p>
      <div className="text-right">
        <p>Designed with help from Claude</p>
        <p>Built by hand</p>
      </div>
    </footer>
  );
}
