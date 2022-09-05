import React, { Component } from "react";
import LifeCycleChild from "./LifeCycleChild";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mark",
    };

    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("derivedstatefromprops");
    return null;
  }

  componentDidMount() {
    console.log("componentdidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentupdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotbeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <div>
        {this.state.name}
        <div>
          <button
            onClick={() => this.setState({ name: "State Changed LifeCycle" })}
          >
            Change state
          </button>
        </div>
        <LifeCycleChild />
      </div>
    );
  }
}

export default LifeCycle;
