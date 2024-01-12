import { createContext } from "react";

import modalStore from "./store";

export const UserStoreContext = createContext<null | modalStore>(null);
