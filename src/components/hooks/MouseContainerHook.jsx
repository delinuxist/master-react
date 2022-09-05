import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainerHook = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button onClick={() => setDisplay((prev) => !prev)}>
        Toggle Display
      </button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainerHook;
