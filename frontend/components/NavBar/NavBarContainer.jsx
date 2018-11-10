import React from "react";
import { Query } from "react-apollo";
import CurrentUserQuery from "../../queries/CurrentUser";
import NavBar from "./NavBar";
import { CurrentUserContext } from "../App";

// const NavBarContainer = () => {
//   return (
//     <Query query={CurrentUserQuery}>
//       {({ loading, data }) => {
//         if (loading) {
//           return "";
//         }
//         if (data.current_user && data.current_user.id) {
//           return <NavBar currentUser={data.current_user} />;
//         } else {
//           return <NavBar />;
//         }
//       }}
//     </Query>
//   );
// };

// export default NavBarContainer;

const NavBarContainer = () => {
  return (
    <CurrentUserContext.Consumer>
      {context => {
        const { username, id } = context;
        return <NavBar currentUserId={id} currentUserName={username} />;
      }}
    </CurrentUserContext.Consumer>
  );
};

export default NavBarContainer;
