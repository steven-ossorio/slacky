import React from "react";
import { withRouter } from "react-router-dom";

class LogoutButton extends React.Component {
  constructor() {
    super();

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logoutUser();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <button onClick={this.logoutUser}>This is a button</button>
      </div>
    );
  }
}

export default withRouter(LogoutButton);
