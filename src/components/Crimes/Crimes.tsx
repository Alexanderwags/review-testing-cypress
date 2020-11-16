import React from "react";
import { FixedSizeList as List, FixedSizeGrid as Grid } from "react-window";
import { inject, Observer } from "mobx-react";
import CrimesStore, { url } from "Store/CrimesStore";
import DisplayCrimes from "./DisplayCrimes";
import { useEffect } from "react";
import Style from "./Styles/Crimes.module.scss";
export interface CrimesProps {
  crimesStore?: CrimesStore;
}

const Crimes = inject("crimesStore")((props: CrimesProps) => {
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
        const { crimesStore } = props;
        return (
          <>
            {/* <List
              className={`${List} ${Style.container}`}
              height={500}
              itemCount={crimesStore?.Crimes.length ?? 0}
              itemSize={300}
              useIsScrolling
              width={"100vw"}
            > */}
            <Grid
              columnCount={5}
              columnWidth={(window.innerWidth * 20) / 100}
              height={500}
              rowCount={50}
              itemData={crimesStore?.Crimes}
              rowHeight={300}
              width={window.innerWidth}
              initialScrollLeft={0}
              initialScrollTop={0}
            >
              {DisplayCrimes}
            </Grid>

            {/* </List> */}
          </>
        );
      }}
    </Observer>
  );
});
export default Crimes;
