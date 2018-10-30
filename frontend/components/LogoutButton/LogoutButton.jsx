import React from "react";
import styles from "./LogoutButtonStyles.scss";

class LogoutButton extends React.Component {
  logoutUser = () => {
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <button className={styles.logoutButton} onClick={this.logoutUser}>
          Logout
        </button>
      </div>
    );
  }
}

export default LogoutButton;
