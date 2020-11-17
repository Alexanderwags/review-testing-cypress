import { inject } from "mobx-react";
import React from "react";
import ReactPlaceholder from "react-placeholder/lib";
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
  console.log("isScrolling ", isScrolling);
  if (isScrolling) {
    return (
      <ReactPlaceholder type="text" ready={false} rows={1} color="#E0E0E0">
        {""}
      </ReactPlaceholder>
    );
  } else {
    return (
      <div className={Style.container} style={style}>
        <p>title : {crimesStore?.Crimes[0]?.category ?? ""}</p>
      </div>
    );
  }
});

export default DisplayCrimes;
