import { inject } from "mobx-react";
import React from "react";
import ReactPlaceholder from "react-placeholder/lib";
import { RectShape } from "react-placeholder/lib/placeholders";
import CrimesStore from "Store/CrimesStore";
import Style from "./Styles/Display.module.scss";
import "react-placeholder/lib/reactPlaceholder.css";
import { Crime } from "./Crime";
interface DisplayCrimesProps {
  crimesStore?: CrimesStore;
  data?: any;
  columnIndex?: number;
  isScrolling?: boolean;
  style?: any;
  args?: any;
}
const DisplayCrimes = inject("crimesStore")((props: DisplayCrimesProps) => {
  const { crimesStore, columnIndex: c = 0, isScrolling, style, data } = props;
  console.log("crimesStore?.Crimes[c] ", style.position);
  // const styless = {
  //   position: "absolute",
  //   left: "style.left",
  //   top: "style.top",
  //   height: "style.height",
  //   width: "style.width",
  // };
  const mystyle = {
    left: parseInt(`${style.left}`),
    top: parseInt(`${style.top}`),
    height: parseInt(`${style.height - 10}`),
    width: parseInt(`${style.width - 10}`),
  };
  if (!isScrolling) {
    return (
      <div
        style={{ position: style.absolute, ...mystyle }}
        className={Style.container}
      >
        <h3 className={Style.title}>street</h3>
        <p className={Style.info}>
          {crimesStore?.Crimes[c]?.location?.street.name}
        </p>
        <h3 className={Style.title}>location</h3>
        <p className={Style.info}>{crimesStore?.Crimes[c]?.location_type}</p>
        <h3 className={Style.title}>context</h3>
        <p className={Style.info}>{crimesStore?.Crimes[c]?.context}</p>
      </div>
    );
  } else {
    return <div style={style}>loading...</div>;
  }
});

export default DisplayCrimes;
