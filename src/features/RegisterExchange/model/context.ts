import { createContext } from "react";

import RegisterExchangeStore from "./store";

export const RegisterExchangeStoreContext =
  createContext<null | RegisterExchangeStore>(null);
