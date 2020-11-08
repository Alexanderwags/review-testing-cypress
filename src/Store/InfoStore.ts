import { action, makeAutoObservable, observable } from "mobx";

class InfoStore {
  @observable info: any = 0;
  constructor() {
    makeAutoObservable(this);
  }
  @action addInfo = () => {
    this.info += 1;
  };
}

export default InfoStore;
