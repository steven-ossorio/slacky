import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarStyles.scss";
import NavBarDropDownContainer from "../NavDropDown/NavBarDropDownContainer";

const NavBar = props => {
  console.log(props);
  let workspaces = props.currentUserId ? <NavBarDropDownContainer /> : "";

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
