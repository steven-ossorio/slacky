import React from "react";
import styles from "./WorkspaceList.scss";
import { Link } from "react-router-dom";

const WorkspaceList = props => {
  if (props.workspaces.length === 0) {
    return <div>Current Not Joined to any Workspace.</div>;
  }
  let workspaces = props.workspaces.map(workspace => {
    let name = workspace.name.split(" ").join("");
    return (
      <Link key={workspace.id} to={`/workspace/${name}`}>
        <li className={styles.workspaceList}>{workspace.name}</li>
      </Link>
    );
  });

  return <ul className={styles.workspaceListContainer}>{workspaces}</ul>;
};

export default WorkspaceList;
