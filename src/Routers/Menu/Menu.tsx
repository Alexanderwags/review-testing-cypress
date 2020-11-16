import { inject, Observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import CrimesStore, { url } from "Store/CrimesStore";
import { Category } from "utils/util";
import ReactPlaceholder from "react-placeholder";
import moment from "moment";
import { useEffect } from "react";
import Styles from "../Menu/styles/Menu.module.scss";
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
      return crimesStore?.category.map((cat: Category, i) => {
        return (
          <Link key={`catg-${i}`} to="/">
            {cat.name}
          </Link>
        );
      });
    } else {
      return (
        <ReactPlaceholder type="text" ready={false} rows={1} color="#E0E0E0">
          {""}
        </ReactPlaceholder>
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
