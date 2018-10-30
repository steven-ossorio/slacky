import React from "react";
import { Query } from "react-apollo";
import CurrentUserQuery from "../../queries/CurrentUser";
import Landing from "./Landing";

const LandingContainer = () => {
  return (
    <Query query={CurrentUserQuery}>
      {({ loading, data }) => {
        if (loading) {
          return "";
        }
        if (data.current_user && data.current_user.id) {
          return <Landing currentUser={data.current_user} />;
        } else {
          return <Landing />;
        }
      }}
    </Query>
  );
};

export default LandingContainer;
