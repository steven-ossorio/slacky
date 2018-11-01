import React from "react";
import styles from "./UserInfo.scss";

const UserInfo = ({ currentUser, title }) => {
  return (
    <div>
      <div className={styles.userInfoDropDown}>
        <div className={styles.userInfoTitle}>{title}</div>
        <div className={styles.userInfoUsername}>{currentUser.username}</div>
      </div>
    </div>
  );
};

export default UserInfo;
