import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpForm from "./LoginModule/SignUp/index";
import SignInForm from "./LoginModule/SignIn";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/" component={SignUpForm} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
