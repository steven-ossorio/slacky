import React from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import CurrentUserQuery from "../../queries/CurrentUser";
import QueryWorkspace from "../../queries/Workspace";
import Workspace from "./Workspace";

const WorkspaceContainer = ({ currentUser, id }) => {
  return (
    <Query query={QueryWorkspace} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <div>
              <h1>Current Loading</h1>
            </div>
          );
        }
        if (error) {
          return <div>There was an error</div>;
        }
        if (data) {
          return (
            <div>
              <Workspace currentUser={currentUser} workspace={data.workspace} />
            </div>
          );
        }
      }}
    </Query>
  );
};

const CurrentUser = props => {
  console.log(props);
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
          return (
            <WorkspaceContainer
              currentUser={data.current_user}
              id={props.match.params.id}
            />
          );
        }
      }}
    </Query>
  );
};

export default withRouter(CurrentUser);
