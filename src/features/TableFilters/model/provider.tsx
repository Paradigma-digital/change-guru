import { FC, PropsWithChildren } from "react";

import { TableFiltersStoreContext } from "./context";
import TableFiltersStore from "./store";

export const TableFiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TableFiltersStoreContext.Provider value={new TableFiltersStore()}>
      {children}
    </TableFiltersStoreContext.Provider>
  );
};
