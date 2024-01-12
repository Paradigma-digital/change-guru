import { makeAutoObservable } from "mobx";

type ConverterInfo = {
  have: string;
  want: string;
  haveCount: string;
};

class ConverterStore {
  have = "";
  haveCount: any = 0;
  want = "";
  converterInfo: ConverterInfo = { have: "", haveCount: "0", want: "" };

  constructor() {
    makeAutoObservable(this);
  }

  handleSetHave(have: string) {
    if (have === this.want) return;
    this.have = have;
  }
  handleSetHaveCount(count: string) {
    this.haveCount = count;
  }
  handleSetWant(want: string) {
    if (want === this.have) return;
    this.want = want;
  }
  handleSetConverterInfo(info: ConverterInfo) {
    this.converterInfo = info;
  }
}

export default ConverterStore;
