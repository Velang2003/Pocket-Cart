import { useEffect, useState } from "react";
import CounterBtn from "../../components/ui/CounterBtn";
import "./CartProductCard.css"

interface CartVariants {
  image: string;
  title: string;
  specifications?: Record<string, string | number>;
  price?: number;
}

function CartProductCard({
  image = "https://placehold.co/96",
  title = "Product name",
  specifications = { color: "Black", size: "M" },
  price = 1200.23,
}: CartVariants) {
  const [count, setCount] = useState(1);
  const [priceState, setPriceState] = useState(price);
  function handleClick(event: any) {
    if (event.target.value === "-") {
      if (count > 1) {
        setCount((val) => val - 1);
      }
    }
    if (event.target.value === "+") {
      if (count < 10) {
        setCount((val) => val + 1);
      }
    }
  }

  useEffect(()=>{
    setPriceState(count * price);
  },[count])

  return (
    <div className="CartProductCard">
      <img src={image} alt={`${title} image`} />
      <div className="CartDetails">
        <p>{title}</p>
        <p>
          {Object.entries(specifications).map(([key, value]) => (
            <span key={key}>
              {key}: {value}{" "}
            </span>
          ))}
        </p>
        <p>Remove</p>
      </div>
      <CounterBtn
        {...{ count, handleClick }}
      />
      <h3>
        {priceState.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </h3>
    </div>
  );
}

export default CartProductCard;
