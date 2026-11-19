export interface SegmentedControlProps {
  title: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string; icon: React.ReactNode }[];
  showLabel?: boolean;
}

export default function SegmentedControl({
  title,
  name,
  value,
  onChange,
  options,
  showLabel = false,
}: SegmentedControlProps) {
  return (
    <fieldset className="inline-flex bg-surface-raised rounded-full border border-line">
      <legend className="sr-only">{title}</legend>
      {options.map((option) => (
        <label
          key={option.value}
          className="px-3.5 py-2.5 flex items-center justify-center gap-2 text-ink-muted rounded-full transition-colors 
          has-checked:bg-ink has-checked:text-on-ink 
          has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-ink
          cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="sr-only"
          />
          {option.icon}
          <span className={showLabel ? "" : "sr-only"}>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
