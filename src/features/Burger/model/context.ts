import { createContext } from "react";

import menuStore from "./store";

export const MenuStoreContext = createContext<null | menuStore>(null);
