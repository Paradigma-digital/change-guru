import { FC } from "react";
import { SortBy } from "../ExchangeTable/ExchangeTable";
import s from "./styles.module.sass";

import { SortingIcon } from "shared/ui";

interface ITableHeadeProps {
  sortBy: SortBy;
  handleSort: (sort: SortBy) => void;
}

export const TableHead: FC<ITableHeadeProps> = ({ sortBy, handleSort }) => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Exchange</th>
        <th>I Have</th>
        <th
          className={`${s.sort} ${sortBy === "recieve" ? s.active : ""}`}
          onClick={() => handleSort("recieve")}
        >
          <SortingIcon /> I will Recieve
        </th>
        <th
          className={`${s.sort} ${sortBy === "volume" ? s.active : ""}`}
          onClick={() => handleSort("volume")}
        >
          <SortingIcon /> 24H Volume
        </th>
        <th
          className={`${s.sort} ${sortBy === "liqudity" ? s.active : ""}`}
          onClick={() => handleSort("liqudity")}
        >
          <SortingIcon /> Total Liqudity
        </th>
        <th>KYC Level</th>
        <th>Ratings</th>
        <th>Popularity</th>
        <th>Vote</th>
      </tr>
    </thead>
  );
};
