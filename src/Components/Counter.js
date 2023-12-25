import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount((count) => count - 1); // callback give you last updated state
    }
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
