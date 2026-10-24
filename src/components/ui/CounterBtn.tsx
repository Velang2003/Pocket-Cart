

function CounterBtn({count, handleClick}:any) {
  
  return (
    <div className="productCount">
      <button onClick={() => handleClick(event)} value={"-"}>
        -
      </button>
      <p>{!count ? 0 : count}</p>
      <button onClick={() => handleClick(event)} value={"+"}>
        +
      </button>
    </div>
  );
}

export default CounterBtn;
