import React from "react";
import { Query, Mutation } from "react-apollo";
import LoginMutation from "../../mutations/Login";
import CurrentUserQuery from "../../queries/CurrentUser";
import { withRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginFormContainer = props => {
  return (
    <Mutation
      mutation={LoginMutation}
      refetchQueries={[{ query: CurrentUserQuery }]}
    >
      {mutate => {
        const loginUser = ({ email, password }) => {
          return mutate({ variables: { email, password } });
        };
        return <LoginForm loginUser={loginUser} history={props.history} />;
      }}
    </Mutation>
  );
};

const checkUserContainer = props => {
  return (
    <Query query={CurrentUserQuery}>
      {({ loading, data }) => {
        if (loading) {
          return "";
        }
        if (data.current_user && data.current_user.id) {
          return <LoginFormContainer history={props.history} />;
        } else {
          return <LoginFormContainer history={props.history} />;
        }
      }}
    </Query>
  );
};

export default withRouter(checkUserContainer);
