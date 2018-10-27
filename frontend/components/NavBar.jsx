import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="Navbar-container">
      <div className="Navbar-container-Nav">
        <Link to="/">
          <div className="Navbar-container-Nav-Logo">
            <i class="fa fa-slack" aria-hidden="true" />
            <span>Slacky</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
