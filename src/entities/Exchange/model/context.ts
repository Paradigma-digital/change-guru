import { createContext } from "react";

import exchangeStore from "./store";

export const ExchangeStoreContext = createContext<null | exchangeStore>(null);
