import React from "react";
import { Redirect } from "react-router";
import { Mutation } from "react-apollo";
import LogoutMutation from "../../mutations/Logout";
import LogoutButton from "./LogoutButton";

const LogoutUserButton = () => {
  return (
    <Mutation mutation={LogoutMutation}>
      {mutate => {
        const logoutUser = () => {
          return mutate();
        };
        return <LogoutButton logoutUser={logoutUser} />;
      }}
    </Mutation>
  );
};

export default LogoutUserButton;
