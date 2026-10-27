import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: string;
}

function EmptyState({
  title = "Nothing here yet",
  message = "There's nothing to show right now.",
  actionLabel,
  onAction,
  icon = "🛒",
}: EmptyStateProps) {
  return (
    <div className="emptyState">
      <span className="emptyState__icon">{icon}</span>
      <h2 className="emptyState__title">{title}</h2>
      <p className="emptyState__message">{message}</p>
      {actionLabel && onAction && (
        <Button variant="primary" label={actionLabel} onClick={onAction} />
      )}
    </div>
  );
}

export default EmptyState;
