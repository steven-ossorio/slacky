import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingContainer from "./Landing/LandingContainer";
import Signup from "./SignupForm/SignupFormContainer";
import LoginForm from "./LoginForm/LoginFormContainer";
import WorkspaceContainer from "../components/Workspace/WorkspaceContainer";
import WorkspaceIndex from "../components/Workspace/WorkspaceIndex";
import Workspace from "./Workspace/Workspace";
import ChannelIndex from "../components/Channel/ChannelIndex";

import { Query, Mutation } from "react-apollo";
import LoginMutation from "../mutations/Login";
import CurrentUserQuery from "../queries/CurrentUser";
import LogoutMutation from "../mutations/Logout";

export const CurrentUserContext = React.createContext({
  id: null,
  username: null,
  logoutUser: () => {}
});

const MutationsProvider = ({ children }) => {
  return (
    <Mutation
      mutation={LoginMutation}
      refetchQueries={[{ query: CurrentUserQuery }]}
    >
      {mutate => {
        const loginUser = ({ email, password }) => {
          return mutate({ variables: { email, password } });
        };

        return (
          <Mutation
            mutation={LogoutMutation}
            refetchQueries={[{ query: CurrentUserQuery }]}
          >
            {mutate => {
              const logoutUser = () => {
                return mutate();
              };
              return children({ loginUser, logoutUser });
            }}
          </Mutation>
        );
      }}
    </Mutation>
  );
};

const CurrentUserContextProvider = ({ children }) => {
  return (
    <Query query={CurrentUserQuery}>
      {({ loading, error, data }) => {
        if (loading || !data.current_user) {
          return <React.Fragment>{children}</React.Fragment>;
        }
        const {
          current_user: { id, username }
        } = data;
        return (
          <MutationsProvider>
            {({ loginUser, logoutUser }) => (
              <CurrentUserContext.Provider
                value={{
                  id,
                  username,
                  loginUser,
                  logoutUser
                }}
              >
                {children}
              </CurrentUserContext.Provider>
            )}
          </MutationsProvider>
        );
      }}
    </Query>
  );
};

const App = () => (
  <div>
    <Router>
      <CurrentUserContextProvider>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/workspace/:id" component={WorkspaceIndex} />
          <Route
            exact
            path="/workspace/:id/channel/:id"
            component={ChannelIndex}
          />
        </Switch>
      </CurrentUserContextProvider>
    </Router>
  </div>
);
export default App;
