import { action, entries, flow, makeAutoObservable, observable } from "mobx";

class InfoStore {
  @observable info: any = 0;
  @observable array: any = ["william", "alex"];
  constructor() {
    makeAutoObservable(this);
  }
  @action addInfo = () => {
    this.info += 1;
    entries(this.array).map((e) => {
      console.log(" e ", e);
    });
  };

  someAction = flow(function* () {
    const response = yield fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response.response);
  });
}

export default InfoStore;
