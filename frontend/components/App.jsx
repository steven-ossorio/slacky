import React from "react";
import {
  BrowserRouter as Router,
  hashHistory,
  Route,
  IndexRoute
} from "react-router-dom";
import Landing from "./Landing";

const App = () => (
  <div>
    <Router history={hashHistory}>
      <Route exact path="/" component={Landing} />
    </Router>
  </div>
);
export default App;
