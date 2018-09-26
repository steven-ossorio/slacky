import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div>Landing Page</div>
        <Link to="/signin">Sign In</Link>
        <Link to="/get-started">Get Started</Link>
      </div>
    );
  }
}

export default Landing;
