import { makeAutoObservable } from "mobx";
import { ExchangeFeatures } from "widgets/ExchangeTable/ui/ExchangeTable/ExchangeTable";

class TableFiltersInfo {
  filters: ExchangeFeatures = {
    af_aml: false,
    af_2fa: false,
    af_mobileapp: false,
    af_whitelisting: false,
    af_apiaccess: false,
    af_insurancecoverage: false,
    cs_email: false,
    cs_callcenter: false,
    cs_24support: false,
    cs_whatsapp: false,
    cs_livechat: false,
    tf_stoplossorders: false,
    tf_marketorders: false,
    tf_margintrading: false,
    tf_advancedtradingtool: false,
    tf_chartingtools: false,
    tf_limitorders: false,
    support_resptime: "",
    kyc_level: "",
    liquidity_volume: "",
  };

  search = "";

  constructor() {
    makeAutoObservable(this);
  }

  handleChangeFilters(filters: any) {
    this.filters = filters;
  }

  handleSearch(text: string) {
    this.search = text;
  }
}

export default TableFiltersInfo;
