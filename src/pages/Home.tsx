import { inject, observer, Observer } from "mobx-react";
import React from "react";
import { Card } from "../components/Card";

export const Home = observer((props: any) => {
  return (
    <>
      <Card {...props} />
    </>
  );
});
