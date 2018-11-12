import React, { Component } from "react";
import styles from "./UserInfo.scss";

class UserInfo extends Component {
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

  logout = () => {
    this.props.logoutUser();
  };

  render() {
    const { currentUserName, workspace } = this.props;

    let menu;
    if (this.state.menuActive) {
      menu = (
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownHeaderContainer}>
            <div className={styles.dropdownUserName}>{currentUserName}</div>
          </div>
          <hr className={styles.dropdownDivider} />
          <div className={styles.dropdownLogoutButton} onClick={this.logout}>
            Logout
          </div>
          <div onClick={this.logOut} />
        </div>
      );
    } else {
      menu = "";
    }

    return (
      <div onClick={this.toggleMenu} className={styles.workspaceLeftHeader}>
        <div className={styles.workspaceLeftHeaderTitleContainer}>
          <div className={styles.workspaceLeftHeaderTitle}>
            {workspace.name}
          </div>
          <span className={styles.workspaceLeftHeaderV}>V</span>
        </div>
        <div className={styles.workspaceLeftHeaderUsernameContainer}>
          <div className={styles.userStatus}>
            <i className="fa fa-circle" />
          </div>
          <div>{currentUserName}</div>
        </div>
        <div className={styles.menuContainer}>{menu}</div>
      </div>
    );
  }
}

export default UserInfo;
