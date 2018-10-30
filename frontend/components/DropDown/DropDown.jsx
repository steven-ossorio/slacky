import React, { Component } from "react";
import styles from "../LogoutButton/LogoutButtonStyles.scss";
import LogoutButtonContainer from "../LogoutButton/LogoutButtonContainer";
import WorkspaceList from "../Workspace/WorkspaceList";

class DropDown extends Component {
  state = {
    menuActive: false,
    editClick: false
  };

  toggleMenu = () => {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  };

  render() {
    let menu;
    if (this.state.menuActive) {
      menu = (
        <div className="post-dropdown-container">
          <ul className="post-dropdown">
            <div className="post-options">
              <li className="selection-option">
                <WorkspaceList workspaces={this.props.workspaces} />
              </li>
              <li className="selection-option">
                <LogoutButtonContainer />
              </li>
            </div>
          </ul>
        </div>
      );
    } else {
      menu = "";
    }

    return (
      <div id="menu">
        <div>
          <button className={styles.logoutButton} onClick={this.toggleMenu}>
            Your Workspaces
          </button>
        </div>
        {menu}
      </div>
    );
  }
}

export default DropDown;
