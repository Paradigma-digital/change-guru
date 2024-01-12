import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";

import { Button, FiltersIcon, Input, SearchIcon } from "shared/ui";
import { Filters } from "../Filters/Filters";
import { useDebounce } from "shared/lib";
import { coinsApi } from "shared/api";
import { useTableFiltersStore } from "features/TableFilters";

export const TableFilters = observer(() => {
  const [filtersIsOpen, setOpenFilter] = useState(false);

  const store = useTableFiltersStore();

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      search: "",
    },
  });

  const WatchSearch = watch("search");

  const debounced = useDebounce(WatchSearch);

  useEffect(() => {
    store.handleSearch(debounced);
  }, [debounced]);

  const filterBtnClass = `${s.fiterBtn} ${filtersIsOpen ? s.active : ""}`;

  return (
    <div className={s.tableFilters}>
      <div className={s.top}>
        <Button
          onClick={() => setOpenFilter((prev) => !prev)}
          variant="clear"
          className={filterBtnClass}
        >
          <FiltersIcon />
          <span>Advanced Filters</span>
        </Button>
        <Input
          id="search"
          register={register}
          placeholder="search"
          className={s.search}
          icon={<SearchIcon />}
        />
      </div>
      <div className={s.filtersContent}>
        <Filters handleOpen={setOpenFilter} isOpen={filtersIsOpen} />
      </div>
    </div>
  );
});
