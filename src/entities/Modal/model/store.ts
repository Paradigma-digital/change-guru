import { makeAutoObservable } from "mobx";

class ModalStore {
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

export default ModalStore;
