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
          console.log("I'm here");
          return <Landing currentUser={data.current_user} />;
        } else {
          console.log("not hitting signed in");
          return <LoginFormContainer />;
        }
      }}
    </Query>
  );
};

export default LandingContainer;
