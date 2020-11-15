import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import { useEffect } from "react";
import CrimesStore from "Store/CrimesStore";

interface CardProps {
  crimesStore?: CrimesStore | any;
}
export const Card = inject("crimesStore")(
  observer((props: CardProps) => {
    const [state, setstate] = useState(0);
    useEffect(() => {
      console.log("render");
    }, [props]);
    const renderTest = () => {
      const { crimesStore } = props;
      return (
        <>
          <button
            onClick={() => {
              setstate(state + 1);
              crimesStore.addInfo();
              crimesStore.someAction();
            }}
          >
            Seconds passed: {crimesStore.info}
          </button>
          <p>{crimesStore.info}</p>
          <p>{state}</p>
        </>
      );
    };
    return <>{renderTest()}</>;
  })
);
{
  /* <Observer>
        {() => {
          return (
            <>
              <button onClick={() => props.infoStore.addInfo()}>
                Seconds passed: {props.infoStore.info}
              </button>
              <p>{props.infoStore.info}</p>
            </>
          );
        }}
      </Observer> */
}
