import React from "react";
import styles from "./WorkspaceList.scss";

const WorkspaceList = props => {
  if (props.workspaces.length === 0) {
    return <div>Current Not Joined to any Workspace.</div>;
  }
  let workspaces = props.workspaces.map(workspace => {
    return (
      <li className={styles.workspaceList} key={workspace.id}>
        {workspace.name}
      </li>
    );
  });

  return <ul className={styles.workspaceListContainer}>{workspaces}</ul>;
};

export default WorkspaceList;
