import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "pages/Home";
import Menu from "./Menu/Menu";
import Layout from "./Menu/Layout/Layout";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Menu /> */}
        <Layout />
      </BrowserRouter>
    </>
  );
};

export default Router;
