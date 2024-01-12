import { FC } from "react";

import s from "./styles.module.sass";

import { Button, Skeleton } from "shared/ui";

interface ISelectorsListProps {
  isLoading: boolean;
  handleSetCoin: (coin: string) => void;
  topCoins: any;
  type: string;
}

export const SelectorsList: FC<ISelectorsListProps> = ({
  isLoading,
  handleSetCoin,
  topCoins,
  type,
}) => {
  return (
    <div className={s.selectorsList}>
      {isLoading ? (
        <>
          {[...Array(7)].map((_, index) => (
            <Skeleton
              key={index}
              customStyles={{
                width: "60px",
                height: "48px",
                borderRadius: "15px",
              }}
            />
          ))}
        </>
      ) : (
        <>
          {topCoins.map((coin: any) => {
            const coinClass = `${s.coinItem} ${coin === type ? s.active : ""}`;
            return (
              <Button
                key={coin}
                className={coinClass}
                onClick={() => handleSetCoin(coin)}
                variant="clear"
              >
                {coin}
              </Button>
            );
          })}
        </>
      )}
    </div>
  );
};
