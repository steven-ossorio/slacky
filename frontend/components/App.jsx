import React from "react";
import {
  BrowserRouter as Router,
  hashHistory,
  Route,
  IndexRoute,
  Switch
} from "react-router-dom";
import Landing from "./landing/Landing";
import Signin from "./Signin";
import GetStarted from "./GetStarted";
import YourWorkspaces from "./YourWorkspaces";

const App = () => (
  <div>
    <Router history={hashHistory}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/get-started" component={GetStarted} />
        <Route exact path="/your-workspaces" component={YourWorkspaces} />
      </Switch>
    </Router>
  </div>
);
export default App;
