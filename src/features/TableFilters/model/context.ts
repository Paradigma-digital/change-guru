import { createContext } from "react";

import tableFiltersStore from "./store";

export const TableFiltersStoreContext = createContext<null | tableFiltersStore>(
  null
);
