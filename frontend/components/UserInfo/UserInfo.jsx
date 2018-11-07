import React from "react";
import styles from "./UserInfo.scss";

const UserInfo = ({ currentUserName }) => {
  return (
    <>
      <div className={styles.workspaceLeftHeaderTitle} />
      <div className={styles.workspaceLeftHeaderUsernameContainer}>
        <div className={styles.workspaceLeftHeaderUsername}>
          {currentUserName}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
