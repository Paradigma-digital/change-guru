import { useContext } from "react";

import { ExchangeStoreContext } from "./context";

export const useExchangeStore = () => {
  const store = useContext(ExchangeStoreContext);
  if (!store) {
    throw new Error("Exchange Store has not been installed");
  }

  return store;
};
