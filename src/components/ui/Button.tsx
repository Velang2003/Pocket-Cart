type ButtonVarient = "Primary" | "Secondary" | "Ternary";

function Button({varient}:{varient:ButtonVarient}) {

  return (
    // Primary | Secondary | normal
    <button className={`call-To-Action-Btn-${varient}`}>Button</button>
  )
}

export default Button