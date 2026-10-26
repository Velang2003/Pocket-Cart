import { useState } from "react";
import Button from "../../components/ui/Button";

interface DeliveryCheckerProps {
  pincode?: string;
  onCheck?: (pincode: string) => void;
}

function DeliveryChecker({ pincode = "", onCheck }: DeliveryCheckerProps) {
  const [pin, setPin] = useState(pincode);
  const [result, setResult] = useState<string | null>(null);

  function handleCheck() {
    if (pin.length !== 6) {
      setResult("Enter a valid 6-digit pincode");
      return;
    }
    setResult("Delivery available by Tomorrow");
    onCheck?.(pin);
  }

  return (
    <div className="deliveryChecker">
      <p>Check delivery</p>
      <div>
        <input
          type="text"
          maxLength={6}
          placeholder="Enter pincode"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <Button variant="secondary" label="Check" onClick={handleCheck} />
      </div>
      {result && <p className="deliveryChecker__result">{result}</p>}
    </div>
  );
}

export default DeliveryChecker;

