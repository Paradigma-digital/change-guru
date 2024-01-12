import { useLocation, useNavigate } from "react-router-dom";
import { PATH_PAGE } from "shared/config";
import s from "./styles.module.sass";
import { useMenuStore } from "features/Burger";

export const Logo = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { handleOpenMenu } = useMenuStore();

  const handleClickLogo = () => {
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      handleOpenMenu(false);
    } else {
      navigate(PATH_PAGE.root);
    }
  };

  return (
    <div onClick={handleClickLogo} className={s.logoWrapper}>
      <img src="logo.png" alt="logo" className={s.logo} />
      <img src="logo-min.png" alt="logo" className={s.logoMin} />
    </div>
  );
};
