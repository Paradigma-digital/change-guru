import { Dispatch, FC, SetStateAction, useState } from "react";

import s from "./styles.module.sass";

import { Button } from "../Button";

interface IPaginationProps {
  page: number;
  totalPages: number;
  decPage: Dispatch<SetStateAction<number>>;
  incPage: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<IPaginationProps> = ({
  page,
  totalPages,
  decPage,
  incPage,
}) => {
  return (
    <div className={s.pagination}>
      <Button onClick={decPage} variant="clear" disable={page === 1}>
        prev
      </Button>
      <span className={s.page}>{page}</span>
      <Button
        onClick={incPage}
        variant="clear"
        disable={page === totalPages || totalPages === 0}
      >
        next
      </Button>
    </div>
  );
};
