import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarStyles.scss";

export default () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.innerNav}>
        <Link to="/">
          <div className={styles.logo}>
            <i className={`fa fa-slack ${styles.fa}`} aria-hidden="true" />
            <span>Slacky</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
