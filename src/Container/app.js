import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUpForm from "./LoginModule/SignUp/index";
import SignInForm from "./LoginModule/SignIn";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
