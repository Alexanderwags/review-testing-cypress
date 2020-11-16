import { action, entries, flow, makeAutoObservable, observable } from "mobx";
import axios from "axios";
import { Crime } from "components/Crimes/Crime";

export const url = "https://data.police.uk/api";
class CrimesStore {
  @observable info: any = 0;
  @observable array: any = ["william", "alex"];
  @observable category: any[] = [];
  @observable Crimes: Crime[] = [];
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
  requestCategories = async (url: string) => {
    let response: any = await axios.get(url);
    this.category = response.data;
  };
  requestAllCrimes = async (url: string) => {
    let response = await axios.get(url);
    this.Crimes = response.data;
  };
}

export default CrimesStore;
