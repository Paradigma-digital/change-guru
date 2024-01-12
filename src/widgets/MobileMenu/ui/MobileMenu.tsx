import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { useMenuStore } from "features/Burger";

import s from "./styles.module.sass";

import { Backdrop } from "shared/ui";
import { NavLink, useLocation } from "react-router-dom";
import { navigationList } from "shared/config";
import { Logo } from "entities/Logo";

export const MobileMenu = observer(() => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  const { menuIsOpen, handleOpenMenu } = useMenuStore();

  useEffect(() => {
    setShowMenu(menuIsOpen);
  }, [menuIsOpen]);

  const handleClose = () => {
    setShowMenu(false);

    setTimeout(() => {
      handleOpenMenu(false);
    }, 300);
  };

  useEffect(() => {
    handleOpenMenu(false);
  }, [pathname]);

  return (
    <Backdrop handleClose={handleClose} show={showMenu}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${s.menu} ${showMenu ? s.active : ""}`}
      >
        <Logo />
        <div className={s.menuContent}>
          {navigationList.map((nav) => (
            <NavLink
              key={nav.link}
              to={nav.link}
              className={`${s.navLink} ${
                nav.link === pathname ? s.active : ""
              }`}
            >
              {nav.title}
            </NavLink>
          ))}
        </div>
      </div>
    </Backdrop>
  );
});
