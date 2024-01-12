import { FC, useEffect } from "react";

import {
  countryList,
  kycList,
  liquidityList,
  resptimeList,
} from "shared/config";

import s from "./styles.module.sass";

import { Button, Checkbox, CheckboxGroup, Selector } from "shared/ui";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useRegisterExchangeStore } from "features/RegisterExchange";
import { exchangeApi } from "shared/api";
import { useExchangeStore } from "entities/Exchange";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IAdvancedSettingProps {
  onComplite: () => void;
  type?: "register" | "update";
}

export const AdvancedSetting: FC<IAdvancedSettingProps> = ({
  onComplite,
  type = "register",
}) => {
  const store = useRegisterExchangeStore();

  const notify = () =>
    toast.success("the information has been changed", {
      position: "bottom-right",
    });
  const notifyReg = () =>
    toast.success("you have successfully registered", {
      position: "bottom-right",
    });
  const { exchangeData, handleSetExchangeData, handleSetUpdateAdvanched } =
    useExchangeStore();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      real_rates: false,
      evaluate_reg: false,
      evaluate_tc: false,
      support_247: false,
      support_email: false,
      support_call: false,
      support_livechat: false,
      support_whatsapp: false,
      support_resptime: {},
      kyc_level: {},
      liquidity_volume: {},
      tf_advancedtt: false,
      tf_stoploss: false,
      tf_limitorders: false,
      tf_margin: false,
      tf_marketorders: false,
      tf_charting: false,
      af_2fa: false,
      af_aml: false,
      af_coldstorage: false,
      af_whitelisting: false,
      af_mobileapp: false,
      af_api: false,
      af_insurance: false,
    },
  });

  useEffect(() => {
    if (exchangeData && type === "update") {
      setValue("real_rates", exchangeData.e_data.real_rates);
      setValue("evaluate_reg", exchangeData.e_data.evaluate_reg);
      setValue("evaluate_tc", exchangeData.e_data.evaluate_tc);
      setValue("support_247", exchangeData.e_data.support_247);
      setValue("support_email", exchangeData.e_data.support_email);
      setValue("support_call", exchangeData.e_data.support_call);
      setValue("support_livechat", exchangeData.e_data.support_livechat);
      setValue("support_whatsapp", exchangeData.e_data.support_whatsapp);
      setValue("support_resptime", exchangeData.e_data.support_resptime);
      setValue("kyc_level", exchangeData.e_data.kyc_level);
      setValue("liquidity_volume", exchangeData.e_data.liquidity_volume);
      setValue("tf_advancedtt", exchangeData.e_data.tf_advancedtt);
      setValue("tf_stoploss", exchangeData.e_data.tf_stoploss);
      setValue("tf_limitorders", exchangeData.e_data.tf_limitorders);
      setValue("tf_margin", exchangeData.e_data.tf_margin);
      setValue("tf_marketorders", exchangeData.e_data.tf_marketorders);
      setValue("tf_charting", exchangeData.e_data.tf_charting);
      setValue("af_2fa", exchangeData.e_data.af_2fa);
      setValue("af_aml", exchangeData.e_data.af_aml);
      setValue("af_coldstorage", exchangeData.e_data.af_coldstorage);
      setValue("af_whitelisting", exchangeData.e_data.af_whitelisting);
      setValue("af_mobileapp", exchangeData.e_data.af_mobileapp);
      setValue("af_api", exchangeData.e_data.af_api);
      setValue("af_insurance", exchangeData.e_data.af_insurance);
    }
  }, [exchangeData, setValue, type]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const {
        real_rates,
        evaluate_reg,
        evaluate_tc,
        support_247,
        support_email,
        support_call,
        support_livechat,
        support_whatsapp,
        support_resptime,
        kyc_level,
        liquidity_volume,
        tf_advancedtt,
        tf_stoploss,
        tf_limitorders,
        tf_margin,
        tf_marketorders,
        tf_charting,
        af_2fa,
        af_aml,
        af_coldstorage,
        af_whitelisting,
        af_mobileapp,
        af_api,
        af_insurance,
      } = data;

      if (type === "register") {
        const {
          e_name,
          e_website,
          e_email,
          password,
          password_repeat,
          e_contact_mail,
          country,
          a_code,
          a_city,
          a_province,
          a_street,
          UID,
        } = store.exchangeData;

        const additionalData = {
          real_rates,
          evaluate_reg,
          evaluate_tc,
          support_247,
          support_email,
          support_call,
          support_livechat,
          support_whatsapp,
          support_resptime,
          kyc_level,
          liquidity_volume,
          tf_advancedtt,
          tf_stoploss,
          tf_limitorders,
          tf_margin,
          tf_marketorders,
          tf_charting,
          af_2fa,
          af_aml,
          af_coldstorage,
          af_whitelisting,
          af_mobileapp,
          af_api,
          af_insurance,
        };

        const exchangeData = {
          e_name,
          e_website,
          e_email,
          password,
          password_repeat,
          e_contact_mail,
          //@ts-ignore
          country: country.value,
          a_code,
          a_city,
          a_province,
          a_street,
          UID,
          e_data: additionalData,
          e_socials: {},
        };
        const resData = await exchangeApi.registerNewExchange(exchangeData);
        if (resData.code === 200 && resData.status) {
          localStorage.setItem("token", resData.result.auth.auth_hash);
          localStorage.setItem("authType", "exchange");
          handleSetExchangeData(exchangeData);
          notifyReg();
          onComplite();
        }
      } else {
        const ExchangeUpdateData = {
          real_rates,
          evaluate_reg,
          evaluate_tc,
          support_247,
          support_email,
          support_call,
          support_livechat,
          support_whatsapp,
          support_resptime,
          kyc_level,
          liquidity_volume,
          tf_advancedtt,
          tf_stoploss,
          tf_limitorders,
          tf_margin,
          tf_marketorders,
          tf_charting,
          af_2fa,
          af_aml,
          af_coldstorage,
          af_whitelisting,
          af_mobileapp,
          af_api,
          af_insurance,
        };

        notify();
        handleSetUpdateAdvanched(ExchangeUpdateData);
        await exchangeApi.updateAdvancedExchange(
          ExchangeUpdateData,
          localStorage.getItem("token")
        );
      }
    } catch (e) {
      //@ts-ignore
      const messageErr = e.response.data.result.message;
      const notifyErr = () =>
        toast.error(messageErr, {
          position: "bottom-right",
        });
      notifyErr();
      console.error(
        "register error",
        //@ts-ignore
        e.response.data.result.message
      );
    }
  };

  return (
    <div className={s.advancedSetting}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.sectionCheckboxGroup}>
          <Controller
            control={control}
            name="real_rates"
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup
                id="real_rates"
                title="We will share real time rates via ChangeGuru API"
                className={s.checkboxGroup}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="evaluate_reg"
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup
                id="evaluate_reg"
                title="ChangeGuru can evaluate our registration process"
                className={s.checkboxGroup}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="evaluate_tc"
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup
                id="evaluate_tc"
                title="ChangeGuru is allowed to evaluate our trading cycle"
                description="including registration, deposit funds, initiate and complete a trade, withdraw funds, close account"
                className={s.checkboxGroup}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>
            Please Check Below Applicable Functions
          </span>
          <div className={s.checkboxList}>
            <Controller
              control={control}
              name="support_247"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_247"
                    onChange={onChange}
                    value={value}
                  />
                  <span>24/7 Support</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="support_email"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_email"
                    onChange={onChange}
                    value={value}
                  />
                  <span>E-Mail</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="support_call"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_call"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Call Center</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="support_livechat"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_livechat"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Live Chat</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="support_whatsapp"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_whatsapp"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Whatsapp</span>
                </label>
              )}
            />
          </div>

          <div className={s.inputs}>
            <Controller
              control={control}
              name="support_resptime"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => {
                return (
                  <Selector
                    name="support_resptime"
                    placeholder="Response Time"
                    options={resptimeList}
                    className={s.selector}
                    onChange={onChange}
                    errors={errors}
                    value={value}
                  />
                );
              }}
            />

            <div className={s.withHint}>
              <Controller
                control={control}
                name="kyc_level"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => {
                  return (
                    <Selector
                      name="kyc_level"
                      placeholder="KYC Level"
                      options={kycList}
                      className={s.selector}
                      onChange={onChange}
                      errors={errors}
                      value={value}
                    />
                  );
                }}
              />

              <p className={s.hint}>
                NO KYC Low KYC | Submit ID / Passport Medium KYC | Submit
                scanned ID + scanned Address Proof High KYC | Submit the above +
                Video Ident
              </p>
            </div>
            <Controller
              control={control}
              name="liquidity_volume"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => {
                return (
                  <Selector
                    name="liquidity_volume"
                    placeholder="Liquidity Volume"
                    options={liquidityList}
                    className={s.selector}
                    onChange={onChange}
                    errors={errors}
                    value={value}
                  />
                );
              }}
            />
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Trading Features</span>
          <div className={s.checkboxList}>
            <Controller
              control={control}
              name="tf_advancedtt"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_advancedtt"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Advanced Trading Tools</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_stoploss"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_stoploss"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Stop-Loss Orders</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_limitorders"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_limitorders"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Limit Orders</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_margin"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox id="tf_margin" onChange={onChange} value={value} />
                  <span>Margin Trading</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_marketorders"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_marketorders"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Market Orders</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_charting"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_charting"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Charting Tools</span>
                </label>
              )}
            />
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Advanced Features </span>
          <div className={s.checkboxList}>
            <Controller
              control={control}
              name="af_2fa"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox id="af_2fa" onChange={onChange} value={value} />
                  <span>2FA</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_aml"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox id="af_aml" onChange={onChange} value={value} />
                  <span>AML</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_coldstorage"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="af_coldstorage"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Cold Storage </span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_whitelisting"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="af_whitelisting"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Whitelisting</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_mobileapp"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="af_mobileapp"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Mobile App</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_api"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox id="af_api" onChange={onChange} value={value} />
                  <span>API Acces</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_insurance"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="af_insurance"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Insurance Coverage</span>
                </label>
              )}
            />
          </div>
        </div>

        <Button onClick={() => {}} type="submit" className={s.submitBtn}>
          Submit Form
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};
