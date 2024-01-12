import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";

import { CustomerService } from "../CustomerService/CustomerService";
import { TradingFeatures } from "../TradingFeatures/TradingFeatures";
import { AdvancedFeatures } from "../AdvancedFeatures/AdvancedFeatures";
import { Settings } from "../Settings/Settings";
import { useTableFiltersStore } from "features/TableFilters";
import { useExchangeStore } from "entities/Exchange";

interface IFiltersProps {
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export const Filters: FC<IFiltersProps> = observer(({ isOpen, handleOpen }) => {
  const store = useTableFiltersStore();
  const { exchangeData } = useExchangeStore();
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      af_2fa: false,
      af_aml: false,
      af_whitelisting: false,
      af_mobileapp: false,
      af_apiaccess: false,
      af_insurancecoverage: false,
      cs_24support: false,
      cs_email: false,
      cs_callcenter: false,
      cs_livechat: false,
      cs_whatsapp: false,
      tf_advancedtradingtool: false,
      tf_stoplossorders: false,
      tf_limitorders: false,
      tf_margintrading: false,
      tf_marketorders: false,
      tf_chartingtools: false,
      support_resptime: "",
      kyc_level: "",
      liquidity_volume: "",
    },
  });

  useEffect(() => {
    if (exchangeData) {
      setValue("support_resptime", exchangeData.e_data.support_resptime);
      setValue("kyc_level", exchangeData.e_data.kyc_level);
      setValue("liquidity_volume", exchangeData.e_data.liquidity_volume);
    }
  }, [exchangeData, setValue]);

  const onSubmit = (data: any) => {
    const {
      af_aml,
      af_2fa,
      af_whitelisting,
      af_mobileapp,
      af_apiaccess,
      af_insurancecoverage,
      cs_24support,
      cs_email,
      cs_callcenter,
      cs_livechat,
      cs_whatsapp,
      tf_advancedtradingtool,
      tf_stoplossorders,
      tf_limitorders,
      tf_margintrading,
      tf_marketorders,
      tf_chartingtools,
      support_resptime,
      kyc_level,
      liquidity_volume,
    } = data;
    const filterData = {
      af_aml,
      af_2fa,
      af_whitelisting,
      af_mobileapp,
      af_apiaccess,
      af_insurancecoverage,
      cs_24support,
      cs_email,
      cs_callcenter,
      cs_livechat,
      cs_whatsapp,
      tf_advancedtradingtool,
      tf_stoplossorders,
      tf_limitorders,
      tf_margintrading,
      tf_marketorders,
      tf_chartingtools,
      support_resptime: support_resptime.value,
      kyc_level: kyc_level.value,
      liquidity_volume: liquidity_volume.value,
    };

    store.handleChangeFilters(filterData);
  };

  const handleReset = () => {
    reset();
  };

  const filtersClass = `${s.filters} ${isOpen ? s.active : ""}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={filtersClass}>
      <div className={s.leftPart}>
        <CustomerService control={control} />
        <TradingFeatures control={control} />
        <AdvancedFeatures control={control} />
      </div>
      <div className={s.separator} />
      <div className={s.rightPart}>
        <Settings
          handleOpen={handleOpen}
          reset={handleReset}
          control={control}
        />
      </div>
    </form>
  );
});
