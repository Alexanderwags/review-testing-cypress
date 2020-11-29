import { inject, Observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import CrimesStore, { url } from "Store/CrimesStore";
import { Category } from "utils/util";
import ReactPlaceholder from "react-placeholder";
import moment from "moment";
import { useEffect } from "react";
import Styles from "../Menu/styles/Menu.module.scss";
import {
  ProSidebar,
  Menu as Menus,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
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
    // if ((crimesStore as any).category.length > 0) {
    //   return crimesStore?.category.map((cat: Category, i) => {
    //     return (
    //       <Link
    //         className={Styles.link}
    //         key={`catg-${i}`}
    //         to="/"
    //         onClick={(e) => {
    //           const { crimesStore } = props;
    //           crimesStore?.setCat(cat.url);
    //         }}
    //       >
    //         {cat.name}
    //       </Link>
    //     );
    //   });
    // } else {
    //   return (
    //     <ReactPlaceholder type="text" ready={false} rows={1} color="#E0E0E0">
    //       {""}
    //     </ReactPlaceholder>
    //   );
    // }
    if ((crimesStore as any).category.length > 0) {
      return (
        <>
          {/**
           *  You can add the content of the sidebar ex: menu, profile details, ...
           */}
          <Menus iconShape="square">
            <SubMenu title="Components" icon={""}>
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
            </SubMenu>
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
