import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit() {
    this.props
      .loginUser(this.state)
      .then(user => {
        if (user) {
          this.props.history.push("/randomComponent");
        }
      })
      .catch(err => console.log(err));

    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="login-container">
          <div className="login-container-box">
            <form
              className="login-container-box-form"
              onSubmit={this.handleSubmit}
            >
              <div className="login-container-box-form-header">
                Login To Slacky
              </div>
              <input
                type="text"
                className="login-container-box-form-input"
                placeholder="Username"
                value={this.state.username}
                onChange={this.onChange("username")}
              />
              <input
                type="text"
                className="login-container-box-form-input"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.onChange("email")}
              />
              <input
                type="password"
                className="login-container-box-form-input"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange("password")}
              />
              <input
                className="login-container-box-form-button"
                type="submit"
                value="Login"
              />
            </form>
            <div className="login-container-box-links">
              <span>Already have an account?</span>
              <Link className="login-container-box-links-button" to="/login">
                Login
              </Link>{" "}
              <span>or</span>
              <Link className="login-container-box-links-button" to="/login">
                Guest Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
