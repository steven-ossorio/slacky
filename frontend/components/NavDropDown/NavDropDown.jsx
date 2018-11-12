import React, { Component } from "react";
import buttonStyle from "../LogoutButton/LogoutButtonStyles.scss";
import LogoutButtonContainer from "../LogoutButton/LogoutButtonContainer";
import WorkspaceList from "../Workspace/WorkspaceList";
import styles from "./NavDropDown.scss";

class NavDropDown extends Component {
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
    console.log(this.props);
    let menu;
    if (this.state.menuActive) {
      menu = (
        <div className={styles.dropDownContainer}>
          <div className="dropdown">
            <div className="options">
              <div className="selection-option">
                <WorkspaceList workspaces={this.props.workspaces} />
              </div>
              <div className={styles.dropDownLogoutButton}>
                <LogoutButtonContainer />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      menu = "";
    }

    return (
      <div id="menu">
        <div>
          <button
            className={buttonStyle.logoutButton}
            onClick={this.toggleMenu}
          >
            Your Workspaces
          </button>
        </div>
        {menu}
      </div>
    );
  }
}

export default NavDropDown;
