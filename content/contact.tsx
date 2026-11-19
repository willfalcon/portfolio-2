import { button } from "@/components/button";
import CopyButton from "@/components/copy-button";
import LocalTime from "@/components/local-time";
import { Download, ExternalLink, Mail } from "lucide-react";

export const contact = [
  {
    label: "Email",
    value: "willkhawks@gmail.com",
    button: (
      <div className="flex gap-2">
        <CopyButton value="willkhawks@gmail.com" />
        <a
          href="mailto:willkhawks@gmail.com"
          className={button({ intent: "secondary", size: "small" })}
        >
          <Mail className="size-4" /> Email me
        </a>
      </div>
    ),
  },
  {
    label: "Resume",
    value: "Will-Hawks-Resume.pdf",
    button: (
      <a
        href="/Will-Hawks-Resume.pdf"
        download
        className={button({ intent: "secondary", size: "small" })}
      >
        <Download className="size-4" /> PDF
      </a>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/will-hawks",
    button: (
      <a
        href="https://linkedin.com/in/will-hawks"
        className={button({ intent: "secondary", size: "small" })}
      >
        <ExternalLink className="size-4" />
      </a>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/willhawks",
    button: (
      <a
        href="https://github.com/willhawks"
        className={button({ intent: "secondary", size: "small" })}
      >
        <ExternalLink className="size-4" />
      </a>
    ),
  },
  {
    label: "Based in",
    value: "Mississippi, US",
    button: <LocalTime />,
  },
];
