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
          <div className={Style.container}>
            {crimesStore?.Crimes && (
              <Grid
                columnCount={5}
                columnWidth={(window.innerWidth * 25 - 100) / 100}
                height={window.innerHeight}
                rowCount={50}
                rowHeight={300}
                width={window.innerWidth}
                initialScrollLeft={0}
                initialScrollTop={0}
                useIsScrolling
              >
                {DisplayCrimes}
              </Grid>
            )}
          </div>
        );
      }}
    </Observer>
  );
});
export default Crimes;
