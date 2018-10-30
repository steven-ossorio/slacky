import React from "react";

const WorkspaceList = props => {
  if (props.workspaces.length === 0) {
    return <div>Current Not Joined to any Workspace.</div>;
  }
  return <div />;
};

export default WorkspaceList;
