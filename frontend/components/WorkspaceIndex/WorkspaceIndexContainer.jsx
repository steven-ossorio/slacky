import React from "react";
import { Query } from "react-apollo";
import UserWorkspacesQuery from "../../queries/CurrentUserWorkspaces";
import WorkspaceIndex from "./WorkspaceIndex";

const WorkspacesQuery = props => {
  return (
    <Query query={UserWorkspacesQuery}>
      {({ loading, error, data }) => {
        if (loading || !data.current_user) {
          return <div>Loading...</div>;
        }
        if (data.current_user.workspaces) {
          return <WorkspaceIndex workspaces={data.current_user.workspaces} />;
        } else {
          return "";
        }
      }}
    </Query>
  );
};

export default WorkspacesQuery;
