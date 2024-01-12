import { makeAutoObservable } from "mobx";

class FiltersStore {
  loginModalIsOpen = false;
  recoveryModalIsOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleOpenLoginModal = () => {
    this.loginModalIsOpen = !this.loginModalIsOpen;
  };
  handleOpenRecoveryModal = () => {
    this.recoveryModalIsOpen = !this.recoveryModalIsOpen;
  };
}

export default FiltersStore;
