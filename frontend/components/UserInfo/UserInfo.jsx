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

  render() {
    const { currentUserName, logoutUser, workspace } = this.props;

    let menu;
    if (this.state.menuActive) {
      menu = (
        <div className={styles.dropdownContainer}>
          <div>Hello</div>
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
        <div>{menu}</div>
      </div>
    );
  }
}

// const UserInfo = ({ currentUserName }) => {
//   return (
//     <>
//       <div className={styles.workspaceLeftHeaderTitle} />
//       <div className={styles.workspaceLeftHeaderUsernameContainer}>
//         <div className={styles.workspaceLeftHeaderUsername}>
//           <i class="fas fa-circle"></i>
//           {currentUserName}
//         </div>
//       </div>
//     </>
//   );
// };

export default UserInfo;
