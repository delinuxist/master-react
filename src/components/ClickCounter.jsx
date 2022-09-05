import React, { Component } from "react";
import withCounter from "./hoc/withCounter";

class ClickCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementCount = () => {
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1,
  //     };
  //   });
  // };
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;
