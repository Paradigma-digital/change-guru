import { FC, PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ToTopProvider: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
    }, 0);
  }, [pathname]);
  return <>{children}</>;
};

export default ToTopProvider;
