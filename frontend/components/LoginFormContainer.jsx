import React from "react";

import { Mutation } from "react-apollo";
import LoginMutation from "../mutations/Login";

import LoginForm from "./LoginForm";

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

export default LoginFormContainer;
