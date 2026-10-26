type Variant = "primary" | "secondary" | "cta";

interface ButtonProps {
  variant: Variant;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

function Button({
  variant,
  label = "Button",
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}${fullWidth ? " btn-full" : ""}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : label}
    </button>
  );
}

export default Button;
