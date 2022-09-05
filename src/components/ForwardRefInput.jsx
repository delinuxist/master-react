import React, { forwardRef } from "react";

const ForwardRefInput = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
});

export default ForwardRefInput;
