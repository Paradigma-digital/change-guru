import { FC, PropsWithChildren } from "react";

import { UserStoreContext } from "./context";
import UserStore from "./store";

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <UserStoreContext.Provider value={new UserStore()}>
      {children}
    </UserStoreContext.Provider>
  );
};
