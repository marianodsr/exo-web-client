import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";
import SignUpPage from "./Containers/SignUpPage";
import LoginPage from "./Containers/LoginPage";
import DashboardPage from "./Containers/DashboardPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import FirstLogin from "./Containers/FirstLogin";
import Playground from './Containers/Playground'
import Catalog from './Containers/Catalog'
import ProductView from "./Containers/ProductView";
import OrdersPage from './Containers/OrdersPage'

const Router = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/test" component={Playground} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={DashboardPage} />
          <ProtectedRoute exact path="/firstVisit" component={FirstLogin} />
          <ProtectedRoute exact path="/catalog/:id" component={ProductView} />
          <ProtectedRoute exact path="/catalog" component={Catalog} />
          <ProtectedRoute exact path="/orders" component={OrdersPage} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Router;
