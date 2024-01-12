import { useContext } from "react";

import { MenuStoreContext } from "./context";

export const useMenuStore = () => {
  const store = useContext(MenuStoreContext);
  if (!store) {
    throw new Error("Menu Store has not been installed");
  }

  return store;
};
