type CheckoutStep = "cart" | "address" | "payment";

interface CheckoutStepsProps {
  current?: CheckoutStep;
}

const STEPS: { id: CheckoutStep; label: string; number: number }[] = [
  { id: "cart", label: "Cart", number: 1 },
  { id: "address", label: "Address", number: 2 },
  { id: "payment", label: "Payment", number: 3 },
];

function CheckoutSteps({ current = "cart" }: CheckoutStepsProps) {
  const currentIndex = STEPS.findIndex((s) => s.id === current);

  return (
    <div className="checkoutSteps">
      {STEPS.map((step, i) => (
        <div
          key={step.id}
          className={`checkoutStep${i <= currentIndex ? " checkoutStep--done" : ""}`}
        >
          <span className="checkoutStep__number">{step.number}</span>
          <span className="checkoutStep__label">{step.label}</span>
          {i < STEPS.length - 1 && <span className="checkoutStep__divider">—</span>}
        </div>
      ))}
    </div>
  );
}

export default CheckoutSteps;
