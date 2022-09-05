import React from "react";
import useCounter from "../custom-hook/useCounter";

const CounterCustomHook = () => {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h1>{`Count: ${count}`}</h1>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterCustomHook;
