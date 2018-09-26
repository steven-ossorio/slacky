import React from "react";
import {
  BrowserRouter as Router,
  hashHistory,
  Route,
  IndexRoute,
  Switch
} from "react-router-dom";
import Landing from "./landing/Landing";
import Signup from "./Signup";
import Login from "./Login";
import YourWorkspaces from "./YourWorkspaces";

const App = () => (
  <div>
    <Router history={hashHistory}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/your-workspaces" component={YourWorkspaces} />
      </Switch>
    </Router>
  </div>
);
export default App;
