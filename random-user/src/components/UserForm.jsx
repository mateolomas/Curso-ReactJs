import React, { Component } from "react";
import "./styles/UserForm.css";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country: "",
      year: "",
      
      
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state);
  };

  render() {
    return (
      <div>
        <h3>Nueva compania</h3>
        <form className="form1" onSubmit={this.handleSubmit}>
          <div className="inputForm">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="inputForm">
            <label>Country: </label>
            <input
              type="text"
              name="country"
              onChange={this.handleChange}
              value={this.state.country}
            />
          </div>
          <div className="inputForm">
            <label>Year: </label>
            <input
              type="text"
              name="year"
              onChange={this.handleChange}
              value={this.state.year}
            />
          </div>
          
          <button> Add</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
