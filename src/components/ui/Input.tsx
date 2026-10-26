interface InputProps {
  label: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  register?: object; // react-hook-form register object placeholder
}

function Input({
  label,
  type = "text",
  placeholder = "Placeholder",
  error,
  disabled = false,
  register,
}: InputProps) {
  return (
    <div className="inputWrapper">
      <label htmlFor={label} className="formLabel">
        {label}
      </label>
      <input
        type={type}
        id={label}
        name={label}
        placeholder={placeholder}
        disabled={disabled}
        className={`formInput${error ? " formInput--error" : ""}`}
        {...register}
      />
      {error && <span className="formError">{error}</span>}
    </div>
  );
}

export default Input;
