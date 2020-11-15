import { action, entries, flow, makeAutoObservable, observable } from "mobx";
import axios from "axios";
export const url = "https://data.police.uk/api";
class CrimesStore {
  @observable info: any = 0;
  @observable array: any = ["william", "alex"];
  @observable category: any[] = [];
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
  });
  requestCategories = async () => {
    this.category = await axios.get(
      `${url}/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10`
    );
    console.log("category ", this.category);
  };
}

export default CrimesStore;
