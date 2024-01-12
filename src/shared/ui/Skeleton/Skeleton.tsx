import { FC, CSSProperties } from "react";

import s from "./styles.module.sass";

export interface ISkeletonProps {
  customStyles: CSSProperties;
}

export const Skeleton: FC<ISkeletonProps> = ({ customStyles }) => {
  return <span style={{ ...customStyles }} className={s.skeleton} />;
};
