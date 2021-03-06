import { inject } from "mobx-react";
import React from "react";
import CrimesStore from "Store/CrimesStore";
import Style from "./Styles/Display.module.scss";
import "react-placeholder/lib/reactPlaceholder.css";

import {
  IoLocationOutline,
  IoInformationCircleSharp,
  IoEarth,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";

interface DisplayCrimesProps {
  crimesStore?: CrimesStore;
  data?: any;
  index?: number;
  isScrolling?: boolean;
  style?: any;
  args?: any;
  rowIndex?: number;
}

const DisplayCrimes = inject("crimesStore")((props: DisplayCrimesProps) => {
  const { crimesStore, index = 0, isScrolling, style, data, rowIndex } = props;
  const mystyle = {
    left: parseInt(`${style.left}`),
    top:
      index % 2 == 0
        ? parseInt(`${style.top + 20}`)
        : parseInt(`${style.top + 20}`),
    height: parseInt(`${style.height - 20}`),
    width: parseInt(`${style.width - 20}`),
  };

  function showCrimes() {
    return Object.entries(crimesStore?.Crimes[index]).map((ele: any, i) => {
      return (
        <div key={i} className={Style.container}>
          <IoInformationCircleSharp size={60} />
          <h3 className={Style.title}>street</h3>
          <div className={Style.infoCard}>
            <p className={Style.info}>{ele[1]?.location?.street.name}</p>
            <IoEarth />
          </div>

          <h3 className={Style.title}>location</h3>
          <div className={Style.infoCard}>
            <p className={Style.info}>{ele[1]?.location_type}</p>
            <IoLocationOutline />
          </div>
          <h3 className={Style.title}>context</h3>
          <div className={Style.infoCard}>
            <p className={Style.info}>{ele[1]?.context}</p>
          </div>
          <div className={Style.btn}>
            <IoArrowForwardCircleSharp size={30} />
            <button onClick={() => {}}>read more</button>
          </div>
        </div>
      );
    });
  }
  if (!isScrolling) {
    return (
      <>
        <div style={{ ...style, ...mystyle }} className={Style.containerParent}>
          {showCrimes()}
        </div>
      </>
    );
  } else {
    return <div style={style}>loading...</div>;
  }
});

export default DisplayCrimes;
