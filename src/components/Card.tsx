import { trace } from "mobx";
import { inject, observer, Observer } from "mobx-react";
import React, { useState } from "react";
import { useEffect } from "react";
import InfoStore from "../Store/InfoStore";

interface CardProps {
  infoStore?: InfoStore | any;
}
export const Card = inject("infoStore")(
  observer((props: CardProps) => {
    const [state, setstate] = useState(0);
    useEffect(() => {
      console.log("render");
    }, [props]);
    const renderTest = () => {
      const { infoStore } = props;
      return (
        <>
          <button
            onClick={() => {
              setstate(state + 1);
              infoStore.addInfo();
              infoStore.someAction();
            }}
          >
            Seconds passed: {infoStore.info}
          </button>
          <p>{infoStore.info}</p>
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
