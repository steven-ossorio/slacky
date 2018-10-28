import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

class Landing extends Component {
  render() {
    return (
      <main className="landing-container">
        <NavBar />
        <main className="landing-container-main">
          <div className="landing-container-main-left" />
          <div className="landing-container-main-right">
            <p className="landing-container-main-right-header">
              Where It Happens
            </p>
            <p className="landing-container-main-right-body">
              When your team needs to kick off a project, hire a new employee,
              deploy some code, review a sales contract, finalize next year's
              budget, measure an A/B test, plan your next office opening, and
              more, Slic has you covered.
            </p>
            <form className="landing-container-main-right-form">
              <input
                className="landing-container-main-right-form-signup-input"
                placeholder="Email Address"
              />
              <input
                type="submit"
                className="landing-container-main-right-form-signup-button"
                value="Get Started"
              />
            </form>
            <div className="landing-container-main-right-links">
              <span>Already have an account?</span>
              <Link
                className="landing-container-main-right-links-button"
                to="/login"
              >
                Log In
              </Link>{" "}
              <span>or</span>
              <Link
                className="landing-container-main-right-links-button"
                to="/login"
              >
                Guest Login
              </Link>
            </div>
          </div>
        </main>
      </main>
    );
  }
}

export default Landing;
