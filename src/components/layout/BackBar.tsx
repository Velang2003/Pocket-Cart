// Mobile only — Back Bar shown on inner pages
interface BackBarProps {
  title: string;
  onBack?: () => void;
  rightLabel?: string;
  onRight?: () => void;
}

function BackBar({ title = "Title", onBack, rightLabel, onRight }: BackBarProps) {
  return (
    <header className="backBar">
      <button className="backBar__back" onClick={onBack} aria-label="Go back">
        ‹
      </button>
      <h1 className="backBar__title">{title}</h1>
      {rightLabel && (
        <button className="backBar__right" onClick={onRight}>
          {rightLabel}
        </button>
      )}
    </header>
  );
}

export default BackBar;
