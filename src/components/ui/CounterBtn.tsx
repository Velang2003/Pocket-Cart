import { useState } from "react";

function CounterBtn() {
  const [count, setCount] = useState(1);
  function handleClick(event: any) {
    if (event.target.value === "-") {
      if (count >= 1) {
        setCount((val) => val - 1);
      }
    }
    if (event.target.value === "+") {
      if (count < 10) {
        setCount((val) => val + 1);
      }
    }
  }
  return (
    <div className="productCount">
      <button onClick={() => handleClick(event)} value={"-"}>
        -
      </button>
      <p>{count}</p>
      <button onClick={() => handleClick(event)} value={"+"}>
        +
      </button>
    </div>
  );
}

export default CounterBtn;
