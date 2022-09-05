import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log("Mouse Moved");
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div>
      <h5>{`x: ${x}`}</h5>
      <h5>{`y: ${y}`}</h5>
    </div>
  );
};

export default HookMouse;
