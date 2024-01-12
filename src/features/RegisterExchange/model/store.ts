import { makeAutoObservable } from "mobx";

type dataType = {
  [x: string]: string;
};
class RegisterExchangeStore {
  exchangeData: dataType = {};

  constructor() {
    makeAutoObservable(this);
  }

  handleSetData(data: dataType) {
    this.exchangeData = data;
  }
}

export default RegisterExchangeStore;
