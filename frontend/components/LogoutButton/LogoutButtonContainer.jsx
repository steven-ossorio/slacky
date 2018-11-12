import React from "react";
import LogoutButton from "./LogoutButton";

import { CurrentUserContext } from "../App";

const LogoutUserButton = () => {
  return (
    <CurrentUserContext.Consumer>
      {({ logoutUser }) => <LogoutButton logoutUser={logoutUser} />}
    </CurrentUserContext.Consumer>
  );
};

export default LogoutUserButton;
