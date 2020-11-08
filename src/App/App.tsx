import React from "react";
import { Provider } from "mobx-react";
import { Home } from "../pages/Home";
import InfoStore from "../Store/InfoStore";
import Test from "../Store/test";

const context: any = {
  infoStore: new InfoStore(),
  test: new Test(),
};
function App() {
  return (
    <Provider {...context}>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Home />
    </Provider>
  );
}

export default App;
