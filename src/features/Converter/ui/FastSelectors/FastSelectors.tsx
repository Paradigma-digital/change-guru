import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";

import { useConverterStore, useGetTopCoins } from "features/Converter";
import { SelectorsList } from "../SelectorsList/SelectorsList";

export const FastSelectors = observer(() => {
  const store = useConverterStore();

  const { isLoading, topCoins } = useGetTopCoins();

  const handleSetHave = (coin: string) => {
    store.handleSetHave(coin);
  };
  const handleSetWant = (coin: string) => {
    store.handleSetWant(coin);
  };

  return (
    <div className={s.selectors}>
      <div className={s.top}>
        <span className={s.title}>I Have</span>
        <SelectorsList
          topCoins={topCoins}
          handleSetCoin={handleSetHave}
          isLoading={isLoading}
          type={store.have}
        />
      </div>
      <div className={s.bottom}>
        <span className={s.title}>I Want</span>
        <SelectorsList
          topCoins={topCoins}
          handleSetCoin={handleSetWant}
          isLoading={isLoading}
          type={store.want}
        />
      </div>
    </div>
  );
});
