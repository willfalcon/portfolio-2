"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { Component, useLayoutEffect, useSyncExternalStore } from "react";

import {
  APPEARANCE_KEY,
  type Appearance,
  applyAppearance,
  readAppearance,
} from "./appearance";

const CHANGE_EVENT = "appearancechange";

function subscribe(onChange: () => void) {
  // Another tab changed the setting.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== APPEARANCE_KEY) return;
    applyAppearance(readAppearance());
    onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function setAppearance(appearance: Appearance) {
  try {
    localStorage.setItem(APPEARANCE_KEY, appearance);
  } catch {}
  applyAppearance(appearance);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

const appearanceOptions: {
  value: Appearance;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "light",
    label: "Light",
    icon: <Sun className="size-4" aria-hidden />,
  },
  {
    value: "dark",
    label: "Dark",
    icon: <Moon className="size-4" aria-hidden />,
  },
  {
    value: "system",
    label: "System",
    icon: <Monitor className="size-4" aria-hidden />,
  },
];

export default function AppearanceToggle() {
  // null on the server, where localStorage doesn't exist, so no option is checked until hydration.
  const appearance = useSyncExternalStore(
    subscribe,
    readAppearance,
    () => null,
  );

  // Strict Mode's dev remount resets <html> to its JSX attributes, dropping the class the
  // inline script set. Re-apply it before paint. This is a no-op in production.
  useLayoutEffect(() => {
    applyAppearance(readAppearance());
  }, []);

  return (
    <fieldset className="inline-flex bg-surface-raised rounded-full border border-line p-[5px]">
      <legend className="sr-only">Appearance</legend>
      {appearanceOptions.map((option) => (
        <label
          key={option.value}
          className="w-11 h-9 flex items-center justify-center text-ink-muted rounded-full transition-colors 
          has-checked:bg-ink has-checked:text-on-ink 
          has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-ink
          cursor-pointer"
        >
          <input
            type="radio"
            name="appearance"
            value={option.value}
            checked={appearance === option.value}
            onChange={() => setAppearance(option.value)}
            className="sr-only"
          />
          {option.icon}
          <span className="sr-only">{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
