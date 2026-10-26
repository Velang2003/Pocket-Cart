type PaymentMethod = "upi" | "card" | "netbanking" | "cod";

interface PaymentOptionProps {
  method?: PaymentMethod;
  onChange?: (method: PaymentMethod) => void;
}

const METHODS: { id: PaymentMethod; label: string }[] = [
  { id: "upi", label: "UPI" },
  { id: "card", label: "Credit / Debit Card" },
  { id: "netbanking", label: "Net Banking" },
  { id: "cod", label: "Cash on Delivery" },
];

function PaymentOption({ method = "upi", onChange }: PaymentOptionProps) {
  return (
    <div className="paymentOption">
      {METHODS.map((m) => (
        <label key={m.id} className="paymentOption__item">
          <input
            type="radio"
            name="paymentMethod"
            value={m.id}
            checked={method === m.id}
            onChange={() => onChange?.(m.id)}
          />
          {m.label}
        </label>
      ))}
    </div>
  );
}

export default PaymentOption;
