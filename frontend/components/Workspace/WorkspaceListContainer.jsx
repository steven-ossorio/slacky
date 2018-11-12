import React from "react";
import { Query } from "react-apollo";
import CurrentUserQuery from "../../queries/CurrentUser";
import WorkspaceList from "./WorkspaceList";

const CurrentUser = props => {
  return (
    <Query query={CurrentUserQuery}>
      {({ loading, data }) => {
        if (loading) {
          return (
            <div>
              <h1>Data is Loading</h1>
            </div>
          );
        }
        if (data.current_user && data.current_user.id) {
          return <WorkspaceList workspaces={data.current_user.workspaces} />;
        }
      }}
    </Query>
  );
};

export default CurrentUser;
