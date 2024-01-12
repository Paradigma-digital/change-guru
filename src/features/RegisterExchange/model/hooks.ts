import { useContext, useEffect, useState } from "react";

import { RegisterExchangeStoreContext } from "./context";
import { coinsApi } from "shared/api";

export const useRegisterExchangeStore = () => {
  const store = useContext(RegisterExchangeStoreContext);
  if (!store) {
    throw new Error("Register Exchange Store has not been installed");
  }

  return store;
};
