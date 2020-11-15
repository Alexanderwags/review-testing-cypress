import React from "react";
import { Provider } from "mobx-react";
import { Home } from "../pages/Home";
import CrimesStore from "Store/CrimesStore";
import Test from "Store/test";
import Router from "Routers/Router";

const context: any = {
  crimesStore: new CrimesStore(),
  test: new Test(),
};
function App() {
  return (
    <Provider {...context}>
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
      <Router />
    </Provider>
  );
}

export default App;
