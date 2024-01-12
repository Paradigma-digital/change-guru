import { makeAutoObservable } from "mobx";

class MenuStore {
  menuIsOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleOpenMenu = (type: boolean) => {
    this.menuIsOpen = type;
  };
}

export default MenuStore;
