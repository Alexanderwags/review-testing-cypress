import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "pages/Home";
import Menu from "./Menu/Menu";
const Router = () => {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;