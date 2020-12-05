import React, { useState } from "react";
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
              <List
                height={window.outerHeight - 100}
                width={window.innerWidth}
                useIsScrolling
                itemCount={crimesStore?.Crimes.length}
                itemSize={400}
                className={Style.container}
              >
                {DisplayCrimes}
              </List>
            )}
          </div>
        );
      }}
    </Observer>
  );
});
export default Crimes;
