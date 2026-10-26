import { useEffect, useState } from "react";
import QuantityStepper from "../../components/ui/QuantityStepper";
import "./CartLineItem.css";

interface CartItem {
  image: string;
  title: string;
  specifications?: Record<string, string | number>;
  price: number;
}

interface CartLineItemProps {
  item?: CartItem;
  onQtyChange?: (qty: number) => void;
  onRemove?: () => void;
}

const DEFAULT_ITEM: CartItem = {
  image: "https://placehold.co/96",
  title: "Product name",
  specifications: { Colour: "Black", Size: "M" },
  price: 1299,
};

function CartLineItem({
  item = DEFAULT_ITEM,
  onQtyChange,
  onRemove,
}: CartLineItemProps) {
  const [qty, setQty] = useState(1);
  const [linePrice, setLinePrice] = useState(item.price);

  function handleQtyChange(newQty: number) {
    setQty(newQty);
    onQtyChange?.(newQty);
  }

  useEffect(() => {
    setLinePrice(qty * item.price);
  }, [qty, item.price]);

  return (
    <div className="CartProductCard">
      <img src={item.image} alt={`${item.title} image`} />
      <div className="CartDetails">
        <p>{item.title}</p>
        <p>
          {Object.entries(item.specifications ?? {}).map(([key, value]) => (
            <span key={key}>
              {key}: {value}{" "}
            </span>
          ))}
        </p>
        <p
          className="removeBtn"
          onClick={onRemove}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onRemove?.()}
        >
          Remove
        </p>
      </div>
      <QuantityStepper value={qty} onChange={handleQtyChange} min={1} max={10} />
      <h3>
        {linePrice.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </h3>
    </div>
  );
}

export default CartLineItem;
