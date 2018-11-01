import React from "react";
import styles from "./WorkspaceList.scss";
import { Link } from "react-router-dom";

const WorkspaceList = props => {
  if (props.workspaces.length === 0) {
    return <div>Current Not Joined to any Workspace.</div>;
  }
  let workspaces = props.workspaces.map(workspace => {
    let { id, name } = workspace;
    return (
      <Link key={workspace.id} to={`/workspace/${id}`}>
        <li className={styles.workspaceList}>{name}</li>
      </Link>
    );
  });

  return <ul className={styles.workspaceListContainer}>{workspaces}</ul>;
};

export default WorkspaceList;
