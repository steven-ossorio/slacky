import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingContainer from "./Landing/LandingContainer";
import Signup from "./SignupForm/SignupFormContainer";
import LoginForm from "./LoginForm/LoginFormContainer";
import WorkspaceIndexContainer from "../components/WorkspaceIndex/WorkspaceIndexContainer";

import { Query, Mutation } from "react-apollo";
import LoginMutation from "../mutations/Login";
import CurrentUserQuery from "../queries/CurrentUser";
import LogoutMutation from "../mutations/Logout";
import ChannelIndexContainer from "./ChannelsIndex/ChannelIndexContainer";
import MessageIndexContainer from "./MessageIndex/MessageIndexContainer";
import styles from "./App.scss";
import UserInfoContainer from "./UserInfo/UserInfoContainer";
import MessageFormContainer from "./MessageForm/MessageFormContainer";
import ChannelInfoContainer from "./ChannelInfo/ChannelInfoContainer";

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
  <Router>
    <CurrentUserContextProvider>
      <Route exact path="/" component={LandingContainer} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={LoginForm} />
      <div className={styles.workspaceContainer}>
        <div className={styles.workspaceList}>
          <Route path="/workspace" component={WorkspaceIndexContainer} />
        </div>
        <div className={styles.workspaceLeft}>
          <div className={styles.workspaceLeftHeader}>
            <Route
              path="/workspace/:workspaceId"
              component={UserInfoContainer}
            />
          </div>
          <div className={styles.workspaceLeftChannelList}>
            <Route
              path="/workspace/:workspaceId"
              component={ChannelIndexContainer}
            />
          </div>
        </div>
        <div className={styles.channelContainer}>
          <div className={styles.channelContainerHeader}>
            <Route
              path="/workspace/:workspaceId/channel/:channelId"
              component={ChannelInfoContainer}
            />
          </div>
          <div className={styles.channelContainerMain}>
            <div className={styles.channelContainerMainLeft}>
              <Route
                path="/workspace/:workspaceId/channel/:channelId"
                component={MessageIndexContainer}
              />
              <Route
                path="/workspace/:workspaceId/channel/:channelId"
                component={MessageFormContainer}
              />
            </div>
          </div>
        </div>
      </div>
    </CurrentUserContextProvider>
  </Router>
);
export default App;
