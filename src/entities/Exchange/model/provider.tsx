import { FC, PropsWithChildren } from "react";

import { ExchangeStoreContext } from "./context";
import ExchangeStore from "./store";

export const ExchangeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ExchangeStoreContext.Provider value={new ExchangeStore()}>
      {children}
    </ExchangeStoreContext.Provider>
  );
};
