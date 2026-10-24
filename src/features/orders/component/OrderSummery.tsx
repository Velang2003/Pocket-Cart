import Button from "../../../components/ui/Button"
import "./OrderSummary.css"

interface summaryVarient{
    subTotal: number,
    gstPercent? : number,
    shippingCost?:string | number
}

function OrderSummery({subTotal=4297, gstPercent=18, shippingCost="Free"}:summaryVarient) {

    const gst = (gstPercent * subTotal) / 100;

    const total = gst + subTotal + ((shippingCost==="Free") ? 0 : Number(shippingCost));

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
        GST (18%){" "}
        <span>
          {gst.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
        </span>
      </p>
      <span className="line"></span>
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
        <Button varient="Secondary" value="Apply" />
      </div>
      <Button varient="Primary" value="Proceed to checkout" />
    </div>
  );
}

export default OrderSummery