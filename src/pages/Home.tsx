import { observer } from "mobx-react";
import React, { Suspense } from "react";
import { Card } from "../components/Card";
import { Crimes } from "../components/Crimes/Crimes";

export const Home = observer((props: any) => {
  return (
    <>
      <Crimes />
      {/* <Card {...props} /> */}
    </>
  );
});
