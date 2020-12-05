import { inject, Observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import CrimesStore, { url } from "Store/CrimesStore";
import { Category } from "utils/util";
import moment from "moment";
import { useEffect } from "react";
import Styles from "../Menu/styles/Menu.module.scss";
import { Menu as Menus, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

interface MenuProps {
  crimesStore?: CrimesStore;
}
const Menu = inject("crimesStore")((props: MenuProps) => {
  useEffect(() => {
    let date = moment().format("L");
    const path = `${url}/crime-categories?date=${date}`;
    const { crimesStore } = props;
    crimesStore?.requestCategories(path);
  }, []);

  const renderMenu = () => {
    const { crimesStore } = props;
    if ((crimesStore as any).category.length > 0) {
      return (
        <>
          <Menus iconShape="square">
            {crimesStore?.category.map((cat: Category, i) => {
              return (
                <MenuItem>
                  <Link
                    className={Styles.link}
                    key={`catg-${i}`}
                    to="/"
                    onClick={(e) => {
                      const { crimesStore } = props;
                      crimesStore?.setCat(cat.url);
                    }}
                  >
                    {cat.name}
                  </Link>
                </MenuItem>
              );
            })}
          </Menus>
        </>
      );
    }
  };
  return (
    <Observer>
      {() => {
        return <>{renderMenu()}</>;
      }}
    </Observer>
  );
});

export default Menu;
