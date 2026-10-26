import Button from "../../components/ui/Button";
import "./OrderSummary.css";

interface OrderSummaryTotals {
  subTotal: number;
  gstPercent?: number;
  shippingCost?: string | number;
}

function OrderSummary({
  subTotal = 4297,
  gstPercent = 18,
  shippingCost = "Free",
}: OrderSummaryTotals) {
  const gst = (gstPercent * subTotal) / 100;
  const shipping = shippingCost === "Free" ? 0 : Number(shippingCost);
  const total = subTotal + gst + shipping;

  return (
    <div className="orderSummary">
      <h4>Order summary</h4>
      <p>
        Subtotal{" "}
        <span>
          {subTotal.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </span>
      </p>
      <p>
        Shipping <span>{shippingCost}</span>
      </p>
      <p>
        GST ({gstPercent}%){" "}
        <span>
          {gst.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
        </span>
      </p>
      <span className="line" />
      <p>
        Total{" "}
        <span>
          {total.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </span>
      </p>
      <div>
        <input
          type="text"
          name="coupon"
          id="couponInput"
          placeholder="Coupon code"
        />
        <Button variant="secondary" label="Apply" />
      </div>
      <Button variant="primary" label="Proceed to checkout" fullWidth />
    </div>
  );
}

export default OrderSummary;

