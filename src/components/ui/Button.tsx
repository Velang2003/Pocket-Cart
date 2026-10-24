type varient = "Primary" | "Secondary" | "Ternary";
interface ButtonVarient {
  varient: varient;
  value: string;
}

function Button({ varient, value }: ButtonVarient) {
  return (
    // Primary | Secondary | normal
    <button className={`call-To-Action-Btn-${varient}`}>
      {!value ? "Button" : value}
    </button>
  );
}

export default Button;
