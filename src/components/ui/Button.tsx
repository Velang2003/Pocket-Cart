
function Button({props}:any) {

  return (
    // Primary | Secondary | normal
    <button className={`call-To-Action-Btn-${props}`}>Button</button>
  )
}

export default Button