import { FC, PropsWithChildren } from "react";

import { RegisterExchangeStoreContext } from "./context";
import RegisterExchangeStore from "./store";

export const RegisterExchangeProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <RegisterExchangeStoreContext.Provider value={new RegisterExchangeStore()}>
      {children}
    </RegisterExchangeStoreContext.Provider>
  );
};
