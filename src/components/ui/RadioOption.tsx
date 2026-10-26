interface RadioOptionProps {
  title: string;
  description?: string;
  selected?: boolean;
  onSelect?: () => void;
}

function RadioOption({
  title = "Option title",
  description = "Option description",
  selected = false,
  onSelect,
}: RadioOptionProps) {
  return (
    <div
      className={`radioOption${selected ? " radioOption--selected" : ""}`}
      onClick={onSelect}
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.()}
    >
      <input type="radio" readOnly checked={selected} tabIndex={-1} />
      <div>
        <p className="title">{title}</p>
        {description && <p className="description">{description}</p>}
      </div>
    </div>
  );
}

export default RadioOption;
