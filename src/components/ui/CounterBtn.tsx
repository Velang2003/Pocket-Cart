import { useState } from "react";

function CounterBtn({count, handleClick}:any) {
  
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
