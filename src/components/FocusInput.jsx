import React, { Component, createRef } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.FocusRef = createRef();
  }

  focusHandler() {
    this.FocusRef.current.focusInput();
  }
  render() {
    return (
      <div>
        <Input ref={this.FocusRef} />
        <button onClick={() => this.focusHandler()}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
