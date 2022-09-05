import React, { Component } from "react";
import Memo from "./Memo";

class Greetings extends Component {
  constructor() {
    super();
    this.state = {
      message: " Welcome visitor",
      stack: "",
    };
  }

  changeMessage() {
    this.setState({
      message: "thanks",
    });
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       message: "hey",
  //     });
  //   }, 2000);
  // }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.message}
            onChange={(e) => this.handleChange(e)}
          />
          <select
            value={this.state.stack}
            onChange={(e) =>
              this.setState({
                stack: e.target.value,
              })
            }
          >
            <option value={"React"}>React</option>
            <option value={"Angular"}>Angular</option>
            <option value={"Vue"}>Vue</option>
          </select>
        </div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.stack}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        {/* <Memo message={this.state.message} /> */}
      </div>
    );
  }
}

export default Greetings;
