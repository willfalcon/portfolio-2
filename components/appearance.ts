export type Appearance = "light" | "dark" | "system";

export const APPEARANCE_KEY = "appearance";
export const DEFAULT_APPEARANCE: Appearance = "dark";

// Inlined into <head> by the root layout. It runs while the HTML is parsed, so the stored
// appearance is on <html> before the first paint and there is no flash of the wrong theme.
export const appearanceScript = `(function(){try{var a=localStorage.getItem("${APPEARANCE_KEY}");if(a!=="light"&&a!=="dark"&&a!=="system")a="${DEFAULT_APPEARANCE}";if(a!=="system")document.documentElement.classList.add(a)}catch(e){}})()`;

export function readAppearance(): Appearance {
  try {
    const stored = localStorage.getItem(APPEARANCE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {}
  return DEFAULT_APPEARANCE;
}

// "light" and "dark" set the matching class on <html>; "system" leaves it bare.
export function applyAppearance(appearance: Appearance) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  if (appearance !== "system") root.classList.add(appearance);
}
