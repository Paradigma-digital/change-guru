import { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";

import { Pagination, SortingIcon, Title } from "shared/ui";
import { TableFilters, useTableFiltersStore } from "features/TableFilters";
import { useConverterStore } from "features/Converter";
import { useGetRates } from "../../model";
import { TableBody } from "../TableBody/TableBody";
import { TableHead } from "../TableHead/TableHead";
import { PulseLoader } from "react-spinners";
import { table } from "shared/config";

export interface IExchange {
  name: string;
  url: string;
  logo: string;
  total_liquidity: string;
  kyc: "High" | "Medium" | "Low";
  ratings: "AAA" | "B" | "C" | "-";
  popularity: string;
  features: ExchangeFeatures[];
  info: Info;
}

export type ExchangeFeatures = {
  [x: string]: boolean | string;
};

type Info = {
  from: string;
  to: string;
  price: number;
  volume: number;
};

export type SortBy = "default" | "recieve" | "volume" | "liqudity";
type SortType = "asc" | "desc";

export const ExchangeTable = observer(() => {
  const [sortBy, setSortBy] = useState<SortBy>("default");
  const [sortType, setSortType] = useState<SortType>("desc");
  const [prevSort, setPrevSort] = useState<SortBy>("default");
  const [currentPage, setCurrentPage] = useState(1);

  const converterStore = useConverterStore();
  const filtersStore = useTableFiltersStore();

  const { exchanges, isLoading } = useGetRates({
    from: converterStore.converterInfo.have,
    to: converterStore.converterInfo.want,
  });

  const filteredExchanges = useMemo(() => {
    const advancedFilters = exchanges?.filter((exchange) => {
      const objFilters = Object.keys(filtersStore.filters).some((filterKey) => {
        return (
          filtersStore.filters[filterKey] &&
          //@ts-ignore
          exchange.features.includes(filterKey)
        );
      });
      return objFilters;
    });
    console.log("advancedFilters", advancedFilters);
    const baseArray = advancedFilters.length > 0 ? advancedFilters : exchanges;
    const settingFilters = baseArray?.filter((exchange) => {
      return exchange.kyc === filtersStore.filters.kyc_level && true;
    });

    return [...settingFilters];
  }, [exchanges, filtersStore.filters]);

  const finalExchange =
    filteredExchanges?.length > 0 ? filteredExchanges : exchanges;

  const getSortedExchanges = (
    exchanges: IExchange[],
    sortBy: string,
    sortType: string
  ): IExchange[] => {
    if (!exchanges) return [];

    const sortFunctions: Record<string, () => IExchange[]> = {
      default: () => exchanges,
      recieve: () =>
        sortType === "desc"
          ? exchanges.sort((a, b) => b.info.price - a.info.price)
          : exchanges.sort((a, b) => a.info.price - b.info.price),
      volume: () =>
        sortType === "desc"
          ? exchanges.sort((a, b) => b.info.volume - a.info.volume)
          : exchanges.sort((a, b) => a.info.volume - b.info.volume),
      liqudity: () =>
        exchanges.sort(
          (a: any, b: any) => b.total_liquidity - a.total_liquidity
        ),
    };

    return sortFunctions[sortBy] ? sortFunctions[sortBy]() : [];
  };

  const sortedExchanges = useMemo(() => {
    if (!finalExchange) return [];
    const { search } = filtersStore;
    const filteredExchanges =
      search.length > 0
        ? finalExchange.filter((exchange) =>
            exchange.name.toLowerCase().includes(search.toLowerCase())
          )
        : finalExchange;

    return getSortedExchanges(filteredExchanges, sortBy, sortType);
  }, [filtersStore.search, finalExchange, sortBy, sortType]);

  const handleSort = (sort: SortBy) => {
    setSortBy(sort);
    if (sort === prevSort) {
      setSortType(sortType === "desc" ? "asc" : "desc");
    } else {
      setSortType("desc");
    }
    setPrevSort(sort);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [converterStore.have, converterStore.want]);

  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const totalPages = Math.ceil(sortedExchanges.length / itemsPerPage);
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedExchanges.slice(startIndex, endIndex);

  return (
    <div id="table" className={`${s.exchangeTable} container`}>
      <Title variant="h2">Exchange rates</Title>
      <div className={s.filtersWrapper}>
        <TableFilters />
      </div>
      <div className={s.tableWrapper}>
        <table>
          <TableHead sortBy={sortBy} handleSort={handleSort} />
          <TableBody isLoading={isLoading} currentItems={currentItems} />
        </table>
      </div>
      <div className={s.tableInfo}>
        {isLoading ? (
          <div className={s.loader}>
            <PulseLoader
              color="#21B1AB"
              loading={isLoading}
              size={18}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            {!currentItems || currentItems.length === 0 ? (
              <div className={s.empty}>Exchanges list is empty</div>
            ) : null}
          </>
        )}
      </div>
      <div className={s.paginationWrapper}>
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          decPage={() => setCurrentPage((prev) => prev - 1)}
          incPage={() => {
            setCurrentPage((prev) => prev + 1);
            const table = document.querySelector("#table");
            if (table) table.scrollIntoView();
          }}
        />
      </div>
    </div>
  );
});

export default ExchangeTable;
