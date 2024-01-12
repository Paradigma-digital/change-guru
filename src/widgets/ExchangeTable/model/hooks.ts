import { useConverterStore } from "features/Converter";
import { useEffect, useState } from "react";
import { ratesApi } from "shared/api";
import { IExchange } from "../ui/ExchangeTable/ExchangeTable";

interface IUseGetRatesProps {
  from: string;
  to: string;
}

export const useGetRates = (props: IUseGetRatesProps) => {
  const { from, to } = props;

  const [exchanges, setExchanges] = useState<IExchange[]>([]);
  const [isLoading, setLoding] = useState<boolean>(true);

  const converterStore = useConverterStore();

  const handleGetRates = async () => {
    setLoding(true);
    try {
      const { data } = await ratesApi.getRates({
        from,
        to,
      });
      setExchanges(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    if (!from || !to) {
      setLoding(false);
      return;
    }
    handleGetRates();
  }, [converterStore.converterInfo.have, converterStore.converterInfo.want]);

  return {
    exchanges,
    isLoading,
  };
};
