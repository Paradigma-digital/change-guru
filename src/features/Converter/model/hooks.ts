import { useContext, useEffect, useState } from "react";

import { ConverterStoreContext } from "./context";
import { coinsApi } from "shared/api";

export const useConverterStore = () => {
  const store = useContext(ConverterStoreContext);
  if (!store) {
    throw new Error("Converter Store has not been installed");
  }

  return store;
};

export const useGetTopCoins = () => {
  const [topCoins, setTopCoins] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(true);

  const handleGetTopCoins = async () => {
    setLoading(true);
    try {
      const { data } = await coinsApi.getTopCoins();
      setTopCoins(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetTopCoins();
  }, []);

  return {
    topCoins,
    isLoading,
  };
};

type AllCoins = {
  value: string;
  label: string;
};

export const useGetAllCoins = () => {
  const [allCoins, setAllCoins] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(true);

  const handleGetAllCoins = async () => {
    setLoading(true);
    try {
      const { data } = await coinsApi.getAllCoins();
      setAllCoins(data);
    } catch (e) {
      console.error("error", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllCoins();
  }, []);

  return {
    allCoins,
    isLoading,
  };
};
