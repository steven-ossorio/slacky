import React from "react";
import { Query } from "react-apollo";
import CurrentUserQuery from "../../queries/CurrentUser";
import NavBar from "./NavBar";

const NavBarContainer = () => {
  return (
    <Query query={CurrentUserQuery}>
      {({ loading, data }) => {
        if (loading) {
          return "";
        }
        if (data.current_user && data.current_user.id) {
          return <NavBar currentUser={data.current_user} />;
        } else {
          return <NavBar />;
        }
      }}
    </Query>
  );
};

export default NavBarContainer;
