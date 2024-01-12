import { FC } from "react";

import s from "./styles.module.sass";

interface IHowItWorkCardProps {
  img: string;
  step: number;
  title: string;
  description: string;
}

export const HowItWorkCard: FC<IHowItWorkCardProps> = ({
  img,
  step,
  title,
  description,
}) => {
  return (
    <div className={s.card}>
      <img src={img} alt={title} />
      <div className={s.text}>
        <span className={s.step}>step {step}</span>
        <span className={s.title}>{title}</span>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
