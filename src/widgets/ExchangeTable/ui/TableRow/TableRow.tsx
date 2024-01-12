import { FC } from "react";
import { IExchange } from "../ExchangeTable/ExchangeTable";
import { observer } from "mobx-react-lite";
import { useConverterStore } from "features/Converter";
import { OutlineHeartIcon } from "shared/ui";
import s from "./styles.module.sass";
interface ItableRowProps {
  item: IExchange;
  isFavorite: boolean;
  handleAddFavorite: any;
}

export const TableRow: FC<ItableRowProps> = observer(
  ({ item, handleAddFavorite, isFavorite }) => {
    const converterStore = useConverterStore();

    return (
      <tr>
        <td>
          <img src={item.logo} alt="exchange" />
        </td>
        <td onClick={() => window.open(item.url)}>{item.name}</td>
        <td onClick={() => window.open(item.url)}>
          {converterStore.converterInfo.haveCount} {item.info.from}
        </td>
        <td onClick={() => window.open(item.url)}>
          {item.info.price * +converterStore.converterInfo.haveCount} {item.info.to}
        </td>
        <td onClick={() => window.open(item.url)}>
          {item.info.volume} {item.info.to}
        </td>
        <td onClick={() => window.open(item.url)}>{item.total_liquidity} $</td>
        <td onClick={() => window.open(item.url)}>{item.kyc}</td>
        <td onClick={() => window.open(item.url)}>{item.ratings}</td>
        <td onClick={() => window.open(item.url)}>{item.popularity}</td>
        <td onClick={handleAddFavorite} className={isFavorite ? s.actvie : ""}>
          <OutlineHeartIcon />
        </td>
      </tr>
    );
  }
);
