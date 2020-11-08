import React from "react";
import { action, makeAutoObservable, observable } from "mobx";

class Test {
  @observable info: any = { name: "Alex" };
  constructor() {
    makeAutoObservable(this);
  }
  @action addInfo = () => {
    this.info.name = "knkmkmkm";
  };
}

export default Test;
