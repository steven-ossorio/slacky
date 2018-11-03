import React from "react";
import Landing from "./Landing";

import { CurrentUserContext } from "../App";

const LandingContainer = () => {
  return (
    <CurrentUserContext.Consumer>
      {context => {
        const { username, id } = context;
        return <Landing currentUserId={id} currentUserName={username} />;
      }}
    </CurrentUserContext.Consumer>
  );
};

export default LandingContainer;
