import { FC } from "react";

import s from "./styles.module.sass";

interface IFastSelectorItemProps {
  img: string;
  title: string;
  reduction: string;
  isActive?: boolean;
}

export const FastSelectorItem: FC<IFastSelectorItemProps> = ({
  img,
  title,
  reduction,
  isActive,
}) => {
  const fastSelectorItemClass = `${s.fastSelectorItem} ${
    isActive ? s.active : ""
  }`;
  return (
    <div className={s.fastSelectorItem}>
      <img src={img} alt={reduction} />
      <p>{title}</p>
      <div className={s.separator} />
      <span>{reduction}</span>
    </div>
  );
};
