import React from "react";
import ReactDOM from "react-dom";

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>PortalDemo</h1>
    </div>,
    document.getElementById("portal")
  );
};

export default PortalDemo;
