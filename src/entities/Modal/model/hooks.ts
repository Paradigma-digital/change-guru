import { useContext } from "react";

import { ModalStoreContext } from "./context";

export const useModalStore = () => {
  const store = useContext(ModalStoreContext);
  if (!store) {
    throw new Error("Modal Store has not been installed");
  }

  return store;
};
