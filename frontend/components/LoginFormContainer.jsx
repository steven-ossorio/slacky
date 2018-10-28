import React from "react";

import { Mutation } from "react-apollo";
import LoginMutation from "../mutations/Login";

const LoginFormContainer = () => {
  console.log("Login form container!");
  return (
    <Mutation mutation={LoginMutation}>
      {({ mutate: loginUser }) => {
        return <LoginForm loginUser={loginUser} />;
      }}
    </Mutation>
  );
};

export default LoginFormContainer;
