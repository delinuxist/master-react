import React, { Component, createRef } from "react";
import ForwardRefInput from "./ForwardRefInput";

class ForwardRefParentInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }

  handleFocus() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <ForwardRefInput ref={this.inputRef} />
        <button onClick={() => this.handleFocus()}>Focus Input</button>
      </div>
    );
  }
}

export default ForwardRefParentInput;
