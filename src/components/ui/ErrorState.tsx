import Button from "./Button";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

function ErrorState({
  message = "Something went wrong. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="emptyState">
      <span className="emptyState__icon">⚠️</span>
      <h2 className="emptyState__title">Oops!</h2>
      <p className="emptyState__message">{message}</p>
      {onRetry && (
        <Button variant="secondary" label="Try again" onClick={onRetry} />
      )}
    </div>
  );
}

export default ErrorState;
