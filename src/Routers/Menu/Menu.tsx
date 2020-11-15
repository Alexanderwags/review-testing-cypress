import { inject, Observer } from "mobx-react";
import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import CrimesStore from "Store/CrimesStore";
import { Category } from "utils/util";

interface MenuProps {
  crimesStore?: CrimesStore;
}
const Menu = inject("crimesStore")((props: MenuProps) => {
  const renderMenu = () => {
    const { crimesStore } = props;
    if ((crimesStore as any).category.length > 0) {
      return crimesStore?.category.map((cat: Category, i) => {
        return (
          <Link key={`catg-${i}`} to="/">
            {cat.name}
          </Link>
        );
      });
    } else {
      return <h1>loading...</h1>;
    }
  };
  return (
    <Observer>
      {() => {
        return (
          <>
            <Router>{renderMenu()}</Router>
          </>
        );
      }}
    </Observer>
  );
});

export default Menu;
