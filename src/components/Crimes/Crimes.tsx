import React, { PureComponent, useCallback, useState } from "react";
import { FixedSizeList as List, FixedSizeGrid as Grid } from "react-window";
import { inject, Observer } from "mobx-react";
import CrimesStore, { url } from "Store/CrimesStore";
import DisplayCrimes from "./DisplayCrimes";
import { useEffect } from "react";
import Style from "./Styles/Crimes.module.scss";
import { RectShape } from "react-placeholder/lib/placeholders";
import ReactPlaceholder from "react-placeholder/lib";
import InfiniteLoader from "react-window-infinite-loader";
import { getCrimen } from "utils/util";
import MyLoader from "components/Placeholder/MyLoader";
import MyLoader1 from "components/Placeholder/MyLoader1";
export interface CrimesProps {
  crimesStore?: CrimesStore;
}

const Crimes = inject("crimesStore")((props: CrimesProps) => {
  const { crimesStore } = props;
  const [crimes, setCrimes] = useState([]);
  const cr = crimesStore?.Crimes?.filter(
    (cri) => cri.category == crimesStore.cat
  );

  useEffect(() => {
    const { crimesStore } = props;
    const path = url;
    crimesStore?.requestAllCrimes(
      `${path}/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10`
    );
  }, []);

  return (
    <Observer>
      {() => {
        return (
          // <div className={Style.container}>
          //   {crimesStore?.Crimes && (
          //     <List
          //       height={window.outerHeight - 100}
          //       width={1000}
          //       useIsScrolling
          //       itemCount={crimesStore?.Crimes.length}
          //       itemSize={300}
          //       className={Style.container}
          //     >
          //       {DisplayCrimes}
          //     </List>
          //   )}
          // </div>
          <div>
            <MyLoader />
            <MyLoader1 />
          </div>
        );
      }}
    </Observer>
  );
});
export default Crimes;
