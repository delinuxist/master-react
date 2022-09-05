import React, { Component } from "react";

class LifeCycleChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mark",
    };

    console.log("constructorChild");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("derivedstatefrompropsChild");
    return null;
  }

  componentDidMount() {
    console.log("componentdidMountChild");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentupdateChild");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotbeforeUpdateChild");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdateChild");
  }
  render() {
    console.log("renderChild");
    return <div>LifeCycleChild</div>;
  }
}

export default LifeCycleChild;
