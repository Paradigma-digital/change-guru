import { FC, PropsWithChildren } from "react";

import { MenuStoreContext } from "./context";
import MenuStore from "./store";

export const MenuProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MenuStoreContext.Provider value={new MenuStore()}>
      {children}
    </MenuStoreContext.Provider>
  );
};
