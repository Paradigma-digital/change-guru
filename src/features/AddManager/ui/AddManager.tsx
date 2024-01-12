import { FC } from "react";

import s from "./styles.module.sass";

import { Button, PlusIcon } from "shared/ui";

interface IAddManagerProps {
  manager?: string;
  className?: string;
}

export const AddManager: FC<IAddManagerProps> = ({ manager, className }) => {
  const addManagerClass = `${s.addManager} ${className ? className : ""}`;
  return (
    <div className={s.addManagerWrapper}>
      <div className={addManagerClass}>
        <span>{manager ? manager : "Add  Manager E-Mail"}</span>
        {!manager ? <PlusIcon /> : null}
      </div>
      {manager ? <Button onClick={() => {}}>Delete</Button> : null}
    </div>
  );
};
