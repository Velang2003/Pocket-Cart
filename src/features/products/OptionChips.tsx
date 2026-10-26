interface OptionChipsProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

function OptionChips({
  label,
  options = ["Black", "White", "Blue"],
  value,
  onChange,
}: OptionChipsProps) {
  return (
    <div className="optionChips">
      {label && <p className="optionChips__label">{label}</p>}
      <div className="optionChips__list">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`optionChip${value === opt ? " optionChip--selected" : ""}`}
            onClick={() => onChange?.(opt)}
            aria-pressed={value === opt}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default OptionChips;

