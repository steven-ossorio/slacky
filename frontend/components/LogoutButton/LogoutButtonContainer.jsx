import React from "react";
import { Mutation } from "react-apollo";
import LogoutMutation from "../../mutations/Logout";
import LogoutButton from "./LogoutButton";
import CurrentUserQuery from "../../queries/CurrentUser";

const LogoutUserButton = () => {
  return (
    <Mutation
      mutation={LogoutMutation}
      refetchQueries={[{ query: CurrentUserQuery }]}
    >
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
