import { makeAutoObservable } from "mobx";

type Obj = {
  value: string;
  label: string;
};
type AdvancedData = {
  [x: string]: string | any;
};
interface IExhangeData {
  e_name: string;
  e_website: string;
  e_email: string;
  password?: string;
  password_repeat?: string;
  e_contact_mail: string;
  country: string;
  a_code: string;
  a_city: string;
  a_province: string;
  a_street: string;
  UID?: string;
  avatar?: string;
  e_short_description?: string;
  e_long_description?: string;
  e_socials: AdvancedData;
  e_data: AdvancedData;
}

class ExchangeStore {
  exchangeData: IExhangeData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  handleSetExchangeData = (exchange: IExhangeData | null) => {
    this.exchangeData = exchange;
  };
  handleSetExchangeAvatar = (avatar: string) => {
    if (this.exchangeData) {
      this.exchangeData!.avatar = avatar;
    }
  };
  handleUpdateExchange = (exchange: any) => {
    const {
      e_name,
      e_website,
      e_short_description,
      e_long_description,
      country,
      a_code,
      e_email,
    } = exchange;
    if (this.exchangeData) {
      this.exchangeData!.e_name = e_name;
      this.exchangeData!.e_website = e_website;
      this.exchangeData!.e_short_description = e_short_description;
      this.exchangeData!.e_long_description = e_long_description;
      this.exchangeData!.country = country;
      this.exchangeData!.a_code = a_code;
      this.exchangeData!.e_email = e_email;
    }
  };
  handleSetUpdateContacts = (contacts: any) => {
    if (this.exchangeData) {
      this.exchangeData.e_socials.e_phone = contacts.e_phone;
      this.exchangeData.e_socials.e_whatsapp = contacts.e_whatsapp;
      this.exchangeData.e_socials.e_telegram = contacts.e_telegram;
      this.exchangeData.e_socials.e_twitter = contacts.e_twitter;
      this.exchangeData.e_socials.e_discord = contacts.e_discord;
      this.exchangeData.e_socials.e_instagram = contacts.e_instagram;
      this.exchangeData.e_socials.e_facebook = contacts.e_facebook;
      this.exchangeData.e_socials.e_reddit = contacts.e_reddit;
    }
  };
  handleSetUpdateAdvanched = (advanced: any) => {
    if (this.exchangeData) {
      this.exchangeData.e_data.real_rates = advanced.real_rates;
      this.exchangeData.e_data.evaluate_reg = advanced.evaluate_reg;
      this.exchangeData.e_data.evaluate_tc = advanced.evaluate_tc;
      this.exchangeData.e_data.support_247 = advanced.support_247;
      this.exchangeData.e_data.support_email = advanced.support_email;
      this.exchangeData.e_data.support_call = advanced.support_call;
      this.exchangeData.e_data.support_livechat = advanced.support_livechat;
      this.exchangeData.e_data.support_whatsapp = advanced.support_whatsapp;
      this.exchangeData.e_data.support_resptime = advanced.support_resptime;
      this.exchangeData.e_data.kyc_level = advanced.kyc_level;
      this.exchangeData.e_data.liquidity_volume = advanced.liquidity_volume;
      this.exchangeData.e_data.tf_advancedtt = advanced.tf_advancedtt;
      this.exchangeData.e_data.tf_stoploss = advanced.tf_stoploss;
      this.exchangeData.e_data.tf_limitorders = advanced.tf_limitorders;
      this.exchangeData.e_data.tf_margin = advanced.tf_margin;
      this.exchangeData.e_data.tf_marketorders = advanced.tf_marketorders;
      this.exchangeData.e_data.tf_charting = advanced.tf_charting;
      this.exchangeData.e_data.af_2fa = advanced.af_2fa;
      this.exchangeData.e_data.af_aml = advanced.af_aml;
      this.exchangeData.e_data.af_coldstorage = advanced.af_coldstorage;
      this.exchangeData.e_data.af_whitelisting = advanced.af_whitelisting;
      this.exchangeData.e_data.af_mobileapp = advanced.af_mobileapp;
      this.exchangeData.e_data.af_api = advanced.af_api;
      this.exchangeData.e_data.af_insurance = advanced.af_insurance;
    }
  };
}

export default ExchangeStore;
