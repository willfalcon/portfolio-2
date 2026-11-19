"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import Button from "@/components/button";

export default function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard unavailable (insecure context or denied permission)
    }
  };

  return (
    <Button
      intent="secondary"
      size="small"
      onClick={copy}
      aria-label={copied ? "Copied" : `Copy ${value}`}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </Button>
  );
}
