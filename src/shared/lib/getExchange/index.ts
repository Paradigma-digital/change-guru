import { exchangeApi } from "shared/api";

export const getExchange = async (
  token: string | null,
  setFunc: (exchangeData: any) => void
) => {
  try {
    const { data } = await exchangeApi.getExchange(token);

    const exchangeData = {
      e_name: data.result.user.e_name,
      e_website: data.result.user.e_website,
      e_email: data.result.user.e_email,
      e_contact_mail: data.result.user.e_contact_mail,
      country: data.result.user.country,
      a_code: data.result.user.a_code,
      a_city: data.result.user.a_city,
      a_province: data.result.user.a_province,
      a_street: data.result.user.a_street,
      avatar: data.result.user.e_pic,
      UID: data.result.user.UID,
      e_long_description: data.result.user.e_long_description,
      e_short_description: data.result.user.e_short_description,
      e_socials: {
        e_discord: data.result.user.e_socials?.e_discord,
        e_facebook: data.result.user.e_socials?.e_facebook,
        e_instagram: data.result.user.e_socials?.e_instagram,
        e_phone: data.result.user.e_socials?.e_phone,
        e_reddit: data.result.user.e_socials?.e_reddit,
        e_telegram: data.result.user.e_socials?.e_telegram,
        e_twitter: data.result.user.e_socials?.e_twitter,
        e_whatsapp: data.result.user.e_socials?.e_whatsapp,
      },
      e_data: {
        real_rates: data.result.user.e_data.real_rates,
        evaluate_reg: data.result.user.e_data.evaluate_reg,
        evaluate_tc: data.result.user.e_data.evaluate_tc,
        support_247: data.result.user.e_data.support_247,
        support_email: data.result.user.e_data.support_email,
        support_call: data.result.user.e_data.support_call,
        support_livechat: data.result.user.e_data.support_livechat,
        support_whatsapp: data.result.user.e_data.support_whatsapp,
        support_resptime: data.result.user.e_data.support_resptime,
        kyc_level: data.result.user.e_data.kyc_level,
        liquidity_volume: data.result.user.e_data.liquidity_volume,
        tf_advancedtt: data.result.user.e_data.tf_advancedtt,
        tf_stoploss: data.result.user.e_data.tf_stoploss,
        tf_limitorders: data.result.user.e_data.tf_limitorders,
        tf_margin: data.result.user.e_data.tf_margin,
        tf_marketorders: data.result.user.e_data.tf_marketorders,
        tf_charting: data.result.user.e_data.tf_charting,
        af_2fa: data.result.user.e_data.af_2fa,
        af_aml: data.result.user.e_data.af_aml,
        af_coldstorage: data.result.user.e_data.af_coldstorage,
        af_whitelisting: data.result.user.e_data.af_whitelisting,
        af_mobileapp: data.result.user.e_data.af_mobileapp,
        af_api: data.result.user.e_data.af_api,
        af_insurance: data.result.user.e_data.af_insurance,
      },
    };
    setFunc(exchangeData);
  } catch (e) {
    console.log("exchange error", e);
  }
};
