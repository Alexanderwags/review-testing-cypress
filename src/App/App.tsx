import React from "react";
import { Provider } from "mobx-react";
import { Home } from "../pages/Home";
import CrimesStore from "Store/CrimesStore";
import Test from "Store/test";
import Router from "Routers/Router";
import Layout from "Routers/Menu/Layout/Layout";

const context: any = {
  crimesStore: new CrimesStore(),
  test: new Test(),
};
function App() {
  return (
    <Provider {...context}>
      <Router />
    </Provider>
  );
}

export default App;
