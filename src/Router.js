import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SignUpPage from "./Containers/SignUpPage";
import LoginPage from './Containers/LoginPage'
import DashboardPage from './Containers/DashboardPage'
import ProtectedRoute from "./Components/ProtectedRoute";
import FirstLogin from './Containers/FirstLogin'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup"  component={SignUpPage} />
        <Route exact path="/login"  component={LoginPage} />
        <ProtectedRoute exact path="/" component={DashboardPage} />
        <ProtectedRoute exact path="/firstVisit" component={FirstLogin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
