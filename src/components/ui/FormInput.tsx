interface formInputVarient{
  placeholder: string,
  label: string
}

function FormInput({label="default label", placeholder= "default placeholder"}:formInputVarient) {
  return (
    <>
      <label htmlFor={label} className="formLabel">
        {label}
      </label>
      <input
        type="text"
        name={label}
        id="name"
        placeholder={placeholder}
        className="formInput"
      />
    </>
  );
}

export default FormInput;
