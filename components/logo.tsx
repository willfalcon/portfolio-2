// The name with its mark (three dots and a square, in the accent colour). In the footer the mark sits in
// the line at the text's size.
export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <div className="flex size-9 rounded-full bg-ink items-center justify-center">
        <span className="text-on-ink font-display text-lg">W</span>
      </div>
      <span className="font-medium">Will Hawks</span>
    </a>
  );
}
