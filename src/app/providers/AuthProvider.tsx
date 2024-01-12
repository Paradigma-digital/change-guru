import { useExchangeStore } from "entities/Exchange";
import { useUserStore } from "entities/User";
import { observer } from "mobx-react-lite";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { exchangeApi, userApi } from "shared/api";
import { getExchange, getUser } from "shared/lib";
const AuthProvider: FC<PropsWithChildren> = observer(({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { handleSetUserData } = useUserStore();
  const { handleSetExchangeData } = useExchangeStore();

  useEffect(() => {
    if (localStorage.getItem("token") && location.pathname === "/register") {
      navigate("/");
    }

    if (
      !localStorage.getItem("token") &&
      location.pathname === "/user-profile"
    ) {
      navigate("/");
    }
    if (
      !localStorage.getItem("token") &&
      location.pathname === "/exchange-profile"
    ) {
      navigate("/");
    }
  }, [location, navigate]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("authType") === "user") {
        getUser(localStorage.getItem("token"), handleSetUserData);
      } else {
        getExchange(localStorage.getItem("token"), handleSetExchangeData);
      }
    }
  }, [handleSetExchangeData, handleSetUserData]);
  return <>{children}</>;
});

export default AuthProvider;
