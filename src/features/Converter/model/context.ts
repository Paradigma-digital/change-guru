import { createContext } from "react";

import converterStore from "./store";

export const ConverterStoreContext = createContext<null | converterStore>(null);
