import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarStyles.scss";
import LogoutButtonContainer from "../LogoutButton/LogoutButtonContainer";

const NavBar = props => {
  let workspaces = props.currentUser ? <LogoutButtonContainer /> : "";

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.innerNav}>
        <Link to="/" replace>
          <div className={styles.logo}>
            <i className={`fa fa-slack ${styles.fa}`} aria-hidden="true" />
            <span>Slacky</span>
          </div>
        </Link>
        {workspaces}
      </div>
    </div>
  );
};
export default NavBar;
