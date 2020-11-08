import { inject, observer, Observer, useLocalObservable } from "mobx-react";
import React from "react";
import { Card } from "../components/Card";

export const Home = observer((props: any) => {
  return (
    <>
      <Card {...props} />
    </>
  );
});
