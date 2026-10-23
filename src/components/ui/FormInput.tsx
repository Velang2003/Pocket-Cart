function FormInput() {
  return (
    <>
      <label htmlFor="name" className="formLabel">
        Label
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Placeholder"
        className="formInput"
      />
    </>
  );
}

export default FormInput;
