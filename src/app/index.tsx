import "shared/styles/index.sass";
import Provider from "./providers";
import { useEffect } from "react";
import { userApi } from "shared/api";
import { useUserStore } from "entities/User";

const App = () => {
  return <Provider />;
};

export default App;
