interface ToastProps {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
}

function Toast({
  message = "Added to cart",
  actionLabel,
  onAction,
  onClose,
}: ToastProps) {
  return (
    <div className="toast" role="alert" aria-live="assertive">
      <span className="toast__message">{message}</span>
      {actionLabel && onAction && (
        <button className="toast__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
      <button className="toast__close" onClick={onClose} aria-label="Dismiss">
        &times;
      </button>
    </div>
  );
}

export default Toast;
