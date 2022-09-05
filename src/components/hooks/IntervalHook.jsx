import React, { useEffect, useState } from "react";

const IntervalHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setCount((prev) => prev + 1);
  };

  return <div>{count}</div>;
};

export default IntervalHook;
