import { inject } from "mobx-react";
import React from "react";
import CrimesStore from "Store/CrimesStore";
import Style from "./Styles/Display.module.scss";
interface DisplayCrimesProps {
  crimesStore?: CrimesStore;
  data?: any;
  index?: number;
  isScrolling?: boolean;
  style?: any;
  args?: any;
}
const DisplayCrimes = inject("crimesStore")((props: DisplayCrimesProps) => {
  const { crimesStore, index = 0, isScrolling, style } = props;

  return (
    <div className={Style.container} style={style}>
      {isScrolling ? "Scrolling" : `Row ${index}`}
      {/* <p>title : {crimesStore?.Crimes[0].category}</p> */}
    </div>
  );
});

export default DisplayCrimes;
