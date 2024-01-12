import { FC, useState } from "react";

import s from "./styles.module.sass";

import { PulseLoader } from "react-spinners";
import { TableRow } from "../TableRow/TableRow";
import { IExchange } from "../ExchangeTable/ExchangeTable";

interface ITableBodyProps {
  isLoading: boolean;
  currentItems: IExchange[];
}

export const TableBody: FC<ITableBodyProps> = ({ isLoading, currentItems }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleAddFavorite = (index: number) => {
    if (favorites.includes(index)) {
      const filter = favorites.filter((favorite) => favorite !== index);
      setFavorites(filter);
    } else {
      setFavorites((prev) => [...prev, index]);
    }
  };

  return (
    <tbody>
      {isLoading ? null : (
        <>
          {currentItems.map((item, index) => (
            <TableRow
              key={item.name}
              item={item}
              handleAddFavorite={() => handleAddFavorite(index)}
              isFavorite={favorites.includes(index)}
            />
          ))}
        </>
      )}
    </tbody>
  );
};
