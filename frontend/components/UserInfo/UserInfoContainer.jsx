import React from "react";
import UserInfo from "./UserInfo";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import WorkspaceInfoQuery from "../../queries/WorkspaceInfo";

import { CurrentUserContext } from "../App";

const UserInfoContainer = ({ workspace }) => {
  return (
    <CurrentUserContext.Consumer>
      {context => {
        const { username, id, logoutUser } = context;
        return (
          <UserInfo
            currentUserId={id}
            currentUserName={username}
            logoutUser={logoutUser}
            workspace={workspace}
          />
        );
      }}
    </CurrentUserContext.Consumer>
  );
};

const FetchWorkspaceInfo = props => {
  let id = props.match.params.workspaceId;
  return (
    <Query query={WorkspaceInfoQuery} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>...Loading</div>;
        }

        if (data.workspace) {
          return <UserInfoContainer workspace={data.workspace} />;
        }
      }}
    </Query>
  );
};

export default withRouter(FetchWorkspaceInfo);
