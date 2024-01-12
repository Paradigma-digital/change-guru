import { useContext } from "react";

import { TableFiltersStoreContext } from "./context";

export const useTableFiltersStore = () => {
  const store = useContext(TableFiltersStoreContext);
  if (!store) {
    throw new Error("Table Filters Store has not been installed");
  }

  return store;
};
