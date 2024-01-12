import { FC, PropsWithChildren } from "react";

import { ConverterStoreContext } from "./context";
import ConverterStore from "./store";

export const ConverterProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConverterStoreContext.Provider value={new ConverterStore()}>
      {children}
    </ConverterStoreContext.Provider>
  );
};
