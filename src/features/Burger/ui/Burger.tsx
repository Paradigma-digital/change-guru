import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";

import { Button } from "shared/ui";
import { BurgerIcon } from "shared/ui/BurgerIcon";
import { useMenuStore } from "../model";

export const Burger = observer(() => {
  const { handleOpenMenu } = useMenuStore();

  return (
    <Button
      onClick={() => handleOpenMenu(true)}
      className={s.burger}
      variant="clear"
    >
      <BurgerIcon />
    </Button>
  );
});
