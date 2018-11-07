import React from "react";
import UserInfo from "./UserInfo";

import { CurrentUserContext } from "../App";

const UserInfoContainer = () => {
  return (
    <CurrentUserContext.Consumer>
      {context => {
        const { username, id } = context;
        return <UserInfo currentUserId={id} currentUserName={username} />;
      }}
    </CurrentUserContext.Consumer>
  );
};

export default UserInfoContainer;
