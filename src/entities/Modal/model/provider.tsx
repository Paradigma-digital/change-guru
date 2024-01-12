import { FC, PropsWithChildren } from "react";

import { ModalStoreContext } from "./context";
import ModalStore from "./store";

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ModalStoreContext.Provider value={new ModalStore()}>
      {children}
    </ModalStoreContext.Provider>
  );
};
