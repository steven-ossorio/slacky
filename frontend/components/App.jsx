import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingContainer from "./Landing/LandingContainer";
import Signup from "./SignupForm/SignupFormContainer";
import LoginForm from "./LoginForm/LoginFormContainer";

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </Router>
  </div>
);
export default App;
