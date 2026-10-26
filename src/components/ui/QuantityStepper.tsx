interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantityStepperProps) {
  function decrement() {
    if (value > min) onChange(value - 1);
  }

  function increment() {
    if (value < max) onChange(value + 1);
  }

  return (
    <div className="productCount">
      <button type="button" onClick={decrement} disabled={value <= min}>
        -
      </button>
      <p>{value}</p>
      <button type="button" onClick={increment} disabled={value >= max}>
        +
      </button>
    </div>
  );
}

export default QuantityStepper;

