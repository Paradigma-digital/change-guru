import { Button, CalendarIcon, Input, Selector, TextArea } from "shared/ui";

import { countryList } from "shared/config";

import s from "./styles.module.sass";

import { UploadPhoto } from "features/UploadPhoto";
import { AddManager } from "features/AddManager";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useExchangeStore } from "entities/Exchange";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { observer } from "mobx-react-lite";
import { exchangeApi } from "shared/api";

export const BasicInfo = observer(() => {
  const { exchangeData, handleUpdateExchange } = useExchangeStore();

  const notify = () =>
    toast.success("the information has been changed", {
      position: "bottom-right",
    });

  const {
    register,
    handleSubmit,
    control,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      e_name: "",
      e_website: "",
      e_short_description: "",
      e_long_description: "",
      country: "",
      a_code: "",
      e_email: "",
    },
  });

  useEffect(() => {
    if (exchangeData) {
      setValue("e_name", exchangeData.e_name);
      setValue("e_website", exchangeData.e_website);
      setValue("country", {
        value: exchangeData.country,
        label:
          exchangeData.country.charAt(0).toUpperCase() +
          exchangeData.country.slice(1),
      });
      setValue("e_short_description", exchangeData.e_short_description);
      setValue("e_long_description", exchangeData.e_long_description);
      setValue("a_code", exchangeData.a_code);
      setValue("e_email", exchangeData.e_email);
    }
  }, [exchangeData]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const {
      e_name,
      e_website,
      country,
      e_short_description,
      e_long_description,
      a_code,
      e_email,
    } = data;
    const updateExchangeData = {
      e_name,
      e_website,
      country: country.value,
      e_short_description,
      e_long_description,
      a_code,
      e_email,
    };
    if (localStorage.getItem("token")) {
      await exchangeApi.updateExchange(
        updateExchangeData,
        localStorage.getItem("token")
      );
      handleUpdateExchange(updateExchangeData);
      notify();
    }
  };

  return (
    <div className={s.info}>
      <span className={s.title}>Basic Information</span>
      <form onSubmit={handleSubmit(onSubmit)} className={s.infoForm}>
        <div className={s.mainName}>
          <Input
            required
            id="e_name"
            register={register}
            placeholder="Name of Exchange"
            errors={errors}
          />
          <Input
            required
            id="e_website"
            register={register}
            placeholder="Website"
            errors={errors}
          />
        </div>
        <TextArea
          required
          id="e_short_description"
          register={register}
          placeholder="Short Description"
          errors={errors}
        />
        <TextArea
          required
          id="e_long_description"
          register={register}
          placeholder="Long Description"
          errors={errors}
        />
        <div className={s.doubleInputs}>
          <Controller
            control={control}
            name="country"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => {
              return (
                <Selector
                  options={countryList}
                  onChange={onChange}
                  placeholder="Country"
                  className={s.selector}
                  name="country"
                  errors={errors}
                  defaultValue={value}
                  value={value}
                />
              );
            }}
          />

          <Input
            required
            id="a_code"
            register={register}
            placeholder="Code"
            // icon={<CalendarIcon />}
          />
        </div>
        {/* <UploadPhoto label="Upload Logo" /> */}
        <div className={s.managerWrapper}>
          <AddManager className={s.manager} />
        </div>
        <Button type="submit" onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
});
