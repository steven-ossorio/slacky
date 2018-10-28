import React from "react";
import {
  HashRouter as Router,
  hashHistory,
  Route,
  Switch
} from "react-router-dom";
import Landing from "./landing/Landing";
import Signup from "./Signup";
import LoginForm from "./LoginForm/LoginFormContainer";
import YourWorkspaces from "./YourWorkspaces";

const App = () => (
  <div>
    <Router history={hashHistory}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/your-workspaces" component={YourWorkspaces} />
      </Switch>
    </Router>
  </div>
);
export default App;
