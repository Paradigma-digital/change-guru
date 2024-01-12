import { FC, ReactNode, useEffect } from "react";

import s from "./styles.module.sass";

interface IBackdropProps {
  children: ReactNode;
  show: boolean;
  handleClose: () => void;
}

export const Backdrop: FC<IBackdropProps> = ({
  children,
  show,
  handleClose,
}) => {
  const backdropClass = `${s.backdrop} ${show ? s.show : ""}`;

  useEffect(() => {
    if (show) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [show]);

  return (
    <div className={backdropClass} onClick={handleClose}>
      {children}
    </div>
  );
};
