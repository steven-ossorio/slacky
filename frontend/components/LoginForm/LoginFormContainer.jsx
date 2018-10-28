import React from "react";

import { Query, Mutation } from "react-apollo";
import LoginMutation from "../../mutations/Login";

import CurrentUserQuery from "../../queries/CurrentUser";
import LoginForm from "./LoginForm";
import { check } from "graphql-anywhere";

const LoginFormContainer = () => {
  return (
    <Mutation mutation={LoginMutation}>
      {mutate => {
        const loginUser = ({ email, password }) => {
          return mutate({ variables: { email, password } });
        };
        return <LoginForm loginUser={loginUser} />;
      }}
    </Mutation>
  );
};

const checkUserContainer = () => {
  return (
    <Query query={CurrentUserQuery}>
      {({ loading, data }) => {
        if (loading) {
          return "";
        }
        if (data.current_user && data.current_user.id) {
          // <Redirect to={}/>
          console.log("logged in!");
          return "";
        } else {
          return <LoginFormContainer />;
        }
      }}
    </Query>
  );
};

export default checkUserContainer;
