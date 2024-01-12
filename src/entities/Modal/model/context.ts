import { createContext } from "react";

import modalStore from "./store";

export const ModalStoreContext = createContext<null | modalStore>(null);
