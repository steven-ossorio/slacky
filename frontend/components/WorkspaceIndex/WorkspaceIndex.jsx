import React from "react";
import { Link } from "react-router-dom";
import styles from "./WorkspaceIndex.scss";

const WorkspaceIndex = ({ workspaces }) => {
  let workspacesList = workspaces.map(({ id, name }) => {
    return (
      <Link to={`/workspace/${id}`} key={id}>
        <div className={styles.workspaceImage} />
        {/* <li>{name}</li> */}
      </Link>
    );
  });

  return <div className={styles.workspaceContainer}>{workspacesList}</div>;
};

export default WorkspaceIndex;
