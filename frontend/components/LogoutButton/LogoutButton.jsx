import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./LogoutButtonStyles.scss";

class LogoutButton extends React.Component {
  constructor() {
    super();

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logoutUser();
    this.props.history.push({
      pathname: "/"
    });
  }

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

export default withRouter(LogoutButton);
