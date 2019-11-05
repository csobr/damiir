import React, { Component } from "react";
import "@babel/polyfill";
const initialState = {
  name: "",
  email: "",
  nameError: "",
  emailError: ""
};
export default class Newsletter extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  validate = () => {
    let nameError = "";
    let emailError = "";
    if (!this.state.name) {
      nameError = "Name cannot be blank!";
    }
    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }
    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }
    return true;
  };
  async handleSubmit(e) {
    const isValid = this.validate();
    if (isValid) {
      //clear form
      e.preventDefault();
      console.log(this.state);

      this.setState(initialState);
    }
    const { name, email } = this.state;
  }
  render() {
    return (
      <div>
        <section id="newsletter">
          <form onSubmit={this.handleSubmit}>
            <h1>Join our newsletter</h1>
            <label htmlFor="name"><input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={this.handleChange}
            /></label>
            
            <div style={{ fontSize: 10, color: "red" }}>
              {this.state.nameError}
            </div>  
            <label htmlFor="email">
            <input
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={this.handleChange} />
           </label>
            <button onSubmit={this.handleSubmit}>Join</button>
          </form>
        </section>
      </div>
    );
  }
}
