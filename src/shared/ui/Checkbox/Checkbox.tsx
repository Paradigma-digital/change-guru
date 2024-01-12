import { FC } from "react";

import s from "./styles.module.sass";

interface IChecboxProps {
  id: string;
  onChange?: () => void;
  value?: boolean;
}

export const Checkbox: FC<IChecboxProps> = ({ id, onChange, value }) => {
  return (
    <input
      onChange={onChange}
      id={id}
      name={id}
      type="checkbox"
      className={s.input}
      checked={value}
    />
  );
};
