import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { navigationList } from "shared/config";
import { PATH_PAGE } from "shared/config";
import { useModalStore } from "entities/Modal";

import s from "./styles.module.sass";

import { Button, LogoutIcon, Skeleton, UserIcon } from "shared/ui";
import { BurgerIcon } from "shared/ui/BurgerIcon";
import { Burger } from "features/Burger";
import { Logo } from "entities/Logo";
import { useUserStore } from "entities/User";
import { useExchangeStore } from "entities/Exchange";

export const Header = observer(() => {
  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const { handleOpenLoginModal } = useModalStore();
  const { userData, handleSetUserData } = useUserStore();
  const { exchangeData } = useExchangeStore();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  const headerClass = `${s.header} ${active ? s.active : ""} container`;
  const authType = localStorage.getItem("authType");

  return (
    <header className={headerClass}>
      <Logo />
      <nav className={s.navigation}>
        {navigationList.map((nav) => (
          <NavLink key={nav.link} to={nav.link} className={s.navLink}>
            {nav.title}
          </NavLink>
        ))}
      </nav>
      {!localStorage.getItem("token") ? (
        <div className={s.auth}>
          <Button
            onClick={handleOpenLoginModal}
            variant="clear"
            className={s.loginBtn}
          >
            Log In
          </Button>
          <Button
            onClick={() => navigate(PATH_PAGE.register)}
            className={s.registerBtn}
          >
            Register
          </Button>
          <Burger />
        </div>
      ) : (
        <div className={s.user}>
          <NavLink
            to={
              authType === "user"
                ? PATH_PAGE.userProfile
                : PATH_PAGE.exchangeProfile
            }
            className={s.userInfo}
          >
            <div className={s.imageWrapper}>
              {authType === "user" ? (
                <>
                  {!userData?.avatar ? (
                    <div className={s.userIconWrapper}>
                      <UserIcon />
                    </div>
                  ) : (
                    <img
                      src={`https://api.changeguru.io/static/img/${userData.avatar}`}
                      alt="user"
                    />
                  )}
                </>
              ) : (
                <>
                  {!exchangeData?.avatar ? (
                    <div className={s.userIconWrapper}>
                      <UserIcon />
                    </div>
                  ) : (
                    <img
                      src={`https://api.changeguru.io/static/img/${exchangeData.avatar}`}
                      alt="exchange"
                    />
                  )}
                </>
              )}
            </div>
            <p className={s.name}>
              {authType === "user" ? (
                <>
                  {!userData?.first_name ? (
                    <Skeleton
                      customStyles={{ width: "150px", height: "20px" }}
                    />
                  ) : (
                    <>
                      {userData?.first_name} {userData?.last_name}
                    </>
                  )}
                </>
              ) : (
                <>
                  {!exchangeData?.e_name ? (
                    <Skeleton
                      customStyles={{ width: "150px", height: "20px" }}
                    />
                  ) : (
                    <>{exchangeData?.e_name}</>
                  )}
                </>
              )}
            </p>
          </NavLink>

          <Button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("authType");
              handleSetUserData(null);
              navigate(PATH_PAGE.root);
            }}
            className={s.logoutBtn}
            variant="clear"
          >
            <LogoutIcon />
            <span>Log Out</span>
          </Button>
        </div>
      )}
    </header>
  );
});
