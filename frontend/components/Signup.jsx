import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";

class GetStarted extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="login-container">
          <div className="login-container-box">
            <form className="login-container-box-form">
              <div className="login-container-box-form-header">
                Login To Slacky
              </div>
              <input
                className="login-container-box-form-input"
                placeholder="Email Address"
              />
              <input
                className="login-container-box-form-input"
                placeholder="Username"
              />
              <input
                className="login-container-box-form-input"
                placeholder="Password"
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

export default GetStarted;
