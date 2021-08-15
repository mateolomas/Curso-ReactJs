import React, { Component } from "react";
import "./styles/UserCount.css";

export class UserCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "Initial state ",
    };
  }

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleSubs = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="count">
        <h2>Contador de Companias</h2>
        <h3>{this.state.count}</h3>
        <h3>{this.state.text}</h3>

        <button onClick={this.handleAdd}>Increase</button>
        <button onClick={this.handleSubs}>Decrease</button>
      </div>
    );
  }
}

export default UserCount;
