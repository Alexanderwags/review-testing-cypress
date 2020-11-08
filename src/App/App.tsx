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
      <Home />
    </Provider>
  );
}

export default App;