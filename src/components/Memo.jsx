import React, { memo } from "react";

const Memo = ({ message }) => {
  console.log("rendering memo component");
  return (
    <div>
      Memo
      <h1>{message}</h1>
    </div>
  );
};

export default memo(Memo);
