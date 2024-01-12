import { FC } from "react";

import s from "./styles.module.sass";

interface IAccordionProps {
  isShow: boolean;
  onClick: () => void;
  title: string;
  text: string;
}

export const Accordion: FC<IAccordionProps> = ({
  isShow,
  onClick,
  title,
  text,
}) => {
  const accordionClass = `${s.accordion} ${isShow ? s.active : ""}`;
  const contentClass = `${s.content} ${isShow ? s.show : ""}`;

  return (
    <div className={accordionClass}>
      <div onClick={onClick} className={s.titleWrapper}>
        <span className={s.title}>{title}</span>
        <div className={s.icon} />
      </div>

      <div className={contentClass}>{text}</div>
    </div>
  );
};
