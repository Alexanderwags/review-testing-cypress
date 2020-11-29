import { Home } from "pages/Home";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Aside from "../aside/Aside";

function Layout() {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>

      {/* <Main
        image={image}
        toggled={toggled}
        collapsed={collapsed}
        rtl={rtl}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange}
        handleImageChange={handleImageChange}
      /> */}
    </div>
  );
}

export default Layout;
