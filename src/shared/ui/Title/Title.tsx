import { FC, ReactNode } from "react";

import s from "./styles.module.sass";

interface ITitleProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({
  variant = "h1",
  children,
  className,
  onClick,
}) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  const titleClass = `${s.title} ${s[variant]} ${className}`;

  return (
    <Tag onClick={onClick} className={titleClass}>
      {children}
    </Tag>
  );
};
