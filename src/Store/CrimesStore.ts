import { action, entries, flow, makeAutoObservable, observable } from "mobx";
import axios from "axios";
import { Crime } from "components/Crimes/Crime";

export const url = "https://data.police.uk/api";
class CrimesStore {
  @observable info: any = 0;
  @observable array: any = ["william", "alex"];
  @observable category: any[] = [];
  @observable Crimes: any[] = [];
  @observable ListCrimes: any[] = [];
  @observable cat: any = "";
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
    let cont = 0;
    let aux: any = {};
    response.data.forEach((element, i) => {
      if (cont < 3) {
        aux[`${i}`] = element;
        cont++;
      } else {
        cont = 0;
        this.Crimes.push(aux);
        aux = {};
      }
    });
    this.ListCrimes.push(response.data);
  };
  @action setCrimes(value: string) {
    let test = this.Crimes.filter((cri) => {
      return cri.category == value;
    });
    this.Crimes = test;
  }
  @action setCat(value) {
    this.cat = value;
    let cont = 0;
    let aux: any = {};
    if (value === "all-crime") {
      this.ListCrimes[0].forEach((element, i) => {
        if (cont < 3) {
          aux[`${i}`] = element;
          cont++;
        } else {
          cont = 0;
          this.Crimes.push(aux);
          aux = {};
        }
      });
    } else {
      let test = this.ListCrimes[0].filter((c: any) => c.category === value);
      this.Crimes = [];
      test.forEach((element, i) => {
        if (cont < 3) {
          aux[`${i}`] = element;
          cont++;
        } else {
          cont = 0;
          this.Crimes.push(aux);
          aux = {};
        }
      });
    }
  }
}

export default CrimesStore;
